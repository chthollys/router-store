export const loaderEvent = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Event not found with an id of " + id }),
      { status: 500 }
    );
  } else {
    return response;
  }
};
