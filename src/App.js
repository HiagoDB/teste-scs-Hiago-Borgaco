import styles from './App.module.css'

import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
    <div className={styles.ap}>
      <Navbar/>
      <Main />   
    </div>
    <div className={styles.apFooter}>
    <Footer/>
    </div>
    </>
  );
}

export default App;
