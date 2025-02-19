
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full-Stack Developer", "Problem Solver", "Tech Enthusiast" ]; 
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">  
      <Container fluid className="d-flex align-items-center justify-content-center"> 
        <Row className="align-items-center w-100"> {/* ✅ Ensures alignment */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Where Creativity Meets Technology</span>
                
                <h1>
                  {`Hi! I'm Anuj `}  
                  <span className="txt-rotate" data-period="1000" data-rotate='["Full-Stack Developer", "Problem Solver", "Tech Enthusiast"]'>  
                    <span className="wrap">{text}</span>  
                  </span>  
                </h1>

                <p>
                  Passionate Full-Stack Developer focused on building scalable, high-performance applications.  
                  Driven by problem-solving, innovation, and creating seamless user experiences.
                </p>

                <div className="button-container">
                <button
  className="download-cv"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1viC5OkdlGIUu7jirD-BkX8j-WzIClk3H";
    link.download = "Anuj_Jadhav_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
Download CV 📥
</button>

  <button
    onClick={() => {
      const contactSection = document.getElementById("connect");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("Contact section not found");
      }
    }}
  >
    Let’s Connect <ArrowRightCircle size={25} />
  </button>
</div>
              </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
