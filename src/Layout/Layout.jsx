import { Link, Outlet } from "react-router";

import "./Layout.scss";
import { useState } from "react";
import Modal from "../UI/Modal";
import AddExpense from "../Components/AddExpense/AddExpense";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SideBar from "./SideBar";
import MobileNav from "./MobileNav";
function Layout() {
  const [showModal, setShowModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="layout">
      <SideBar setShowModal={setShowModal} size="large" />
      <nav className="nav">
        <MobileNav setShowModal={setShowModal} size="small" />
      </nav>
      <section className="app">
        <Outlet />
      </section>
      <Modal isOpen={showModal} onClose={setShowModal} title="Add Transaction">
        <AddExpense setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}

export default Layout;
