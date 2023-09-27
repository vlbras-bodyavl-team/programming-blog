import { Outlet } from "react-router-dom";
import { Header } from "../../../widget";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default BasicLayout;
