export async function newsLetterAction({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  return { user: { email }, message: "Signup successful!" };
}
