import { Outlet } from "react-router-dom";
import { AdminSideDrawer, Header } from "../../../Widget";
import s from "./AdminLayout.module.scss";
import { useAppSelector } from "../../../store/store";

const AdminLayout = () => {
  const isOpenDrawer = useAppSelector((state) => state.isOpenDrawer.value);

  return (
    <>
      <Header />
      <div className={s.container}>
        <AdminSideDrawer />
        <div className={isOpenDrawer ? `${s.outlet} ${s.open}` : s.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
