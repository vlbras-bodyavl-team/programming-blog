import s from "./Header.module.scss";
import burger from "../../assets/images/burger.svg";
import logoutLogo from "../../assets/images/logout.svg";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import { useMediaQuery } from "react-responsive";
import { ReactSVG } from "react-svg";
import { HeaderLink, ThemeToggle } from "../../Components/UI";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggle } from "../../store/features/isOpenDrawerSlice";
import { logout } from "../../services";
import { removeTokensFromStorage } from "../../utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const links: { title: string; href: string }[] = [
  {
    title: "Blog",
    href: import.meta.env.VITE_APP_URL,
  },
  {
    title: "Github",
    href: import.meta.env.VITE_GIT_REPO_URL,
  },
  {
    title: "API",
    href: `${import.meta.env.VITE_API_URL}/api`,
  },
];

const Header = () => {
  const dispatch = useAppDispatch();
  const isOpenDrawer = useAppSelector((state) => state.isOpenDrawer.value);

  const navigate = useNavigate();

  const isLaptop = useMediaQuery({
    query: "screen and (min-width: 768px)",
  });

  const handleLogoutClick = async () => {
    try {
      await logout();
      removeTokensFromStorage();
      navigate("/signin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        navigate("/signin");
      }
    }
  };

  return (
    <div className={s.container}>
      <button
        className={isOpenDrawer ? `${s.burger} ${s.open}` : s.burger}
        onClick={() => dispatch(toggle())}
      >
        <ReactSVG src={isLaptop ? burger : menu} />
      </button>
      <Link to={"/"} className={s.logo}>
        <ReactSVG src={logo} />
      </Link>
      <div className={s.links}>
        {links.map((link, index) => (
          <HeaderLink key={index} href={link.href}>
            {link.title}
          </HeaderLink>
        ))}
      </div>
      <div className={s.buttons}>
        <ThemeToggle />
        <ReactSVG
          src={logoutLogo}
          className={s.logout}
          onClick={handleLogoutClick}
        />
      </div>
    </div>
  );
};

export default Header;
