import { Outlet } from "react-router-dom";
import Header from "../../Components/header";

//import AsideMenu from "../AsideMenu";

const Layout = () => {
  return (

    <>
      <Header />
      <Outlet />
        
      {/* <AsideMenu />
      <Footer /> */}
    </>

  );
};

export default Layout;
