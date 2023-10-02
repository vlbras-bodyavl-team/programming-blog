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
import EditPost from "../../pages/EditPost/EditPost";
import axios from "axios";

const Router = () => {
  const dispatch = useAppDispatch();

  const fetchTopics = async (): Promise<ITopic[]> => {
    const topics = await getTopics();
    dispatch(setTopics(topics));
    return topics;
  };

  const router = createBrowserRouter([
    {
      index: true,
      errorElement: <Error />,
      loader: async () => {
        try {
          const topics = await fetchTopics();
          return redirect(`/topic/${topics[0].id}/posts`);
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status == 401) {
            return redirect("/signin");
          }
        }
      },
    },
    {
      errorElement: <Error />,
      element: <BasicLayout />,
      loader: fetchTopics,
      shouldRevalidate: () => false,
      children: [
        {
          path: "topic/:id/posts",
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "admin/topic/:id/posts",
          element: <Home isAdmin={true} />,
          loader: homeLoader,
        },
        {
          path: "admin/add-post",
          element: <AddPost />,
        },
        {
          path: "admin/edit-post/:id",
          element: <EditPost />,
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
