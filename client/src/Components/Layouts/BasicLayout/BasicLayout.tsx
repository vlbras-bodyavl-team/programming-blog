import { Outlet } from "react-router-dom";
import { Header } from "../../../widget";
import s from "./BasicLayout.module.scss";
import { SideDrawer } from "../../../widget";
import { ITopic } from "../../../interfaces";
import { getTopics } from "../../../services";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setTopics } from "../../../store/features/topicsSlice";
import { useEffect } from "react";

export const mockTopic: ITopic = {
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

const BasicLayout = () => {
  const topics = useAppSelector((state) => state.topics.topics);
  return (
    <>
      <Header />
      <div className={s.container}>
        <SideDrawer topics={topics} />
        <div className={s.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BasicLayout;
