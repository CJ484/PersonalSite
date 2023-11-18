/** @jsxImportSource theme-ui */
import "../../styles/pages.scss";

const ResumePage = () => {
  return (
    <div className="resume router-page">
      <h2 className="subtitle">Check out my bio...</h2>
      <p className="summary">
        Nice to meet you all, I am a Front-End Developer. I like to free draw,
        so getting creative ideas on a website is my speaciality. I also like
        everything when it comes to technology, so I am always learning new
        things. You can always say "Whats going to be the next big thing? and
        will we get Marty Mcfly's hoverboard?". I enjoyed codiung when I took my
        first class in college, and I have been doing it ever since. I am
        currently learning more about React and Javascript. I am also learning
        about the backend, so I can be a Full-Stack Developer. I am also
        learning about UI/UX design, so I can make my websites look more
        appealing. I am also learning about SEO, so I can make my websites more
        visible on the web. Web 3.0 will soon be here, so I am also learning
        about blockchain and cryptocurrency.
      </p>
      <h3 className="subtitle">Education</h3>
      <table>
        <tbody>
          <tr>
            <td className="education-location">Mentorship</td>
            <td>
              I am currently being taught by{" "}
              <a
                sx={{color: 'purple'}}
                href="https://github.com/michaeltomasik"
                target="_blank"
                rel="noreferrer"
              >
                Michał Tomasik
              </a>{" "}
              on how to be a better developer
            </td>
            <td sx={{color: 'grey'}} className="education-date">March 2023 - Present</td>
          </tr>
          <tr>
            <td className="education-location">General Assembly</td>
            <td>
              I took a 3 month bootcamp to learn more about Javascript and React
            </td>
            <td sx={{color: 'grey'}} className="education-date">September 2021 - December2021</td>
          </tr>
          <tr>
            <td className="education-location">Codecademy</td>
            <td>
              I started my learning path by self teaching myself the basics of
              HTML, CSS, JS
            </td>
            <td sx={{color: 'grey'}} className="education-date">December 2020 - March 2021</td>
          </tr>
          <tr>
            <td className="education-location">Suffolk County College</td>
            <td>
              I received my associates degree in Liberal Arts and Sciences
            </td>
            <td sx={{color: 'grey'}} className="education-date">2015 - 2021</td>
          </tr>
        </tbody>
      </table>
      <h3 className="subtitle">Experience</h3>
      <table>
        <tbody>
          <tr>
            <td sx={{color: 'grey'}} className="experience-date">September 2021 - Present</td>
            <td className="experience-location">Lowes</td>
          </tr>
          <tr>
            <td sx={{color: 'grey'}} className="experience-date">October 2023 - Present</td>
            <td className="experience-location">Freelance</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResumePage;
