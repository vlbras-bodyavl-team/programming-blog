import s from "./SideDrawer.module.scss";
import { useAppSelector } from "../../store/store";

const SideDrawer = () => {
  const isOpen = useAppSelector((state) => state.isOpenDrawer.value);

  return (
    <div className={isOpen ? `${s.drawer} ${s.open}` : s.drawer}>
      <div className={s.content}>
        <div>Here comes the contetnt</div>
      </div>
    </div>
  );
};

export default SideDrawer;
