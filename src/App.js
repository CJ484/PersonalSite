import avatar from './assets/images/avatar.png';
import './App.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <img src={avatar} alt="avatar" />
      <h1>Hi I'm Carlos</h1>
      <h1>I am A Front-End Developer</h1>
    </div>
  );
}

export default App;
