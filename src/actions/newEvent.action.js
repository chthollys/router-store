import { redirect } from "react-router";

export const newEventAction = async ({ request, params }) => {
  const formData = await request.formData();

  const requestBody = {
    title: formData.get("title"),
    date: formData.get("date"),
    image: formData.get("image"),
    description: formData.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Error in submitting new event data." }),
      { status: 500 }
    );
  }

  return redirect("/events");
};
