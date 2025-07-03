import { Await, useLoaderData } from "react-router";
import EventsList from "./EventsList";
import { Suspense } from "react";

function Events() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading Events....</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default Events;
