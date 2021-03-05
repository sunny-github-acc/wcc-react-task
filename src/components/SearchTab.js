import { useState } from "react"
import { ReactComponent as SearchLogo } from '../icons/search.svg'
import { ReactComponent as MovieLogo } from '../icons/movie.svg'
import Movies from "./Movies"
import useFetch from "../hooks/useFetch"

const SearchTab = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [placeholderValue, setPlaceholderValue] = useState("Enter a movie name");
  const { error, isPending, data: movies } = useFetch(inputValue);
  const defaultPlaceholder = "Enter a movie name";
  let inputState = isInputFocused ? "focused" : "not-focused";
  
  const handleFocus = () => {
    setIsInputFocused(true);
    setPlaceholderValue(defaultPlaceholder);
  }

  const handleBlur = () => {
    setIsInputFocused(false);

    inputValue ? 
      setPlaceholderValue(inputValue) : 
      setPlaceholderValue(defaultPlaceholder);
      
    window.getSelection().removeAllRanges();
  }
  
  const handleMovieClick = (e) => {
    const selectedMovie = e.target.closest(".movie").querySelector(".movie-title");
    if (selectedMovie) setInputValue(selectedMovie.innerText);
  }

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
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur} />
        </div>
        <Movies 
          classTitle={`movie-titles ${inputState}`}
          movies={movies}
          isPending={isPending}
          error={error}
          input={inputValue}
          handleMovieClick={handleMovieClick} />
      </div>

      <label htmlFor="submit" className={`label-submit ${inputState}`}>
        <SearchLogo className="search-logo" />
      </label>
      <input id="submit" type="submit" value="" hidden />
    </form>
  )
}

export default SearchTab