import { useState } from 'react';
import React from 'react'
import "./pages.css";
import Header from './Header'
import Banner from './Banner';
import ResultRow from './ResultRow';
import Row from './Row';
import requests from '../Requests';
import RecentlyViewedRow from './RecentlyViewedRow';

function Home({ addRecentlyViewed, recentlyViewed}) {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 
  return (
    <div className="homeScreen">
        <Header
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
        fetchURL={requests.fetchsearchMovies}
      />
        <Banner />
        <ResultRow searchedMovies={searchedMovies} />
        <Row
        title="Popular"
        fetchURL={requests.fetchPopular}
        addRecentlyViewed={addRecentlyViewed}
        isLoading={isLoading}
        setIsLoading={setIsLoading} 
      />
      <Row title="Upcoming" fetchURL={requests.fetchUpcoming}
       addRecentlyViewed={addRecentlyViewed}
       isLoading={isLoading}
        setIsLoading={setIsLoading} 
       />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}
       addRecentlyViewed={addRecentlyViewed} 
       isLoading={isLoading}
        setIsLoading={setIsLoading} 
       />
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies}
       addRecentlyViewed={addRecentlyViewed} 
       isLoading={isLoading}
        setIsLoading={setIsLoading} 
       />
       <RecentlyViewedRow recentlyViewed={recentlyViewed}/>
       

    </div>
  );
}

export default Home