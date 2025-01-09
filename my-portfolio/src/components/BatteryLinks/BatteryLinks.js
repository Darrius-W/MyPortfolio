import { ReactComponent as GitHubIcon } from '../../assets/images/github-icon.svg';
import { ReactComponent as LinkedInIcon } from "../../assets/images/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/images/email-icon.svg";
import "./BatteryLinks.css"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function MyLinks(){
    const Link = ({ id, children, title, linkPath}) => (
        <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="bottom" overlay={<Tooltip className="custom-tooltip" id={id}>{title}</Tooltip>}>
          <a href={ linkPath } target="_blank" rel="noreferrer" className='battery-slab'>{children}</a>
        </OverlayTrigger>
    );

    return(
        <div className='navRight'>
            <div className='navRight-extra'></div>
            <span className='navRight-lnks'>
                <div className="battery-bg"></div>
                <Link linkPath="https://github.com/Darrius-W" title="Github" id="gh-lnk">
                    <GitHubIcon className="gh-icon" width="75%" height="75%" />
                </Link>
                <Link linkPath="https://www.linkedin.com/in/darrius-white/" title="LinkedIn" id="li-lnk">
                    <LinkedInIcon className="linkedin-icon" width="75%" height="75%" />
                </Link>
                <Link linkPath="mailto:darriuswhite582@gmail.com?subject=I'd like to connect!" title="Email" id="email-lnk">
                    <EmailIcon className="email-icon" width="75%" height="75%" />
                </Link>
            </span>
        </div>
    );
};