import './App.css';
import LoadingBar from 'react-top-loading-bar';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

// Importing the required router components that are necessary to work with
import {
  Routes,
  Route
} from 'react-router-dom';

// difference b/w class based component and function based components
// 1. Here we do with the help of render method/function , and there we used to return the data to the method
// 2. Here states and props working and usage are totally different.
// 3. Management regarding methods are easy here as and when compared to the function based component.

const App = () =>{

  // Creating a method here
  const pageSize = 6;

  // defining a var for the API key regarding passing it through the props.
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress,setProgress] = useState(0);

  return (
    <div>

      {/* Adding Navbar as Header here */}
      <Navbar titleData = "NewsApp" homeData = "Visit Home"/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        
        {/* Adding further news item and some different components */}
        <Route exact path = "/newsapp" element = {<News setProgress={setProgress} apiKey={apiKey} key = "general" pageSize={pageSize} country="us" category="general"/>} />

        {/* Defining further subcategories here for different categories of news */}
        <Route exact path = "/science" element = {<News setProgress={setProgress} apiKey={apiKey} key = "science" pageSize={pageSize} country="us" category="science"/>} />
        <Route exact path = "/sports" element = {<News setProgress={setProgress} apiKey={apiKey} key = "sports" pageSize={pageSize} country="us" category="sports"/>} />
        <Route exact path = "/business" element = {<News setProgress={setProgress} apiKey={apiKey} key = "business" pageSize={pageSize} country="us" category="business"/>} />
        <Route exact path = "/health" element = {<News setProgress={setProgress} apiKey={apiKey} key = "health" pageSize={pageSize} country="us" category="health"/>} />

        </Routes>
    </div>
  )
}

export default App