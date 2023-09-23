import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { homeLoader } from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import { BasicLayout, AuthLayout } from "../Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
