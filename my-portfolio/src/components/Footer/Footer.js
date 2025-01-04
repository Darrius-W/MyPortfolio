import './Footer.css'

export default function Footer(){
    return(
        <footer className="fixed-bottom d-flex justify-content-center">
            <div className="footer-sect">
                <span className="footer-socials gap-3 d-flex justify-content-center">
                    <a className="footer-item navbar-brand" href="https://github.com/Darrius-W">
                        <img id="social-icon" height="30rem" width="30rem" alt="github-symbol" src="/images/github-mark-white.png"/>
                    </a>
                    <a className="footer-item navbar-brand" href="https://www.linkedin.com/in/darrius-white/">
                        <img height="30rem" width="30rem" src="/images/linkedin-app-white-icon.png" alt="linkedin-symbol"/>
                    </a>
                </span>
                <p className="built-by-tag d-flex justify-content-center">Built by Darrius White</p>
            </div>
        </footer>
    );
};