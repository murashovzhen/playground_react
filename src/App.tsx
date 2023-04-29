import styles from "./App.module.scss";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Body />
      <Footer/>
    </div>
  );
};

export default App;
