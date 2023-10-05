import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Post } from "../../Components/UI";
import { IPost } from "../../interfaces";
import { getPostsForTopic } from "../../services";
import { Button } from "../../Components/UI";
import { Link } from "react-router-dom";

interface IHomeProps {
  isAdmin?: boolean;
}
const Home = ({ isAdmin }: IHomeProps) => {
  const posts = useLoaderData() as IPost[];

  return (
    <ul>
      {posts?.map((post, i) => (
        <li key={i}>
          <Post post={post} id={`${i}`} />
          {isAdmin && (
            <Link to={`/admin/edit-post/${post.id}`}>
              <Button>Edit</Button>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Home;

export const homeLoader = async ({ params }: LoaderFunctionArgs<any>) => {
  const posts = await getPostsForTopic(params.id);
  return posts;
};
