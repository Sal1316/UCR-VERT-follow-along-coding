import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleThought from "./pages/SingleThought";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // initially renders
    errorElement: <Error />, // if there is an error, renders Error.
    children: [
      {
        index: true, // routes to the '/'
        element: <Home />,
      },
      {
        path: "/thoughts/:thoughtId",
        element: <SingleThought />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
