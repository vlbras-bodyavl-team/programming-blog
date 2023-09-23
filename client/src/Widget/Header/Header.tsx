import s from "./Header.module.scss";
import burger from "../../assets/images/burger.svg";
import { ReactSVG } from "react-svg";

const Header = () => {
  return (
    <div className={s.container}>
      <ReactSVG src={burger}/>
    </div>
  );
};

export default Header;
