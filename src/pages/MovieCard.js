import { Link } from 'react-router-dom';
import './pages.css';

export default function MovieCard({ movie, addRecentlyViewed}) {

    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="movieCard">
          <Link to={`/movie${movie.id}`} onClick={() => addRecentlyViewed({movie})}> 
            <img className="movieImage" src={`${base_url}${movie.poster_path}`} alt="movie.title" height={"300"}/>
            <h3>{`${movie.title}`}</h3>
            <i className='fa fa-star' style={{fontSize:18}}></i>
            <p>{`${movie.vote_average}`}</p>
            </Link>   
        </div>
    
      )
}