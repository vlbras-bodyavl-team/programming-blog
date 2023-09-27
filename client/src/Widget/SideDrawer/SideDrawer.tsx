import s from "./SideDrawer.module.scss";
import { useAppSelector } from "../../store/store";
import Topic from "../../Components/UI/Topic/Topic";
import { ITopic } from "../../interfaces";

interface ISideDrawerProps {
  topics: ITopic[];
}
const SideDrawer = ({ topics }: ISideDrawerProps) => {
  const isOpen = useAppSelector((state) => state.isOpenDrawer.value);

  return (
    <div className={isOpen ? `${s.drawer} ${s.open}` : s.drawer}>
      <ul className={s.content}>
        {topics.map((topic, i) => (
          <Topic key={i} topic={topic} />
        ))}
      </ul>
    </div>
  );
};

export default SideDrawer;
