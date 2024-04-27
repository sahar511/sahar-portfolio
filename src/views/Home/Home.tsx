import SocialLinks from "../../components/Socials"
import styles from "./Home.style.module.css"

export default function Home() {
  return (
    <div className={`${styles.box} animate__animated animate__fadeIn`}>
      <h1 className={styles.title}>Sahar Arefzadeh</h1>
      <h2 className={styles.subtitle}>Software Engineer(Front-End)</h2>
      <h4>
        I am a software engineer with over four years of experience in front-end development working in cross-functional teams. My focus revolves around enhancing projects through feature development, and code maintenance. Proficient in React, Angular, and other web devllopement technologies.
      </h4>
      <SocialLinks />
    </div>
  )
}
