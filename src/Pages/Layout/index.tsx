import { Outlet } from "react-router-dom";
import Header from "../../Components/header";
import styles from './styles.module.scss';
//import AsideMenu from "../AsideMenu";

const Layout = () => {
  return (

    <div className={["bg-dark", styles.app].join(' ')}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
        
      {/* <AsideMenu />
      <Footer /> */}
    </div>

  );
};

export default Layout;
