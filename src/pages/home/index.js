import avatar from '../../assets/images/myImage.jpg';
import '../../styles/pages.scss';

const HomePage = () => {
  return (
    <div className='home router-page'>
      <img src={avatar} alt="avatar" />
      <h1>Hi I'm Carlos</h1>
      <h1>I am a Front-End Developer</h1>
    </div>
  );
};

export default HomePage;