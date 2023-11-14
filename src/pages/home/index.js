import mySkills from "../../const/skills";
import avatar from "../../assets/images/myImage.jpg";
import "../../styles/pages.scss";
import Github from "../../assets/symbols/github.js";
import LinkedIn from "../../assets/symbols/linkedin.js";
import Mail from "../../assets/symbols/mail.js";

const HomePage = () => {
  return (
    <div className="home router-page light-theme">
      <img className="myImg" src={avatar} alt="avatar" />

      <h1>Hi, I'm <b>Carlos Coreas</b> & I am a</h1>
      <h1 className="role">Front-End Developer 👨‍💻</h1>
      <h3 className="subtitle">About me</h3>
      <div className="homeSection">
        <p>
          I have experience in React and Agile
          Methodologies. I got into coding watching movies and shows like
          for some of you who remembers "Code Lyoko" or "The Core".
          Every job I have received they would call me the IT guy because I
          would always fix the computers and printers. I have always been
          interested in technology and how it works. I am a very curious person
          and love to learn new things. I am a very hard worker and I
          am always looking for new challenges. I am on the verge of looking for
          a new job opportunity that allows me to grow professionally and
          personally.
        </p>
      </div>
      <div className="homeSection">
        <h5>👀 Currently looking for employment</h5>
        <h5>📍 Currently located on Long Island, NY</h5>
        <h5>📚 Learning to be a Full-Stack Developer & Web 3.0</h5>
      </div>
      <h3 className="subtitle">Social Media</h3>
      <div className="social-media homeSection">
        <a
          className="social-link"
          href="https://www.linkedin.com/in/carlos-coreas-247048101/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
          <h5>@Carlos-Coreas</h5>
        </a>
        <a
          className="social-link"
          href="https://github.com/CJ484"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
          <h5>@CJ484</h5>
        </a>
        <a
          className="social-link"
          href="ccoreas484@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Mail />
          <h5>@ccoreas484</h5>
        </a>
      </div>
      <h3 className="subtitle">Technologies I use</h3>
      <div className="homeSection">
        <div className="skills">
          {Object.keys(mySkills).map((key) => {
            const { name, image } = mySkills[key];
            return (
              <div className="skill" key={key}>
                <img src={image} alt={name} />
                <h6>{name}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
