import s from "./AdminSideDrawer.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useMediaQuery } from "react-responsive";
import { toggle } from "../../store/features/isOpenDrawerSlice";
import axios from "axios";
import { logout } from "../../services";
import { removeTokensFromStorage } from "../../utils";
import { useNavigate } from "react-router-dom";
import { AdminTopic, BorderButton, Button } from "../../Components/UI";
import { Link } from "react-router-dom";

const AdminSideDrawer = () => {
  const isOpen = useAppSelector((state) => state.isOpenDrawer.value);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const topics = useAppSelector((state) => state.topics.topics);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isTablet = useMediaQuery({ query: "screen and (max-width: 767px)" });

  const handleDrawerAutoClose = () => {
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
        <div className={s.buttons}>
          <Link to="/admin/add-post">
            <Button onClick={handleDrawerAutoClose}>Add Post</Button>
          </Link>
          <Link to="/admin/users">
            <BorderButton onClick={handleDrawerAutoClose}>
              Manage Users
            </BorderButton>
          </Link>
        </div>

        <ul className={s.list}>
          {topics.map((topic, i) => (
            <AdminTopic
              key={i}
              topic={topic}
              handlePostClick={handleDrawerAutoClose}
            />
          ))}
        </ul>
        <h4 onClick={handleLogoutClick} className={s.logout}>
          Logout
        </h4>
      </div>
    </div>
  );
};

export default AdminSideDrawer;
