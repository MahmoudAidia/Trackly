import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Filter.scss";
import { useState } from "react";
import { filterCategories } from "../../helpers/constants";

function Filter({ activeFilter, setActiveFilter }) {
  const [displayFilter, setDisplayFilter] = useState(false);

  return (
    <div className="filterBox">
      <button
        onClick={() => {
          setDisplayFilter((prev) => {
            if (prev === true) {
              setActiveFilter({ category: "All", active: "all" });
              return false;
            } else {
              return true;
            }
          });
        }}
      >
        <FilterAltOutlinedIcon />
        <span>Filter</span>
        {displayFilter ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </button>

      {displayFilter && (
        <div className="filter">
          <h4>Type</h4>
          <div className="type">
            <button
              onClick={() =>
                setActiveFilter({ ...activeFilter, active: "all" })
              }
              className={`${activeFilter.active === "all" ? "active" : ""}`}
            >
              All
            </button>
            <button
              onClick={() =>
                setActiveFilter({ ...activeFilter, active: "expense" })
              }
              className={`${activeFilter.active === "expense" ? "active" : ""}`}
            >
              Expense
            </button>
            <button
              onClick={() =>
                setActiveFilter({ ...activeFilter, active: "income" })
              }
              className={`${activeFilter.active === "income" ? "active" : ""}`}
            >
              Income
            </button>
          </div>
          <h4>Category</h4>
          <select
            className="dropdown"
            onChange={(e) =>
              setActiveFilter({
                ...activeFilter,
                category: e.target.value,
              })
            }
          >
            {filterCategories.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name === "All" ? item.name + " Categories" : item.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Filter;
