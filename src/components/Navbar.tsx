import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

export function Navbar() {
  const { user } = useAuthValue() ?? { user: undefined };
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
                Register
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
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dictionary"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img src="book.svg" alt="Book" />
                Dictionary
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img src="log-out.svg" alt="Log Out" />
                Log Out
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
