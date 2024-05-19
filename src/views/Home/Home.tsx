import Button from "../../components/Button";
import SocialLinks from "../../components/Socials";
import styles from "./Home.style.module.css";

export default function Home() {
  const email = "sahar.arefzade@gmail.com";
  return (
    <>
      <section
        className={`${styles.container} animate__animated animate__fadeInDown`}
      >
        <div>
          <h1 className={styles.title}>Sahar Arefzadeh</h1>
          <h2 className={styles.subtitle}>Software Engineer</h2>
        </div>
        <a href={`mailto:${email}`}>
          <Button>Reach Out</Button>
        </a>
        <SocialLinks />
      </section>
    </>
  );
}
