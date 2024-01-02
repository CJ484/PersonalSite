/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom";
import MenuIcon from "../../../assets/symbols/menu";
import logo from "../../../assets/images/logo.png";
import RouteInfo from "../../../const/paths";
import { ThemeToggle } from "../../../Components";

const MobileNav = () => {
  const routes = RouteInfo();

  const toggleMenu = () => {
    const menu = document.querySelector(".nav-menu-holder");
    menu.classList.toggle("show");
  };

  return (
    <div className="navMobile">
      <div className="nav-top">
        <Link exact="true" to="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>
        <MenuIcon onClick={toggleMenu} />
      </div>

      <ul className="nav-menu-holder">
        {Object.values(routes).map((route) => (
          <li>
            <Link
              sx={{ color: "grey" }}
              className="nav-menu-item"
              key={route.path}
              exact="true"
              to={route.path}
              onClick={toggleMenu}
            >
              {route.title}
            </Link>
          </li>
        ))}
        <ThemeToggle />
      </ul>
    </div>
  );
};
export default MobileNav;
