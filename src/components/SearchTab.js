import { useState } from 'react'
import { ReactComponent as SearchLogo } from '../icons/search.svg'
import { ReactComponent as MovieLogo } from '../icons/movie.svg'
import Movies from "./Movies"

const SearchTab = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputStateValue, setInputValue] = useState("");
  const [placeholderStateValue, setPlaceholderValue] = useState("Enter a movie name");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFocus = (e) => {
    e.preventDefault();
    setIsInputFocused(true);
    setPlaceholderValue("Enter a movie name");
  }

  const handleBlur = () => {
    setIsInputFocused(false);
    inputStateValue ? 
      setPlaceholderValue(inputStateValue) : 
      setPlaceholderValue("Enter a movie name");
  }

  let inputState = isInputFocused ? "focused" : "not-focused";
  let searchDisplay = isInputFocused ? "no-display" : "";
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
          <input type="text" id="search" name="search"
            className={`input-text ${inputState}`}
            onChange={(e) => handleChange(e)}
            onFocus={(e) => handleFocus(e)}
            onBlur={() => handleBlur()} />
        </div>
        <Movies 
          className={`movie-titles ${inputState}`}
          search={inputStateValue} />
      </div>

      <label htmlFor="submit" className={`label-submit ${searchDisplay}`}>
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