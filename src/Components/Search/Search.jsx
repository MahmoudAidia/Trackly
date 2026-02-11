import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import Filter from "../Filter/Filter";

function Search({ handleOnChange }) {
  return (
    <div className="search">
      <h2>Transactions</h2>

      <div className="searchBar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Transactions"
          onChange={(e) => handleOnChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
