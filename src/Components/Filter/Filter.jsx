import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PushPinIcon from "@mui/icons-material/PushPin";

import "./Filter.scss";
import { useState } from "react";
const categories = [
  { name: "All", icon: <LunchDiningIcon />, id: 0 },
  { name: "Food", icon: <LunchDiningIcon />, id: 1 },
  { name: "Transport", icon: <AirportShuttleIcon />, id: 2 },
  { name: "Bills", icon: <EmojiObjectsIcon />, id: 3 },
  { name: "Shopping", icon: <ShoppingCartIcon />, id: 4 },
  { name: "Health", icon: <HealthAndSafetyIcon />, id: 5 },
  { name: "Education", icon: <SchoolIcon />, id: 6 },
  { name: "Entertainments", icon: <SportsEsportsIcon />, id: 7 },
  { name: "Salary", icon: <SportsEsportsIcon />, id: 8 },
  { name: "Freelance", icon: <SportsEsportsIcon />, id: 8 },
  { name: "Other", icon: <PushPinIcon />, id: 9 },
];

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
            {categories.map((item) => (
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
