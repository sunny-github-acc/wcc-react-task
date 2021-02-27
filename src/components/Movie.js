const Movie = ({ movie, id, handleMovieClick }) => {
    if (movie.original_title === undefined) return <h3 className="not-found">{movie}</h3>
    else return (
        <div id={id} className="movie" onMouseDown={handleMovieClick}>
            <h3>{movie.original_title}</h3>
            <h5>{movie.vote_average} Rating, {movie.release_date.slice(0, 4)}</h5>
        </div>
    )
}

export default Movie