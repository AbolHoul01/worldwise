import AppNav from "../AppNav/AppNav";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
