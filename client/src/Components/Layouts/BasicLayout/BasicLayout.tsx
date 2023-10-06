import { Outlet } from "react-router-dom";
import { Header } from "../../../Widget";
import s from "./BasicLayout.module.scss";
import { SideDrawer } from "../../../Widget";
import { useAppSelector } from "../../../store/store";

const BasicLayout = () => {
  const isOpenDrawer = useAppSelector((state) => state.isOpenDrawer.value);

  return (
    <>
      <Header />
      <div className={s.container}>
        <SideDrawer />
        <div className={isOpenDrawer ? `${s.outlet} ${s.open}` : s.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BasicLayout;
