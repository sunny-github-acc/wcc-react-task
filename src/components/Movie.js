const Movie = ({ movie }) => {
    return (
        <div>
            <h3>{movie.original_title}</h3>
            <h5>{movie.vote_average}</h5>
        </div>
    )
}

export default Movie