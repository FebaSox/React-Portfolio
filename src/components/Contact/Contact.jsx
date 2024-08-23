import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Info</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} 
            alt='Email Icon'/>
            <a href="mailto:seba.n.fox@gmail.com">seba.n.fox@gmail.com</a>
        </li>
       
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} 
            alt='Linkedin Icon'/>
            <a href="https://www.linkedin.com/in/sebastian-fox-011044284/">linkedin.com/Seba Fox</a>
        </li>
       
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} 
            alt='GitHub Icon'/>
            <a href="https://www.github.com/FebaSox">github.com/Seba Fox</a>
        </li>
      </ul>
    </footer>
  );
};
