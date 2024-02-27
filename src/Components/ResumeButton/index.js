import {Button} from 'theme-ui';
import ExternalLink from "../../assets/symbols/externalLink";
import '../../styles/pages.scss';
const ResumeButton = () => {
    const ResumeLink =
      "https://docs.google.com/document/d/1Jxc2VQ64EsG2RAAKvZBG4zuN8lFK2JEQS6Jixa-ZT6Q/edit?usp=sharing";
    return (
      <div className="resumeButton">
        <a href={ResumeLink} rel="noopener noreferrer" target="_blank">
          <Button
            sx={{
              backgroundColor: "#0C0C0D",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
          >
            View Full Resume
            <ExternalLink />
          </Button>
        </a>
      </div>
    );
}

export default ResumeButton;