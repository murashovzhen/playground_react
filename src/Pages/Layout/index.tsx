import { Outlet } from "react-router-dom";
import Header from "../../Components/header";
//import AsideMenu from "../AsideMenu";

const Layout = () => {
  return (

    <div className="content bg-dark">
      <Header />
      <Outlet />
      {/* <AsideMenu />
      <Footer /> */}
    </div>

  );
};

export default Layout;
