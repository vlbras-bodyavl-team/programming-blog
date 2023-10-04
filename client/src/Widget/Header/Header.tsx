import s from "./Header.module.scss";
import burger from "../../assets/images/burger.svg";
import logoutLogo from "../../assets/images/logout.svg";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import { useMediaQuery } from "react-responsive";
import { ReactSVG } from "react-svg";
import { HeaderLink, ThemeToggle } from "../../components/UI";
import { useAppDispatch } from "../../store/store";
import { toggle } from "../../store/features/isOpenDrawerSlice";
import { logout } from "../../services";
import { removeTokensFromStorage } from "../../utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    href: import.meta.env.VITE_API_URL,
  },
  {
    title: "Documentation",
    href: import.meta.env.VITE_DOCS_URL,
  },
];

const Header = () => {
  const dispatch = useAppDispatch();
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
      <ReactSVG
        src={isLaptop ? burger : menu}
        className={s.burger}
        onClick={() => dispatch(toggle())}
      />
      <ReactSVG src={logo} className={s.logo} />
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
