import s from "./SideDrawer.module.scss";
import { useAppSelector } from "../../store/store";
import Topic from "../../Components/UI/Topic/Topic";
import { ITopic } from "../../interfaces";

const mockTopic: ITopic = {
  id: "id",
  name: "Topic",
  posts: [
    {
      id: "id",
      title: "test",
      content: "test",
      topic: "id",
    },
    {
      id: "id",
      title: "test",
      content: "test",
      topic: "id",
    },
    {
      id: "id",
      title: "test",
      content: "test",
      topic: "id",
    },
  ],
};

const SideDrawer = () => {
  const isOpen = useAppSelector((state) => state.isOpenDrawer.value);

  return (
    <div className={isOpen ? `${s.drawer} ${s.open}` : s.drawer}>
      <div className={s.content}>
        <Topic topic={mockTopic} />
        <Topic topic={mockTopic} />
        <Topic topic={mockTopic} />
        <Topic topic={mockTopic} />
      </div>
    </div>
  );
};

export default SideDrawer;
