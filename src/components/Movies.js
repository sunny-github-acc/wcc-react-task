import Movie from "./Movie"

const ServerMovies = ({ classTitle, movies, handleMovieClick }) => {
    console.log('movies', movies == "")
    if (movies == "") movies = ["We looked everywhere but couldn't find your movie"];
    return (
        <div className={classTitle}>
            {movies.map((movie, index) => {
                if (index < 8) {
                    return <Movie 
                                movie={movie} 
                                key={movie.id || 1} 
                                id={movie.id || 1} 
                                handleMovieClick={handleMovieClick}/>
                }
            })}
        </div>
    )
}

export default ServerMovies