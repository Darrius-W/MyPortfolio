import './ContentSec.css'

export default function ContentSec(){
    return(
        <section className="home-page d-flex flex-column justify-content-center align-items-center">
          <video className="bg-video" preload autoPlay muted loop disablePictureInPicture>
              <source src="/videos/cctv.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          <div className="main-content">
            <h2>Hello, I'm <span className="myName">Darrius</span></h2>
            <h3>I'm a front-end developer and aspiring full-stack developer.</h3>
            <p className='content-text'>
              I specialize in developing web applications with a focus on creating
              intuitive UI designs that bring creative visions to life. I prioritize
              responsive design, robust functionality, and delivering a positive
              user experience.
            </p>
          </div>
        </section>
    );
};