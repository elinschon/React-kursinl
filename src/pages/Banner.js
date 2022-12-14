import { useState, useEffect } from "react";
import "./pages.css";
import axios from "../axios";
import requests from "../Requests";

export default function Banner() {
const [movie, setMovie] = useState([]);

//fetchar random bild till bannern
useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchTrending);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
        )
    }
    //ändrar bannern var sjätte sekund
setInterval(() => {fetchData()}, 6000);
//sätter första bilden på bannern, annars kommer den efter 6s.
fetchData();

}, [])

//? after movie is optional för innan är den inte definierad
    return <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}
    >
        <div className="bannerContents">
            <h1 className="bannerTitle">{movie?.title}</h1>
            <div className="bannerButtons">
                <button className="bannerButton">Play</button>
                <button className="bannerButton">My List</button>
            </div>
            {/* <h1 className="bannerDescription">This is a description of the movie</h1> */}
        </div>

        <div className="bannerFadeBottom" />
    </header>
}