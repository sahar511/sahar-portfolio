import "animate.css";

import styles from "./Header.style.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
  ];

  interface NavLink {
    isActive: boolean;
  }

  const navLinkCssClasses = (inp: NavLink): string => {
    return inp?.isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = ""; // Reset class names
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  function renderLinks() {
    return navLinks.map((item) => (
      <NavLink key={item.title} to={item.path} className={navLinkCssClasses}>
        {item.title}
      </NavLink>
    ));
  }
  return (
    <section className={styles.container}>
      <nav className={`${styles.nav} animate__animated animate__fadeInDown`}>
        <div>{renderLinks()}</div>
        <button onClick={toggleTheme} className={styles.button}>
          {theme === "light" ? (
            <span className="material-symbols-outlined">light_mode</span>
          ) : (
            <span className="material-symbols-outlined">dark_mode</span>
          )}
        </button>
      </nav>
    </section>
  );
}
