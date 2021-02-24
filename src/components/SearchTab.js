import {ReactComponent as SearchLogo} from '../icons/search.svg';
import {ReactComponent as MovieLogo} from '../icons/movie.svg';

const SearchTab = ({ title, onAdd, showAdd }) => {
  return (
    <form action="#">
      <label for="search" className="label-input-text">
        <MovieLogo className="movie logo" />
      </label>
      <input type="text" id="search" name="search" className="input-text" placeholder="Enter movie name" />
      <label for="submit" className="label-submit">
        <SearchLogo className="search logo" />
      </label>
      <input id="submit" type="submit" value="" hidden />
    </form>
  )
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }


export default SearchTab