import { Outlet, useNavigation } from "react-router";
import EventNavigation from "../components/EventNavigation";

function RootEventPage() {
  const navigate = useNavigation();

  return (
    <>
      <EventNavigation />
      {navigate.state === "loading" && <p>Loading ...</p>}
      <Outlet />
    </>
  );
}

export default RootEventPage;
