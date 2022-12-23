import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "../axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const base_url = "https://image.tmdb.org/t/p/w1280";

export default function SingleMovie() {
 const [singleMovie, setSingleMovie] = useState();
const { id } = useParams();
const url = `/movie/${id}?api_key=${API_KEY}&language=en-US`;

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(url);
          setSingleMovie(request.data);
          return request;
        }
    
        fetchData();
      }, []);

    return(
      <div className="singleMovieBody">
        <Link to={`/`}>
        <img className="navLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1150px-IMDB_Logo_2016.svg.png?20200406194337" alt="Logo" />
        </Link>
        <section className="movieInfo">
          <div className="movieWrapper">
            <img className="singleMovieImage" src={base_url + (singleMovie?.backdrop_path)} alt="" />
            </div>
            <div className="imgFadeBottom" />
          <div className="wrapper">
            </div>
            <article className="infoContainer">
            <h1>
            {singleMovie?.original_title}
            </h1>
            <div className="buttonWrapper">
            <button className="singleMovieButton">Play</button>
                <button className="singleMovieButton">My List</button>
            </div>
            <p>{singleMovie?.overview}</p>
            </article>
        </section>
        </div>
    )
}