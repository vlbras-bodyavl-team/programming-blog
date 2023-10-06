import s from "./SideDrawer.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Topic from "../../Components/UI/Topic/Topic";
import { useMediaQuery } from "react-responsive";
import { toggle } from "../../store/features/isOpenDrawerSlice";
import axios from "axios";
import { logout } from "../../services";
import { removeTokensFromStorage } from "../../utils";
import { useNavigate } from "react-router-dom";

const SideDrawer = () => {
  const isOpen = useAppSelector((state) => state.isOpenDrawer.value);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const topics = useAppSelector((state) => state.topics.topics);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isTablet = useMediaQuery({ query: "screen and (max-width: 767px)" });

  const handlePostClick = () => {
    if (isTablet) dispatch(toggle());
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
      removeTokensFromStorage();
      navigate("/signin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        navigate("/signin");
      }
    }
  };

  return (
    <div className={isOpen ? `${s.drawer} ${s.open}` : s.drawer}>
      <div className={isDarkMode ? `${s.content} ${s.dark}` : s.content}>
        <ul>
          {topics.map((topic, i) => (
            <>
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
              <Topic key={i} topic={topic} handlePostClick={handlePostClick} />
            </>
          ))}
        </ul>
        <h4 onClick={handleLogoutClick} className={s.logout}>
          Logout
        </h4>
      </div>
    </div>
  );
};

export default SideDrawer;
