import { Link, useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const { event } = useRouteLoaderData("event-detail");
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Edit Event Page</h1>
      <EventForm defaultEvent={event} />
      <Link relative="path" to="..">
        back
      </Link>
    </>
  );
}

export default EditEventPage;
