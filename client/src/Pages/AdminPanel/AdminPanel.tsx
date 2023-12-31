import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { AdminPost, Preloader } from "../../Components/UI";
import { IAdminPost } from "../../interfaces";
import { getPostsForTopicAdmin } from "../../services";
import { isAxiosError } from "axios";
import s from "./AdminPanel.module.scss";
import { catchUnauthorizedError } from "../../utils/router";

const AdminPanel = () => {
  const posts = useLoaderData() as IAdminPost[];
  const isLoading = useNavigation().state === "loading";

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className={s.posts}>
          {posts?.map((post, i) => (
            <li key={i}>
              <AdminPost post={post} id={`${i}`} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AdminPanel;

export const adminPanelLoader = async ({ params }: LoaderFunctionArgs<any>) => {
  try {
    const posts = await getPostsForTopicAdmin(params.id);
    return posts;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 400 || error.response?.status === 404)
        return redirect("/admin");

      console.log(error.response?.data.message);
      return catchUnauthorizedError(error);
    } else throw error;
  }
};
