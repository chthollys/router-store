import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

function RootPage() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootPage;
