import NavBar from "../Navbar/NavBar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <NavBar />
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
