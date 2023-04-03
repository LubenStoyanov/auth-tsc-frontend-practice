import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { action as registerAction } from "./routes/Root";
import Login, { action as loginAction } from "./routes/Login";
import Profile, { action as logoutAction } from "./routes/Profile";
import Protected from "./components/Protected";
import useLogin from "./hooks/useLogin";

import "./index.css";

const { loggedIn } = useLogin();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/profile",
    element: (
      <Protected loggedIn={loggedIn}>
        <Profile />
      </Protected>
    ),
    action: logoutAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
