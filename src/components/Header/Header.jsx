import { NavLink, Outlet } from "react-router-dom";

import Logo from "@/components/Logo/Logo.jsx";

import styles from "./Header.module.scss";

const Header = () => (
  <>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.list}>
          <li>
            <NavLink exact="true" to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={styles.navLink}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={styles.navLink}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Header;
