import { loader } from "./events.loader";

const loaderEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Event not found with an id of " + id }),
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

export async function loaderEventDetail({ request, params }) {
  const id = params.id;
  return {
    event: await loaderEvent(id),
    events: loader(),
  };
}
