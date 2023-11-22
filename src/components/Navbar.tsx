import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

import { useAuthentication } from "../hooks/useAuthentication";

export function Navbar({ user }: any) {
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        English <span>Learning</span>
      </NavLink>
      <ul className={styles.links_list}>
        {!user && (
          <>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Registre-se
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img src="home.svg" alt="Home" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img src="explore.svg" alt="Explore" />
                Explorar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dictionary"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img src="book.svg" alt="Book" />
                Dicionário
              </NavLink>
            </li>
            <li>
              <button className="" onClick={() => logout()}>
                <img src="log-out.svg" alt="log-out" />
                Sair
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
