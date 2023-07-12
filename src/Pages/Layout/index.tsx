import { Outlet } from "react-router-dom";
import Header from "../../Components/header";
import SideBar from "../../Components/sideBar";
import styles from './styles.module.scss'

//import AsideMenu from "../AsideMenu";

const Layout = () => {
  return (

    <div className={styles.main}>
      <SideBar/>
      <Header />      
      <Outlet />
      
    </div>

  );
};

export default Layout;
