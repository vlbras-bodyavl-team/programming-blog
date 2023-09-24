import { redirect } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

export default Home;

export const homeLoader = () => {
  if (!localStorage.accessToken && !localStorage.refreshToken)
    return redirect("/signin");
  return null;
};
