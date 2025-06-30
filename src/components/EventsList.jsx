import { Link } from "react-router";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
  return (
    <>
      <div className={classes["events-container"]}>
        {events.map((event) => {
          return (
            <div key={event.id} className={classes["event-container"]}>
              <img src={event.image} alt="Event Image" />
              <div className={classes.article}>
                <Link to={event.id} className={classes["link-title"]}>
                  <h1>{event.title}</h1>
                </Link>
                <p>{event.description}</p>
                <p>{event.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EventsList;
