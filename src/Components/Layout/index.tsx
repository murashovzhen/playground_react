import styles from "./styles.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Menu from "../Header/Menu";
import AsideMenu from "../AsideMenu";
import { Pager } from "../Paging";

const Layout = () => {
  return (

    <div className={styles.app}>
      <Header />
      {/* <Menu /> */}
      <div className={styles.content}>
        <Outlet />
      </div>
      <AsideMenu />
      <div>
        <Pager total={100} itemPerPage={12} currentPage={2} />
      </div>
      <Footer />
    </div>

  );
};

export default Layout;
