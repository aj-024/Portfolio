import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";


export const Footer = () => {
  return (
    <footer className="footer-container">
  <Container>
    <Row className="footer-row align-items-center py3">
      <Col xs={12} sm={6} className="footer-logo ">
        <img src={logo} alt="Logo" />
      </Col>

      <Col size={12} sm={6} className="footer-social text-center text-sm-end">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/anuj-jadhav-44202422a" target="_blank" rel="noopener noreferrer">
            <img src={navIcon1} alt="LinkedIn" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/aj-024" target="_blank" rel="noopener noreferrer">
            <img src={navIcon2} alt="GitHub" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://leetcode.com/anuj_24" target="_blank" rel="noopener noreferrer">
            <img src={navIcon4} alt="Instagram" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/anuuj24_" target="_blank" rel="noopener noreferrer">
            <img src={navIcon3} alt="Instagram" />
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</footer>

  );
};
