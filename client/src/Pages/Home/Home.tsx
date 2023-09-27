import s from "./Home.module.scss";
import { redirect } from "react-router-dom";
import SideDrawer from "../../widget/SideDrawer/SideDrawer";
import { ITopic } from "../../interfaces";
import Post from "../../components/UI/Post/Post";
import { getTokensFromStorage } from "../../utils";

const mockTopic: ITopic = {
  id: "id",
  name: "Topic",
  posts: [
    {
      id: "id",
      title: "test",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsa possimus molestias pariatur obcaecati necessitatibus, suscipit, debitis commodi fuga perferendis ea ratione natus vero nulla illum eligendi vel labore aut.",
      topic: "id",
    },
    {
      id: "id",
      title: "test",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsa possimus molestias pariatur obcaecati necessitatibus, suscipit, debitis commodi fuga perferendis ea ratione natus vero nulla illum eligendi vel labore aut.",
      topic: "id",
    },
    {
      id: "id",
      title: "test",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsa possimus molestias pariatur obcaecati necessitatibus, suscipit, debitis commodi fuga perferendis ea ratione natus vero nulla illum eligendi vel labore aut.",
      topic: "id",
    },
  ],
};

const Home = () => {
  return (
    <div className={s.container}>
      <SideDrawer topics={[mockTopic, mockTopic, mockTopic]} />
      <ul className={s.posts}>
        {mockTopic.posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const homeLoader = () => {
  if (!getTokensFromStorage()) return redirect("/signin");
  return null;
};
