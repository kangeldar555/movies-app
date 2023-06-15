const ListOfMovies = ({movies}) => {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))
      }
    </ul>
  )
}

const NoMoviesResults = () => {
  return (
    <p>No se encontraron películas</p>
  )
}

const Movies = ({movies}) => {
  const hasMovies = movies?.length > 0;
  return (
    hasMovies
    ? <ListOfMovies movies={movies}/>
    : <NoMoviesResults/>
  )
}

export default Movies;
