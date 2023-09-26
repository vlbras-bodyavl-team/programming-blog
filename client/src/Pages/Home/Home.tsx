import s from "./Home.module.scss";
import { redirect } from "react-router-dom";
import SideDrawer from "../../Widget/SideDrawer/SideDrawer";

const Home = () => {
  return (
    <div className={s.container}>
      <SideDrawer />
    </div>
  );
};

export default Home;

export const homeLoader = () => {
  if (!localStorage.accessToken && !localStorage.refreshToken)
    return redirect("/signin");
  return null;
};
