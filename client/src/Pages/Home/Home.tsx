import s from "./Home.module.scss";
import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import Post from "../../components/UI/Post/Post";
import { getTokensFromStorage } from "../../utils";
import { createRef, useEffect, useState } from "react";
import { IPost } from "../../interfaces";
import { getPostsForTopic } from "../../services";

const Home = () => {
  const [searchParams, _] = useSearchParams();
  const posts = useLoaderData() as IPost[];
  const [postRefs, setPostRefs] = useState(
    Array.from({ length: posts.length }, () => createRef<HTMLLIElement>())
  );

  useEffect(() => {
    const postId = Number(searchParams.get("postId"));
    if (postRefs.length != posts.length) {
      setPostRefs(
        Array.from({ length: posts.length }, () => createRef<HTMLLIElement>())
      );
    }
    if (postId && postRefs.length == posts.length)
      postRefs?.[postId].current?.scrollIntoView({ behavior: "smooth" });
  }, [posts.length, searchParams]);

  return (
    <ul className={s.posts}>
      {posts?.map((post, i) => (
        <Post key={i} post={post} ref={postRefs?.[i]} />
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
