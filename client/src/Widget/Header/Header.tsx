import s from "./Header.module.scss";
import burger from "../../assets/images/burger.svg";
import logout from "../../assets/images/logout.svg";
import { ReactSVG } from "react-svg";
import { HeaderLink } from "../../Components/UI";

const Header = () => {
  return (
    <div className={s.container}>
      <ReactSVG src={burger} className={s.burger} />
      <div className={s.links}>
        <HeaderLink>Blog</HeaderLink>
      </div>
      <ReactSVG src={logout} className={s.logout} />
    </div>
  );
};

export default Header;
