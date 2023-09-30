import s from "./Home.module.scss";
import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import Post from "../../components/UI/Post/Post";
import { getTokensFromStorage } from "../../utils";
import { useEffect } from "react";
import { IPost } from "../../interfaces";
import { getPostsForTopic } from "../../services";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const posts = useLoaderData() as IPost[];

  useEffect(() => {});
  return (
    <ul className={s.posts}>
      {posts?.map((post, i) => (
        <Post key={i} post={post} />
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
