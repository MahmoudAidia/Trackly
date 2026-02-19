import { Link, Outlet } from "react-router";

import "./Layout.scss";
import { useState } from "react";
import Modal from "../UI/Modal";
import AddExpense from "../Components/AddExpense/AddExpense";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import SideBar from "./SideBar";
import MobileNav from "./MobileNav";
function Layout() {
  const [showModal, setShowModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="layout">
      <SideBar setShowModal={setShowModal} size="large" />
      <nav className="nav">
        {openNav && (
          <Modal onClose={setOpenNav} isOpen={openNav} title={"Navigation"}>
            <MobileNav setShowModal={setShowModal} setOpenNav={setOpenNav} />
          </Modal>
        )}
        <button className="menuBtn" onClick={() => setOpenNav((prev) => !prev)}>
          {!openNav ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
        </button>
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
