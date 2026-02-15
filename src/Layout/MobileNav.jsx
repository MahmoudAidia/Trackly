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
function MobileNav({ setShowModal, size }) {
  const { logout } = useAppContext();
  const queryClient = useQueryClient();

  return (
    <div className={`mobileNav ${size}`}>
      <div>
        <Link to="./dashboard">
          <HomeOutlinedIcon />
          <span>Dashboard</span>
        </Link>
        <Link to="./transactions">
          <MonetizationOnOutlinedIcon />
          <span>Transactions</span>
        </Link>
        <button onClick={setShowModal} className="addTransaction">
          <AddCircleOutlineIcon />
        </button>
        <Link to="./budgets">
          <DataUsageOutlinedIcon />
          <span>Budgets</span>
        </Link>
        <Link to="./analytics">
          <MovingOutlinedIcon />
          <span>Analytics</span>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
