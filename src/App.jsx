import {useEffect, useState} from 'react';
import styles from  "./App.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

  /////////////////////////////////////////////////
  //This is for the Express routing to connect to React
  function App() {
    const [SebasPortfolio, setSebasPortfolio] = useState([]);

  useEffect(() => {
    fetch("api/SebasPortfolio")
      .then((res) => res.json())
      .then((data) => (setItems(data)));
  }, []);

  function renderSebasPortfolio() {
    return SebasPortfolio.map((SebasPortfolio, i) => {
      return (
      <div key={i}>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
      </div>
      );
    })
  }
  //This is for the Express routing to connect to React
  /////////////////////////////////////////////////
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
