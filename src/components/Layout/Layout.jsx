import NavBar from "../Navbar/NavBar";
import Header from "../Header/Header";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <NavBar />
      <main className="layout-content">{children}</main>
    </div>
  );
}

export default Layout;
