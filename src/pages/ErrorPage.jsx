import { useRouteError } from "react-router";
import PageContent from "./PageContent";

function ErrorPage({ nav }) {
  const Navigation = nav;
  const error = useRouteError();
  console.error(error);
  let title = "Error Occured";
  let message = "Something went wrong";

  if (error.status === 500) {
    title = "Server Error";
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Page Not Found";
    message = "Could not found page resources.";
  }

  return (
    <>
      {nav && <Navigation />}
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
