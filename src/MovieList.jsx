function MovieList() {
  const movies = ["RRR", "Pushpa", "Bahubali", "Jersey", "Salaar"];

  return (
    <div>
      <h2>Movie Names</h2>

      {movies.map((movie, index) => (
        <p key={index}>{movie}</p>
      ))}
    </div>
  );
}

export default MovieList;