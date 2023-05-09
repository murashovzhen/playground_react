import styles from "./App.module.scss";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import SingIn from "./Components/Body/SingIn/idex";


const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Body />
      <SingIn />
      <Footer />   
    </div>
  );
};

export default App;
