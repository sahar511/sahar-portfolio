import styles from "./Socials.style.module.css"

export default function SocialLinks() {
  return <div className={styles.container}>
    <a href="https://github.com/sahar511" >
      <i className={`fa-brands fa-github ${styles.icon}`}></i>
    </a>
    <a href="https://www.linkedin.com/in/sahar-arefzadeh/" >
      <i className={`fa-brands fa-linkedin ${styles.icon}`}></i>
    </a>
    <a href="https://instagram.com/sahar__rf__" >
      <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
    </a>
    <a href="https://twitter.com/sas511_s" >
      <i className={`fa-brands fa-x-twitter ${styles.icon}`}></i>
    </a>
  </div>
}