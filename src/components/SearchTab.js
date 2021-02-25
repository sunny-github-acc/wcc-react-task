import { useState } from 'react'
import {ReactComponent as SearchLogo} from '../icons/search.svg';
import {ReactComponent as MovieLogo} from '../icons/movie.svg';

const SearchTab = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = (e) => {
    e.preventDefault();
    setIsInputFocused(true);
  }

  const handleBlur = () => {
    setIsInputFocused(false);
  }

  let inputState = isInputFocused ? "passive" : "active";
  let searchDisplay = isInputFocused ? "no-display" : "";

  return (
    <form action="#">
      <label htmlFor="search" className="label-input-text">
        <MovieLogo className="movie" />
        <span className={`placeholder ${inputState}`}>
          <MovieLogo className="movie" />
          <span className="text">Enter movie name</span>
        </span>
      </label>
      <input type="text" id="search" name="search" className={`input-text ${inputState}`}
        onFocus={(e) => handleFocus(e)}
        onBlur={() => handleBlur()} />
      <div className={`container movies ${inputState}`}>
        <h3>Office</h3>
        <h4>9.0 Rating, 2007</h4>
      </div>

      <label htmlFor="submit" className={`label-submit ${searchDisplay}`}>
        <SearchLogo className="search" />
      </label>
      <input id="submit" type="submit" value="" hidden />
    </form>
  )
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }


export default SearchTab