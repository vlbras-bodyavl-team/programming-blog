import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { AdminPost } from "../../Components/UI";
import { IAdminPost } from "../../interfaces";
import { getPostsForTopicAdmin } from "../../services";
import { LoadingPosts } from "../../Widget";

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
  const posts = await getPostsForTopicAdmin(params.id);
  return posts;
};
