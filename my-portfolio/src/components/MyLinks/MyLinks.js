import { ReactComponent as GitHubIcon } from '../../assets/images/github-icon.svg';
import { ReactComponent as LinkedInIcon } from "../../assets/images/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/images/email-icon.svg";
import "./MyLinks.css"

export default function MyLinks(){
    const sendMail = () => {
        window.location.href = "mailto:darriuswhite582@gmail.com?subject=I'd like to connect!"
    }

    return(
        <div className='navRight'>
            <div className='navRight-extra'></div>
            <span className='navRight-lnks'>
                <a href="https://github.com/Darrius-W" target="_blank" className='battery-slab'>
                    <p className="gh-text">GitHub</p>
                    <GitHubIcon className="gh-icon" width="75%" height="75%" />
                </a>
                <a href="https://www.linkedin.com/in/darrius-white/" target="_blank" className='battery-slab'>
                    <p className="linkedin-text">LinkedIn</p>
                    <LinkedInIcon className="linkedin-icon" width="75%" height="75%" />
                </a>
                <button onClick={ sendMail } className='battery-slab email-btn'>
                    <p className="email-text">Email</p>
                    <EmailIcon className="email-icon" width="85%" height="95%" />
                </button>
            </span>
        </div>
    );
};