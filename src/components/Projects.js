import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "List & Stay",
      description: "Web platform for property listing and searching with map.",
      imgUrl: projImg10,
      source_code_link: "https://github.com/aj-024/List-Stay",
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'] // Add tech stack here
    },
    {
      title: "YouTube 2.O",
      description: "Video streaming app with dynamic search and playback.",
      imgUrl: projImg11,
      source_code_link: "https://github.com/aj-024/YouTube-2.O",
      techStack: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website",
      imgUrl: projImg2,
      source_code_link: "https://github.com/aj-024/Portfolio",
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: "Smart Chatbot",
      description: "A chatbot with Gemini-API integration",
      imgUrl: projImg1,
      source_code_link: "https://github.com/aj-024/AI-ChatBot",
      techStack: ['React', 'Gemini API', 'Node.js']
    },
    {
      title: "Weather App",
      description: "Real-time weather updates",
      imgUrl: projImg3,
      source_code_link: "https://github.com/aj-024",
      techStack: ['React', 'OpenWeather API']
    },
    {
      title: "To-Do List",
      description: "A task management app to track daily tasks.",
      imgUrl: projImg4,
      source_code_link: "https://github.com/aj-024",
      techStack: ['React', 'CSS']
    },
    {
      title: "Lottery Game",
      description: "A game to pick random winning numbers.",
      imgUrl: projImg5,
      source_code_link: "https://github.com/aj-024",
      techStack: ['JavaScript', 'HTML', 'CSS']
    },
    {
      title: "Simon Says Game",
      description: "A memory game where players repeat a sequence of colors.",
      imgUrl: projImg6,
      source_code_link: "https://github.com/aj-024",
      techStack: ['JavaScript', 'HTML', 'CSS']
    },
    {
      title: "ATM Simulator",
      description: "A simulation of basic ATM functionalities like withdrawal, deposit, and balance check.",
      imgUrl: projImg7,
      source_code_link: "https://github.com/aj-024/ATM-Simulator",
      techStack: ['Java', 'Swing']
    },
    {
      title: "AI Accident Eye",
      description: "AI-powered system for real-time accident detection and alert generation.",
      imgUrl: projImg8,
      source_code_link: "https://github.com/aj-024",
      techStack: ['Python', 'OpenCV', 'Machine Learning', 'YOLO']
    },
    {
      title: "Wireless EV Charging System",
      description: "A system that charges electric vehicles wirelessly while in motion.",
      imgUrl: projImg9,
      source_code_link: "https://github.com/aj-024",
      techStack: ['IoT', 'Wireless Charging', 'Arduino']
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 className="text-center">Projects</h1>
                <p className="text-center mt-3">
                  Explore the wide range of innovative projects I have worked on, showcasing my skills in various fields.
                </p>
                <div className="row mt-4">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  ))}
                </div>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
};
