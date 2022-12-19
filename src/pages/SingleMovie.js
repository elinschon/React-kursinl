import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "../axios";

const API_KEY = "bf920c0eccef0a5571a534bbb27fffc5";
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
        <section className="movieInfo">
          <div className="movieWrapper">
            {/* <img className="singleMovieImage" src={base_url + (singleMovie && singleMovie.poster_path)} alt="" /> */}            
            <img className="singleMovieImage" src={base_url + (singleMovie?.backdrop_path)} alt="" />
            </div>
            <div className="imgFadeBottom" />
          <div className="wrapper">
            </div>
            <article className="infoContainer">
            <h1>
            {/* {singleMovie && singleMovie.original_title} */}
            {singleMovie?.original_title}
            </h1>
            {/* <p>{singleMovie && singleMovie.overview}</p> */}
            <p>{singleMovie?.overview}</p>
            </article>
        </section>
    )
}