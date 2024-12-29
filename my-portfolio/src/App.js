import './App.css';
import Nav from 'react-bootstrap/Nav';

function App() {
  const sendMail = () => {
    window.location.href = "mailto:darriuswhite582@gmail.com?subject=I'd like to connect!"
  }

  return (
    <>
      <main>
        <div class="TL-frame"></div>
        <div class="TR-frame"></div>
        <div class="BL-frame"></div>
        <div class="BR-frame"></div>
        <header className="fixed-top">
          <Nav className="navbar bg-transparent">
            <div className="container-fluid">
              <span className='navLeft'>
                <div className='circle'></div>
                <a className="name-lnk navbar-brand" href="#">Darrius White</a>
              </span>
              <span>
                <a className="nav-lnks navbar-brand" href="https://github.com/Darrius-W">
                  <img height="30rem" width="30rem" alt="github-symbol" src="/images/github-mark-white.png"/>
                </a>
                <a className="nav-lnks navbar-brand" href="https://www.linkedin.com/in/darrius-white/">
                  <img height="30rem" width="30rem" src="/images/linkedin-app-white-icon.png" alt="linkedin-symbol"/>
                </a>
              </span>
            </div>
          </Nav>
        </header>
        <section className="home-page d-flex flex-column justify-content-center align-items-center">
          <video className="bg-video" autoPlay muted loop disablePictureInPicture>
              <source src="/videos/cctv.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          <div className="main-content">
            <h2>Hello, I'm Darrius</h2>
            <h3>I build software solutions for the web.</h3>
            <p>
              I'm a software developer specialized in building secure,
              user-focused full-stack applications that align with business needs.
              I prioritize intuitive design, robust functionality, and exceptional
              user experiences.
            </p>
            <button type="button" onClick={ sendMail } className="contact-btn btn btn-lg btn-outline-light">Get In Touch</button>
          </div>
        </section>
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
      </main>
    </>
  );
}

export default App;
