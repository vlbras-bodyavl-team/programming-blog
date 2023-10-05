import { Outlet } from "react-router-dom";
import { Header } from "../../../Widget";
import s from "./BasicLayout.module.scss";
import { SideDrawer } from "../../../Widget";

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
