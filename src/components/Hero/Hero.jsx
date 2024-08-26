import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return <section className={styles.container}>
    <div> 
        <h1 className={styles.title}>Hi, I'm Seba</h1>
    <p className={styles.description}>I'm a full-stack developer with a few months of experience using React and NodeJS. Student/Attented at TrueCoders BootCamp. Reach out if you'd like to learn more!</p>
    <a href='mailto:seba.n.fox@gmail.com' className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero imgage of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>;
};


