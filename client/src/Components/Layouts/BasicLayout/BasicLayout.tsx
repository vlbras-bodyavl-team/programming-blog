import { Outlet } from "react-router-dom";
import { Header } from "../../../widget";
import s from "./BasicLayout.module.scss";
import { SideDrawer } from "../../../widget";
import { useAppSelector } from "../../../store/store";

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
