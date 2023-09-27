import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { homeLoader } from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import { BasicLayout, AuthLayout } from "../Layouts";
import Error from "../../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
    ],
  },
  {
    path: "/",
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
