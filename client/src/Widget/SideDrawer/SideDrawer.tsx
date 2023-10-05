import s from "./SideDrawer.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Topic from "../../Components/UI/Topic/Topic";
import { useMediaQuery } from "react-responsive";
import { toggle } from "../../store/features/isOpenDrawerSlice";

const SideDrawer = () => {
  const isOpen = useAppSelector((state) => state.isOpenDrawer.value);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const topics = useAppSelector((state) => state.topics.topics);
  const dispatch = useAppDispatch();

  const isTablet = useMediaQuery({ query: "screen and (max-width: 768px)" });

  const handlePostClick = () => {
    if (isTablet) dispatch(toggle());
  };

  return (
    <div className={isOpen ? `${s.drawer} ${s.open}` : s.drawer}>
      <ul className={isDarkMode ? `${s.content} ${s.dark}` : s.content}>
        {topics.map((topic, i) => (
          <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
        ))}
      </ul>
    </div>
  );
};

export default SideDrawer;
