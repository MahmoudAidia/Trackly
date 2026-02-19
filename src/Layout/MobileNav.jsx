import { Link } from "react-router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useQueryClient } from "@tanstack/react-query";
import { useAppContext } from "../Context/AppContext";
import "./MobileNav.scss";
function MobileNav({ setShowModal, setOpenNav, size }) {
  const { logout } = useAppContext();
  const queryClient = useQueryClient();

  return (
    <div className={`mobileNav ${size}`}>
      <div>
        <Link to="./dashboard" onClick={() => setOpenNav(false)}>
          <HomeOutlinedIcon />
          <span>Dashboard</span>
        </Link>
        <Link to="./transactions" onClick={() => setOpenNav(false)}>
          <MonetizationOnOutlinedIcon />
          <span>Transactions</span>
        </Link>

        <Link to="./budgets" onClick={() => setOpenNav(false)}>
          <DataUsageOutlinedIcon />
          <span>Budgets</span>
        </Link>
        <Link to="./analytics" onClick={() => setOpenNav(false)}>
          <MovingOutlinedIcon />
          <span>Analytics</span>
        </Link>
        <button
          className="addTransaction btn"
          onClick={() => {
            setOpenNav(false);
            setShowModal(true);
          }}
        >
          <AddCircleOutlineIcon />
          <span>Add Transaction</span>
        </button>

        <button
          className="logout btn"
          onClick={() => {
            queryClient.clear();
            logout();
          }}
        >
          <LogoutIcon />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
