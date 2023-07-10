import { Outlet } from "react-router-dom";
import Header from "../../Components/header";
import styles from './styles.module.scss';
//import AsideMenu from "../AsideMenu";

const Layout = () => {
  return (

    <div className="bg-dark">
      <Header />
      <Outlet />


      {/* <AsideMenu />
      <Footer /> */}
    </div>

  );
};

export default Layout;
