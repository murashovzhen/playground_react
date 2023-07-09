import { Outlet } from "react-router-dom";
import Header from "../../Components/header";
import styles from './styles.module.scss';
//import AsideMenu from "../AsideMenu";

const Layout = () => {
  return (

    <div className="bg-dark">
      <Header />
      <div>  <div className={styles.content1}>
        <Outlet />
      </div></div>


      {/* <AsideMenu />
      <Footer /> */}
    </div>

  );
};

export default Layout;
