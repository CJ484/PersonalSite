/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import RouteInfo from "../../const/paths";
import "../../styles/App.scss";
import ThemeToggle from "../ThemeToggle";

const NavDesktop = () => {
  const routes = RouteInfo();
  return (
    <div className="navDesktop">
      <Link exact="true" to="/">
        <img className="nav-logo" src={logo} alt="logo" />
      </Link>
      <ul className="nav-menu">
        
          {Object.values(routes).map((route) => (
            <li>
            <Link
              sx={{color: 'grey'}}
              className="nav-menu-item"
              key={route.path}
              exact="true"
              to={route.path}
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

export default NavDesktop;
