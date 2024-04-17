import styles from "./ContactMe.style.module.css"

export default function ContactMe() {
  return (
    <div className="animate__animated animate__fadeIn">
      <form action="https://api.web3forms.com/submit" method="POST" className={styles.form}>
        <h1 className={styles.title}>Contact Me</h1>
        <input type="hidden" name="access_key"/>
        <input type="text" name="name" required className={styles.input}  placeholder="Name"/>
        <input type="email" name="email" required  className={styles.input}  placeholder="Email"/>
        <textarea name="message" required className={`${styles.input} ${styles.textarea}`}  placeholder="Message"></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <button type="submit" className={styles.button}>Send</button>
      </form>
    </div>
  )
}
