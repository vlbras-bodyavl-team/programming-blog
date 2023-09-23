import { redirect } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

export default Home;

export const homeLoader = () => {
  if (!localStorage.access_token && !localStorage.refresh_token)
    return redirect("/auth/signin");
  return null;
};
