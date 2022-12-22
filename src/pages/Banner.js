import { useState, useEffect } from "react";
import "./pages.css";
import axios from "../axios";
import requests from "../Requests";

export default function Banner() {
const [movie, setMovie] = useState([]);

//Fetchar random bild till bannern
useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchTrending);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
        )
        console.log(movie && movie);
    }
    //Ändrar bannern var sjätte sekund
setInterval(() => {fetchData()}, 6000);
//Sätter första bilden på bannern
fetchData();
}, [])

//? betyder optional för innan är movie inte definierad
    return <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.backdrop} ")`,
        backgroundPosition: "center center",
    }}
    >
        <div className="bannerContents">
            <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.name }</h1>
            <div className="bannerButtons">
                <button className="bannerButton">Play</button>
                <button className="bannerButton">My List</button>
            </div>
            <h1 className="bannerDescription">{ (movie?.overview)?.substring(0, 150) + ('...')} </h1>
        </div>

        <div className="bannerFadeBottom" />
    </header>
}