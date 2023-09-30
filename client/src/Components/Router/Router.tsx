import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { BasicLayout, AuthLayout } from "../Layouts";
import { AddPost, Home, SignIn, SignUp, Error } from "../../pages";
import { homeLoader } from "../../pages/Home/Home";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTopics } from "../../services";
import { setTopics } from "../../store/features/topicsSlice";

const Router = () => {
  const topics = useAppSelector((state) => state.topics.topics);
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      children: [
        {
          element: <BasicLayout />,
          loader: async () => {
            if (topics.length > 0) return null;

            const response = await getTopics();
            dispatch(setTopics(response.data));

            return null;
          },
          children: [
            {
              index: true,
              loader: async () => {
                return redirect(`/topic/${topics[0].id}`);
              },
            },
            {
              path: "/topic/:id",
              element: <Home />,
              loader: homeLoader,
            },
            {
              path: "/admin/add-post",
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
  return <RouterProvider router={router} />;
};

export default Router;
