import avatar from '../../assets/images/avatar.png';
import '../../styles/pages.scss';

const HomePage = () => {
  return (
    <div className='home'>
      <img src={avatar} alt="avatar" />
      <h1>Hi I'm Carlos</h1>
      <h1>I am A Front-End Developer</h1>
    </div>
  );
};

export default HomePage;