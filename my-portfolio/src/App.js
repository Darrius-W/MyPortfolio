import './App.css';

function App() {
  return (
    <>
      <div class="area main-wrapper container">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>


        <div class="hero-content">
          <div class="hero-text container">
            <h1>HELLO, I AM<br />DARRIUS WHITE.</h1>
            <p>A software developer passionate about creating
                interactive front-end designs and delivering comprehensive
                back-end solutions.
            </p>
          </div>
          <div class="wrapper">
            <span id="lnk-wrapper">
              <a id="contact-lnk" href="mailto:darriuswhite582@gmail.com?subject=I'd like to connect!"><span id="contact-span">Let's Connect</span></a>
              <a class="my-lnks" href="https://github.com/Darrius-W" target="_blank"><img id="github-lnk" src="/images/icons8-github-90.png" alt="Github-logo" /></a>
              <a class="my-lnks" href="https://www.linkedin.com/in/darrius-white/" target="_blank"><img id="linkedIn-img" src="/images/icons8-linkedin-70.png" alt="LinkedIn-logo" /></a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
