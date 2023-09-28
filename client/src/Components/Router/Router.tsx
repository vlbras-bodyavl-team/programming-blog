import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BasicLayout, AuthLayout } from "../Layouts";
import { AddPost, Home, SignIn, SignUp, Error } from "../../pages";
import { homeLoader } from "../../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        element: <BasicLayout />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: homeLoader,
          },
          {
            path: "admin/add-post",
            element: <AddPost />,
          },
        ],
      },
      {
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
    ],
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
