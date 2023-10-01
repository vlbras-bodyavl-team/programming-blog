import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { BasicLayout, AuthLayout } from "../Layouts";
import { AddPost, Home, SignIn, SignUp, Error } from "../../pages";
import { homeLoader } from "../../pages/Home/Home";
import { useAppDispatch } from "../../store/store";
import { getTopics } from "../../services";
import { setTopics } from "../../store/features/topicsSlice";
import { ITopic } from "../../interfaces";

const Router = () => {
  const dispatch = useAppDispatch();

  const fetchTopics = async (): Promise<ITopic[]> => {
    const response = await getTopics();
    dispatch(setTopics(response.data));
    return response.data;
  };

  const router = createBrowserRouter([
    {
      index: true,
      loader: async () => {
        const topics = await fetchTopics();
        return redirect(`/topic/${topics[0].id}/posts`);
      },
    },
    {
      errorElement: <Error />,
      element: <BasicLayout />,
      loader: fetchTopics,
      shouldRevalidate: () => false,
      children: [
        {
          path: "/topic/:id/posts",
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
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
