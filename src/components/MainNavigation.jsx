import { NavLink } from "react-router";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

const activeClasses = ({ isActive }) => (isActive ? classes.active : undefined);

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={activeClasses} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClasses} to="/events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClasses} to="/newsletter">
              NewsLetter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
