import {Routes, Route} from 'react-router';
import RouteInfo from './const/paths';
import NavDesktop from './Components/Nav';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const routes = RouteInfo();
  return (
    <div className="App">
      <NavDesktop />
      <Routes>
        {Object.values(routes).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        </Routes>
    </div>
  );
}

export default App;
