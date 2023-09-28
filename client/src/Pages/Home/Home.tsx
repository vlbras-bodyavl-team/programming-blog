import s from "./Home.module.scss";
import { redirect } from "react-router-dom";
import { ITopic } from "../../interfaces";
import Post from "../../components/UI/Post/Post";
import { getTokensFromStorage } from "../../utils";
import { mockTopic } from "../../components/Layouts/BasicLayout/BasicLayout";

const Home = () => {
  const topic: ITopic = mockTopic;
  return (
    <ul className={s.posts}>
      {topic.posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </ul>
  );
};

export default Home;

export const homeLoader = () => {
  if (!getTokensFromStorage()) return redirect("/signin");
  return null;
};
