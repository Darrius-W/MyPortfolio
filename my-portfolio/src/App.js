import './App.css';
import Nav from 'react-bootstrap/Nav';
import { ReactComponent as GitHubIcon } from "./assets/images/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "./assets/images/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "./assets/images/email-icon.svg";
import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState({
    date: '',
    time: ''
  });

  useEffect(() => {
    // Function to update the date and time
    const updateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString('en-US');
      const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, // 24-hour format
      });

      // Format time (HH:MM:SS)
      /*const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setCurrentTime(now.toLocaleDateString(undefined, timeOptions));*/

      setCurrentTime({ date, time });
    };

    // update time every second
    const timer = setInterval(updateTime, 1000);

    // initialize time on mount
    updateTime();

    return () => clearInterval(timer);
  }, []);

  return(
    <div className='time-container'>
      {/*<p>Your Local Time:</p>*/}
      <p className="local-date">{ currentTime.date }</p>
      <p className="local-time">{ currentTime.time }</p>
      {/*<p className="timezone">Time Zone: { timeZone }</p>*/}
    </div>
  );
};

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
                  {/*
                  <a className="nav-lnks navbar-brand" href="https://github.com/Darrius-W">
                    <img height="30rem" width="30rem" alt="github-symbol" src="/images/github-mark-white.png"/>
                  </a>
                  <a className="nav-lnks navbar-brand" href="https://www.linkedin.com/in/darrius-white/">
                    <img height="30rem" width="30rem" src="/images/linkedin-app-white-icon.png" alt="linkedin-symbol"/>
                  </a>
                  */}
                </span>
              </div>
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
            <p className='content-text'>
              I'm a software developer specialized in building secure,
              user-focused full-stack applications that align with business needs.
              I prioritize intuitive design, robust functionality, and exceptional
              user experiences.
            </p>
            {/*<button type="button" onClick={ sendMail } className="contact-btn btn btn-lg btn-outline-light">Get In Touch</button>*/}
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
        <TimeDisplay />
        {/*<div className="local-time">00:00:00</div>*/}
      </main>
    </>
  );
}

export default App;
