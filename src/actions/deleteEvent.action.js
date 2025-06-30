import { redirect } from "react-router";

export const deleteEventAction = async ({ request, params }) => {
  console.log(request);
  console.log(params);
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Error in deleting event." }),
      { status: 500 }
    );
  }

  return redirect("/events");
};
