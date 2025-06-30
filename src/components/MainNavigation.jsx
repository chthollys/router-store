import { NavLink } from "react-router";

import classes from "./MainNavigation.module.css";

const activeClasses = ({ isActive }) => (isActive ? classes.active : undefined);

function MainNavigation() {
  return (
    <header className={classes.header}>
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
      </ul>
    </header>
  );
}

export default MainNavigation;
