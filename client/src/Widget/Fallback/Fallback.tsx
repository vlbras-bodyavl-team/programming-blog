import { Preloader } from "../../Components/UI";
import s from "./Fallback.module.scss";

const Fallback = () => {
  return (
    <div className={s.container}>
      <Preloader />
    </div>
  );
};

export default Fallback;
