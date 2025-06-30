import { useLoaderData } from "react-router";
import EventsList from "./EventsList";

function Events() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default Events;
