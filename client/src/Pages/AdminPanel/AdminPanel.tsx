import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { AdminPost } from "../../Components/UI";
import { IAdminPost } from "../../interfaces";
import { getPostsForTopicAdmin } from "../../services";
import { LoadingPosts } from "../../Widget";
import { isAxiosError } from "axios";

const AdminPanel = () => {
  const posts = useLoaderData() as IAdminPost[];
  const isLoading = useNavigation().state === "loading";

  return (
    <>
      {isLoading ? (
        <LoadingPosts count={5} />
      ) : (
        <ul>
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
    if (isAxiosError(error) && error.response?.status === 400) {
      return redirect("/admin");
    } else if (isAxiosError(error)) {
      alert(error.response?.data.message);
      return null;
    } else throw error;
  }
};
