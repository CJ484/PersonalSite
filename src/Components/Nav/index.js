/** @jsxImportSource theme-ui */
import { useState } from "react";
import { useColorMode } from "theme-ui";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import sun from "../../assets/symbols/sun.svg";
import moon from "../../assets/symbols/moon.svg";
import RouteInfo from "../../const/paths";
import "../../styles/App.scss";

const NavDesktop = () => {
  const routes = RouteInfo();
  const [colorMode, setColorMode] = useColorMode();
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
    setColorMode(colorMode === "default" ? "dark" : "default");
  };

  return (
    <div className="navDesktop">
      <Link exact="true" to="/">
        <img className="nav-logo" src={logo} alt="logo" />
      </Link>
      <div className="nav-menu">
        <ul>
          {Object.values(routes).map((route) => (
            <Link
              className="nav-menu-item"
              key={route.path}
              exact="true"
              to={route.path}
            >
              <li sx={{color: 'grey'}}>{route.title}</li>
            </Link>
          ))}
        </ul>
        <img
          sx={{
            fill: "text",
          }}
          onClick={() => toggleTheme()}
          aria-label="auto"
          aria-live="polite"
          id="theme-selector"
          className="theme-selector"
          src={lightTheme ? sun : moon}
          alt="theme-selector"
        />
      </div>
    </div>
  );
};

export default NavDesktop;
