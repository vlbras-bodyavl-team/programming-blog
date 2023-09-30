import { Outlet } from "react-router-dom";
import { Header } from "../../../widget";
import s from "./BasicLayout.module.scss";
import { SideDrawer } from "../../../widget";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <SideDrawer />
        <div className={s.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BasicLayout;
