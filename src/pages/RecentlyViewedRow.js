import MovieCard from "./MovieCard";

export default function RecentlyViewedRow({ recentlyViewed }) {
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
