import s from "./Header.module.scss";
import burger from "../../assets/images/burger.svg";

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.burger}>
        <img src={burger} alt="burger" />
      </div>
    </div>
  );
};

export default Header;
