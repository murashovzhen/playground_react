import styles from "./styles.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from 'react-router-dom'
import Menu from "../Header/Menu";
import AsideMenu from "../Aside Menu";

const Layout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Menu />
      <div className={styles.content}>
        <Outlet />
      </div>
      <AsideMenu/>
      <Footer />
    </div>
  );
};

export default Layout;
