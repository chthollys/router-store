import { Outlet } from "react-router";
import EventNavigation from "../components/EventNavigation";

function RootEventPage() {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
}

export default RootEventPage;
