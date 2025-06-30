import { NavLink } from "react-router";

import classes from "./EventNavigation.module.css";

const activeClasses = ({ isActive }) => (isActive ? classes.active : undefined);

function EventNavigation() {
  return (
    <>
      <header className={classes.header}>
        <ul className={classes.list}>
          <li>
            <NavLink className={activeClasses} to="." end>
              All Event
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClasses} to="new" end>
              New Event
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default EventNavigation;
