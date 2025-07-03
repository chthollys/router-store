import { createBrowserRouter, RouterProvider } from "react-router";

import {
  HomePage,
  EditEventPage,
  EventDetailPage,
  NewEventPage,
  Events,
  ErrorPage,
  RootPage,
  RootEventPage,
} from "./pages";
import MainNavigation from "./components/MainNavigation";

import { loaderEvents } from "./loaders/events.loader";
import { loaderEvent } from "./loaders/event.loader";
import { newEventAction } from "./actions/newEvent.action";
import { deleteEventAction } from "./actions/deleteEvent.action";
import NewsletterPage from "./components/Newsletter";
import { newsLetterAction } from "./actions/newsLetter.action";
import { loaderEventDetail } from "./loaders/eventDetails.loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage nav={MainNavigation} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <RootEventPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: loaderEvents,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: loaderEventDetail,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsLetterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
