import { Link } from "react-router";
import Events from "../components/Events";

function EventsPage({ events }) {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {events.map((event) => (
          <li>
            <Link to={event.path}>{event.eventName}</Link>
          </li>
        ))}
      </ul>
      <EventsList />
    </>
  );
}

export default EventsPage;
