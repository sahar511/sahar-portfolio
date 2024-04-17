import "animate.css"

import styles from "./Header.style.module.css"
import { NavLink } from "react-router-dom"

export default function Header() {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    }
  ]

  interface NavLink {
    isActive: boolean;
  }

  const navLinkCssClasses = (inp: NavLink): string => {
    return inp?.isActive ? `${styles.link} ${styles.activeLink}` :styles.link
  }

  function renderLinks() {
    return navLinks.map((item) => (
      <NavLink key={item.title} to={item.path} className={navLinkCssClasses}>
        {item.title}
      </NavLink>
    ))
  }
  return (
    <section className={styles.container}>
      <nav className={`${styles.nav} animate__animated animate__fadeInDown`}>
        {renderLinks()}
      </nav>
    </section>
  )
}
