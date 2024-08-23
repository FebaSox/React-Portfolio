import styles from  "./App.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Navbar/Hero/Hero"


function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
    </div>
  );
}

export default App;
