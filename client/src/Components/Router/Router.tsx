import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { BasicLayout, AuthLayout, AdminLayout } from "../Layouts";
import {
  AddPost,
  Home,
  SignIn,
  SignUp,
  Error,
  AdminPanel,
  EditPost,
} from "../../Pages";
import { homeLoader } from "../../Pages/Home/Home";
import { useAppDispatch } from "../../store/store";
import { getTopics } from "../../services";
import { setTopics } from "../../store/features/topicsSlice";
import { ITopic } from "../../interfaces";
import { editPostAction, editPostLoader } from "../../Pages/EditPost/EditPost";
import { catchUnauthorizedError } from "../../utils/router";
import { formSignInAction } from "../../Widget/FormSignIn/FormSignIn";
import { formSignUpAction } from "../../Widget/FormSignUp/FormSignUp";
import { addPostAction } from "../../Pages/AddPost/AddPost";
import { adminPanelLoader } from "../../Pages/AdminPanel/AdminPanel";

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
          if (!topics) {
            console.log("no posts yet");
            return null;
          }

          return redirect(`/topic/${topics[0].id}/posts`);
        } catch (error) {
          return catchUnauthorizedError(error);
        }
      },
    },
    {
      errorElement: <Error />,
      element: <BasicLayout />,
      loader: async () => {
        try {
          await fetchTopics();

          return null;
        } catch (error) {
          return catchUnauthorizedError(error);
        }
      },

      children: [
        {
          path: "topic/:id/posts",
          element: <Home />,
          loader: homeLoader,
        },
      ],
    },
    {
      element: <AdminLayout />,
      path: "admin",
      loader: async () => {
        try {
          await fetchTopics();

          return null;
        } catch (error) {
          return catchUnauthorizedError(error);
        }
      },
      children: [
        {
          path: "topic/:id/posts",
          element: <AdminPanel />,
          loader: adminPanelLoader,
        },
        {
          path: "add-post",
          element: <AddPost />,
          action: addPostAction,
        },
        {
          path: "edit-post/:id",
          element: <EditPost />,
          loader: editPostLoader,
          action: editPostAction,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "signin",
          element: <SignIn />,
          action: formSignInAction,
        },
        {
          path: "signup",
          element: <SignUp />,
          action: formSignUpAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
