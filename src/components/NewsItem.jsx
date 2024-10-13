import '../App.css';
import React from 'react'

const NewsItem = (props) =>{

    // Adding props regarding the details to be redirected from the main page of the News
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
        <div>
            <div className="card">
                <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ymgJnjliBlv5kGwEY2WDxtEUSQv1xT42MQ&s" : imageUrl} className="card-img-top" alt="Main News" />
                <div className="card-body">
                    <h5 className="card-title"> {title} <span className="position-absolute top-0 start-50 translate-middle badge rounded-3 bg-warning text-dark">
                        {source.name}
                        <span className="visually-hidden">unread messages</span>
                    </span> </h5>
                    <p className="card-text"> {description} </p>

                    {/* Adding details regarding author and fixing it by chance if the author is null */}
                    <p className="card-text"><small className="text-body-secondary"> By {!author ? "Unknown Author" : author} on {date} </small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary"> Visit News </a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
