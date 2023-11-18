/** @jsxImportSource theme-ui */
import { useState } from "react";
import { useColorMode } from "theme-ui";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Sun from "../../assets/symbols/sun.js";
import Moon from "../../assets/symbols/moon.js";
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
        
        {lightTheme ? (
          <Sun toggleTheme={toggleTheme} />
        ) : (
          <Moon toggleTheme={toggleTheme} />
        )}
      </ul>
    </div>
  );
};

export default NavDesktop;
