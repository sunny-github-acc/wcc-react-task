import { useState, useEffect } from 'react'
import { ReactComponent as SearchLogo } from '../icons/search.svg'
import { ReactComponent as MovieLogo } from '../icons/movie.svg'
import Movies from "./Movies"

const SearchTab = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputStateValue, setInputValue] = useState("");
  const [placeholderStateValue, setPlaceholderValue] = useState("Enter a movie name");
  const [movies, setMovies] = useState([]);
  
  const handleFocus = () => {
    setIsInputFocused(true);

    setPlaceholderValue("Enter a movie name");
  }

  const handleBlur = () => {
    setIsInputFocused(false);

    inputStateValue ? 
      setPlaceholderValue(inputStateValue) : 
      setPlaceholderValue("Enter a movie name");
  }

  const handleChange = (e) => {
    let input = e.target.value; 

    setInputValue(input);

    getMovies(input);
  }

  const getMovies = async (input) => {
    let movies = [" "];
    
    if (input.length > 2) movies = await fetchMovies(input);
    
    setMovies(movies); 
  }
  
  const fetchMovies = async (input) => {
    const result = await fetch("https://api.themoviedb.org/3/search/movie?api_key=7e9221d5edd3d84c33957b05bcec9848&language=en-US&query=" + input);
    const data = await result.json();

    return data.results;
  }

  const handleMovieClick = (e) => {
    const selectedMovie = e.target.closest(".movie").querySelector("h3").innerHTML;

    setInputValue(selectedMovie);
  }

  let inputState = isInputFocused ? "focused" : "not-focused";
  let placeholderValue = placeholderStateValue;

  return (
    <form action="#">
      <label htmlFor="search" className="label-input-text">
        <MovieLogo className="movie-logo" />
        <span className={`placeholder ${inputState}`}>{placeholderValue}</span>
      </label>
      <div className={`container-input-movies ${inputState}`}>
        <div className={`container-input-text ${inputState}`}>
          <MovieLogo className={`movie-logo ${inputState}`} />
          <input type="text" id="search" name="search" autoComplete="off"
            className={`input-text ${inputState}`}
            onChange={(e) => handleChange(e)}
            value={inputStateValue}
            onFocus={handleFocus}
            onBlur={handleBlur} />
        </div>
        <Movies 
          classTitle={`movie-titles ${inputState}`}
          movies={movies}
          input={inputStateValue}
          handleMovieClick={handleMovieClick} />
      </div>

      <label htmlFor="submit" className={`label-submit ${inputState}`}>
        <SearchLogo className="search-logo" />
      </label>
      <input id="submit" type="submit" value="" hidden />
    </form>
  )
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }


export default SearchTab