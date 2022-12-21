import MovieCard from "./MovieCard";

export default function RecentlyViewedRow({ recentlyViewed }) {

  //Om inga filmer finns i listan returneras en tom div.
  if (recentlyViewed.length === 0) {
    return <div></div>;
  } else
  return (
    <section className="row">
      <h1>Recently viewed</h1>
      <div className="movies">
        {recentlyViewed.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
}
