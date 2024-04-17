import SocialLinks from "../../components/Socials"
import styles from "./Home.style.module.css"

export default function Home() {
  return (
    <div className={`${styles.box} animate__animated animate__fadeIn`}>
      <div className={styles.title}>Sahar Arefzadeh</div>
      <div className={styles.subtitle}>Software Engineer</div>
      <p>
        I am a software engineer with over four years of experience in front-end development working in cross-functional teams. My focus revolves around enhancing projects through feature development, and code maintenance. Proficient in React, Angular, and Vue.js.
      </p>
      <SocialLinks />
    </div>
  )
}
