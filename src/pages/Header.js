import { useEffect, useState } from "react";
import "./pages.css";

export default function Header({ setSearchedMovies }) {
    const [query, setQuery] = useState("");
    const [show, handleShow] = useState(false);

const API_KEY = process.env.REACT_APP_API_KEY;

  const searchMovieFetch = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query};`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.results) {
      setSearchedMovies(data.results);
    }
  };

  useEffect(() => {
    searchMovieFetch(query);
  }, [query]);

//För transition av navbar vid scrolling
const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    //Cleanup
    return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

    return (
        <div className={`nav ${show && "navBlack"}`}>
            <div className="navContent">
            <img className="navLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1150px-IMDB_Logo_2016.svg.png?20200406194337" alt="" />
            <div className="searchBarContainer">
      <input
      id="searchQueryInput"
        type="text"
        value={query}
        onChange={(e) => {setQuery(e.target.value); window.scrollTo({top: 350, left: 0, behavior: 'smooth'})}}
        placeholder="Search movie..."
      />
    </div>
            </div>
        </div>
    )
}