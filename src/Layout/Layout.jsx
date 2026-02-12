import { Link, Outlet } from "react-router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Layout.scss";
import { useState } from "react";
import Modal from "../UI/Modal";
import AddExpense from "../Components/AddExpense/AddExpense";
import { useAppContext } from "../Context/AppContext";
import { useQueryClient } from "@tanstack/react-query";
function Layout() {
  const [showModal, setShowModal] = useState(false);
  const { logout } = useAppContext();

  const queryClient = useQueryClient();
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
        <Link to="./transactions">
          <MonetizationOnOutlinedIcon />
          <span>Transactions</span>
        </Link>
        <Link to="./budgets">
          <DataUsageOutlinedIcon />
          <span>Budgets</span>
        </Link>
        <Link to="./analytics">
          <MovingOutlinedIcon />
          <span>Analytics</span>
        </Link>
        <Link to="./profile">
          <PersonOutlineOutlinedIcon />
          <span>Profile</span>
        </Link>
        <button
          className="logout"
          onClick={() => {
            queryClient.clear();
            logout();
          }}
        >
          <LogoutIcon />
          <span>Log Out</span>
        </button>

        <button onClick={setShowModal} className="addTransaction">
          <AddCircleOutlineIcon />
          <span>Add Transaction</span>
        </button>
      </aside>
      <Outlet />
      <Modal isOpen={showModal} onClose={setShowModal} title="Add Transaction">
        <AddExpense setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}

export default Layout;
