/** @jsxImportSource theme-ui */
import { Routes, Route } from "react-router";
import { Suspense } from "react";
import RouteInfo from "./const/paths";
import { NavDesktop, Loading } from "./Components/";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileNav from "./Components/Nav/mobileNav";

function App() {
  const routes = RouteInfo();
  return (
    <div sx={{backgroundColor: 'background', color: 'text'}}className="App">
      <NavDesktop />
      <MobileNav />
      <Routes>
        {Object.values(routes).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Suspense fallback={<Loading />}>{route.element}</Suspense>}
            exact={route.exact}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
