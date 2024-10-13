import '../App.css';
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>{

    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)

    // Changing the title of the Page while change on Category
    // document.title = `NewsApp - ${capatilizeWord(this.props.category)}`


    // defining the Capatilize Method in order to Capatilise the first letter of the Category
    const capatilizeWord = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    // creating a method here in order to maintain the usability of the code.
    const updateNews = async () => {

        // Setting the progress of the Progress Bar
        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;

        // Adding code for spinner method concept in order to spin at the time of fetching the data
        setLoading(true);

        let data = await fetch(url);
        props.setProgress(50);

        let parsedData = await data.json();

        // Setting the bar values to be changes when the data is fetched
        props.setProgress(70);

        // Setting the code as per functional-based components
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);

        // Setting the progress of the top bar back to 100
        props.setProgress(100);

    }

    useEffect(() => {

        // Changing the title of the Page while change on Category
        document.title = `NewsApp - ${capatilizeWord(props.category)}`

        updateNews();
        // eslint-disable-next-line
    }, []);

    // defining a method for getting the data fetched
    const fetchmoreData = async () => {
        
        // Getting the updated data loaded here
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setPage(page + 1);

        let data = await fetch(url);
        let parsedData = await data.json();

        if((articles in parsedData.articles)){
            setArticles(articles.concat(parsedData.articles))
        }
        setTotalResults(parsedData.totalResults);
        setLoading(false);

    }

    return (
        <div className="container mt-3">
            <h3 className="fs-2 text-center mainHead"> NewsApp - Top {capatilizeWord(props.category)} Headlines </h3>

            {/* Adding a spinner component here for loading purpose here */}
            {loading && <Spinner />}

            {/* Using the infiniteScroll here */}
            <InfiniteScroll
                dataLength={!articles ? articles.length : 0}
                next={fetchmoreData}
                hasMore={articles.length !== totalResults}
                loader={true}
            >

                <div className="container">

                    {/* Putting the data into the Rows in the format of Columns */}
                    <div className="row my-3">

                        {/* Using Map method for mapping all the data of the array for the articles */}
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source} />
                            </div>
                        })}

                    </div>

                </div>
            </InfiniteScroll>
        </div>
    )
}


// defining the Proptypes for the props that we have used till now
News.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}

// setting the default proptypes values here
News.defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general"
}

export default News
