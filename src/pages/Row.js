import axios from "../axios";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import './pages.css';

function Row({ title, fetchURL, addRecentlyViewed}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchURL);
          setMovies(request.data.results);
          return request;
        }
    
        fetchData();
      }, [fetchURL]);

      return (
        <section className="row">
          <h1>{title}</h1>
          <div className="movies">
            {movies.map((movie) => {
              return (
                  <MovieCard key={movie.id} movie={movie} 
                  addRecentlyViewed={addRecentlyViewed}
                  />
              );
            })}
          </div>
        </section>
      );
}

export default Row;