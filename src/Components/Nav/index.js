import { Link } from "react-router-dom";
import HomePage from "../../pages/home";
import logo from "../../assets/images/logo.png";
import sun from "../../assets/symbols/sun.svg";
import RouteInfo from "../../const/paths";
import "../../styles/App.scss";

const NavDesktop = () => {
  const routes = RouteInfo();
  return (
    <div className="navDesktop">
      <Link exact="true" to="/" element={<HomePage />}>
        <img className="nav-logo" src={logo} alt="logo" />
      </Link>
      <div className="nav-menu">
        <ul>
          {Object.values(routes).map((route) => (
            <Link
              className="nav-menu-item"
              key={route.path}
              exact="true"
              path={route.path}
              element={route.element}
            >
              <li>{route.title}</li>
            </Link>
          ))}
        </ul>
        <img className="theme-selector" src={sun} alt="theme-selector" />
      </div>
    </div>
  );
};

export default NavDesktop;
