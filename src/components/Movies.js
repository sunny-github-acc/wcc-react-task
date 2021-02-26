import { useState } from 'react'
import Movie from "./Movie"

const ServerMovies = ({ className, search }) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const result = await fetch("https://api.themoviedb.org/3/search/movie?api_key=7e9221d5edd3d84c33957b05bcec9848&language=en-US&query=" + search);
        const data = await result.json();

        setMovies(data.results);
        console.log('data.results', data.results)
    }
    
    
    if (search.length > 2) fetchMovies();

    return (
        <div className={className}>
            {movies.map((movie, index) => {
                if (index < 9) {
                    <Movie movie={movie} />
                }
            })
            }
        </div>
    )
}

export default ServerMovies