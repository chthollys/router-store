import { Link, useSubmit } from "react-router";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  const handleDeleteEvent = () => {
    const proceed = window.confirm("Are you sure want to delete");

    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  };
  return (
    <div className={classes["event-detail-container"]}>
      <h1>{event.title}</h1>
      <p>Event id: {event.id}</p>
      <img src={event.image} alt="Event image" />
      <p>Date: {event.date}</p>
      <p>{event.description}</p>
      <ul>
        <li>
          <Link to="edit">Edit </Link>
        </li>
        <li>
          <Link relative="path" to="..">
            Back
          </Link>
        </li>
        <li>
          <button onClick={handleDeleteEvent}>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default EventItem;
