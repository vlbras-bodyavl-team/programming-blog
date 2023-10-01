import s from "./Home.module.scss";
import { LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom";
import Post from "../../components/UI/Post/Post";
import { getTokensFromStorage } from "../../utils";
import { IPost } from "../../interfaces";
import { getPostsForTopic } from "../../services";

const Home = () => {
  const posts = useLoaderData() as IPost[];

  return (
    <ul className={s.posts}>
      {posts?.map((post, i) => (
        <Post key={i} post={post} id={`${i}`} />
      ))}
    </ul>
  );
};

export default Home;

export const homeLoader = async ({ params }: LoaderFunctionArgs<any>) => {
  if (!getTokensFromStorage()) return redirect("/signin");
  const response = await getPostsForTopic(params.id);

  return response.data;
};
