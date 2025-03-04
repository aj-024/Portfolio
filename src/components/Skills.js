import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Key Skills</h2>
              <p>
                I have expertise in various programming languages, frameworks, and tools, enabling me to build and deploy dynamic applications. Below are the areas where I excel.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                
                {/* Front-End Development */}
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Front-End Development</h5>
                  <p>React.js, HTML5, CSS3, Bootstrap, Material-UI</p>
                </div>

                {/* Back-End Development */}
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Back-End Development</h5>
                  <p>Node.js, Express.js, RESTful APIs</p>
                </div>

                {/* Programming Languages */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Programming Languages</h5>
                  <p>C++, Java, JavaScript</p>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Databases</h5>
                  <p>SQL, MongoDB</p>
                </div>

                {/* Developer Tools */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Developer Tools</h5>
                  <p>VS Code, Eclipse, NetBeans, Android Studio, GitHub</p>
                </div>

                {/* UI/UX Design */}
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Frameworks/Libraries</h5>
                  <p>React, OpenCV, YOLO, CNN Studio</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
