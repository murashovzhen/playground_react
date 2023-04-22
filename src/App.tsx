import styles from "./App.module.scss";
import Header from "./Components/Header";
import Body from "./Components/Body";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Body/>
    </div>
  );
};

export default App;
