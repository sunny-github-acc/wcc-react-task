import Movie from "./Movie"

const ServerMovies = ({ classTitle, movies, isPending, error, handleMovieClick }) => {
    return (
        <div className={classTitle}>
            {isPending && <h3 className="pending">Intensly looking for movies...</h3>}
            {movies && movies.map((movie, index) => {
                if (index < 8) {
                    return <Movie 
                                movie={movie} 
                                key={movie.id || 1} 
                                id={movie.id || 1} 
                                handleMovieClick={handleMovieClick}/>
                }
            })}
            {!movies && !error && <h3 className="not-found"></h3>}
            {error && <h3 className="error">{error}</h3>}
        </div>
    )
}

export default ServerMovies