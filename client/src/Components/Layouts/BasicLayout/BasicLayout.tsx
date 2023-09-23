import Header from "../../../Widget/Header/Header";
import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default BasicLayout;
