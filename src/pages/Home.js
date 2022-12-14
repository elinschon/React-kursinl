import { useState } from 'react';
import React from 'react'
import "./pages.css";
import Header from './Header'
import Banner from './Banner';
import ResultRow from './ResultRow';
import Row from './Row';
import requests from '../Requests';
import RecentlyViewedRow from './RecentlyViewedRow';

function Home({ addRecentlyViewed, recentlyViewed, setRecentlyViewed}) {
  const [searchedMovies, setSearchedMovies] = useState([]);
 
  return (
    <div className="homeScreen">
        <Header
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
        fetchURL={requests.fetchsearchMovies} //ta bort sen om axios ej funkar i HEADER
      />
        <Banner />
        <ResultRow searchedMovies={searchedMovies} />
        <Row
        title="Popular"
        fetchURL={requests.fetchPopular}
        addRecentlyViewed={addRecentlyViewed}
      />
      <Row title="Upcoming" fetchURL={requests.fetchUpcoming}
       addRecentlyViewed={addRecentlyViewed} 
       />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}
       addRecentlyViewed={addRecentlyViewed} 
       />
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies}
       addRecentlyViewed={addRecentlyViewed} 
       />
       <RecentlyViewedRow recentlyViewed={recentlyViewed}/>
       

    </div>
  );
}

export default Home