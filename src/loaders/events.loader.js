export const loaderEvents = async () => {
  const response = await fetch("http://localhost:8080/events/");
  if (!response.ok) {
    // error handling
    throw new Response(JSON.stringify({ message: "Failed to fetch events." }), {
      status: 500,
    });
  } else {
    return response;
  }
};
