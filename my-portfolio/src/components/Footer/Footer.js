import './Footer.css'
import { ReactComponent as GitHubIcon } from '../../assets/images/github-icon.svg';
import { ReactComponent as LinkedInIcon } from "../../assets/images/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/images/email-icon.svg";

export default function Footer(){
    return(
        <footer className="fixed-bottom d-flex justify-content-center">
            <div className="footer-sect">
                <span className="footer-socials gap-3 d-flex justify-content-center">
                    <a className="footer-item navbar-brand" href="https://github.com/Darrius-W" alt="Github" rel="noreferrer">
                        <GitHubIcon className="gh-footer" width="2.5rem" height="2.5rem" fill="white" stroke="black" />
                    </a>
                    <a className="footer-item navbar-brand" href="https://www.linkedin.com/in/darrius-white/" alt="LinkedIn" rel="noreferrer">
                        <LinkedInIcon className="linkedin-footer" width="2.5rem" height="2.5rem" fill="white" stroke="black" />
                    </a>
                    <a className="footer-item navbar-brand" href="mailto:darriuswhite582@gmail.com?subject=I'd like to connect!" alt="Email" rel="noreferrer">
                        <EmailIcon className="email-footer" width="2.5rem" height="2.5rem" fill="white" stroke="black" />
                    </a>
                </span>
                <p className="built-by-tag d-flex justify-content-center">© Darrius White 2025</p>
            </div>
        </footer>
    );
};