import MovieCard from "./MovieCard";

export default function ResultRow({ searchedMovies }) {

  //Om inget söks på returneras en tom div.
    if (searchedMovies.length === 0) {
      return <div></div>;
    } else
      return (
        <section className="row">
          <h1>{"Search Results:"}</h1>
          <div className="movies">
            {searchedMovies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      );
  }