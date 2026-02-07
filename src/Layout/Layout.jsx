import { Link, Outlet } from "react-router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import "./Layout.scss";
function Layout() {
  return (
    <div className="layout">
      <aside>
        <div className="logoBox">
          <span className="logo">T</span>
          <div>
            <h3>Trackly</h3>
            <span>Smart Expense Tracker</span>
          </div>
        </div>
        <Link to="./dashboard">
          <HomeOutlinedIcon />
          <span>Dashboard</span>
        </Link>
        <Link>
          <MonetizationOnOutlinedIcon />
          <span>Transactions</span>
        </Link>
        <Link>
          <DataUsageOutlinedIcon />
          <span>Budgets</span>
        </Link>
        <Link>
          <MovingOutlinedIcon />
          <span>Analytics</span>
        </Link>
        <Link>
          <PersonOutlineOutlinedIcon />
          <span>Profile</span>
        </Link>
      </aside>
      <Outlet />
    </div>
  );
}

export default Layout;
