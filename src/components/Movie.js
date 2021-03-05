const Movie = ({ movie, id, handleMovieClick }) => {
    return (
        <div id={id} className="movie" onMouseDown={handleMovieClick}>
            {movie.original_title && 
                <><h3 className="movie-title">{movie.original_title}</h3>
                <h5>{movie.vote_average} Rating, 
                    {movie.release_date && movie.release_date.slice(0, 4)}</h5></>}

            {!movie.original_title && 
                <h3 className="not-found">We looked everywhere but couldn't find your movie</h3>}
        </div>
    )
}

export default Movie