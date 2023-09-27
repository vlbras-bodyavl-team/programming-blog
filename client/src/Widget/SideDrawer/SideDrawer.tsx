import s from "./SideDrawer.module.scss";
import { useAppSelector } from "../../store/store";
import Topic from "../../components/UI/Topic/Topic";
import { ITopic } from "../../interfaces";

interface ISideDrawerProps {
  topics: ITopic[];
}
const SideDrawer = ({ topics }: ISideDrawerProps) => {
  const isOpen = useAppSelector((state) => state.isOpenDrawer.value);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className={isOpen ? `${s.drawer} ${s.open}` : s.drawer}>
      <ul className={isDarkMode ? `${s.content} ${s.dark}` : s.content}>
        {topics.map((topic, i) => (
          <Topic key={i} topic={topic} />
        ))}
      </ul>
    </div>
  );
};

export default SideDrawer;
