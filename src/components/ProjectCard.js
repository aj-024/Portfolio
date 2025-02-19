import { motion, useScroll, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";
import { useRef } from "react";
import navIcon2 from '../assets/img/nav-icon2.svg';

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Initially hidden and moved down
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }, // Dynamic delay for stagger effect
  }),
};

export const ProjectCard = ({ title, description, imgUrl, source_code_link, index, techStack }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax effect on image
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-10, 10]); // Moves image slightly when scrolling

  return (
    <motion.div
      className="col-12 col-sm-6 col-md-4 mb-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index * 0.2} // Stagger animation by index
      whileHover={{ scale: 1.05, rotate: 1 }} // Hover effect
    >
      {/* Apply Tilt effect for 3D hover animation */}
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="project-card relative"
        ref={ref}
      >
        {/* Project Image with slight parallax effect */}
        <motion.div style={{ y: parallaxY }}>
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-[230px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Project Content (Title & Description) */}
        <div className="project-content mt-4">
          <h3 className="text-white font-bold text-2xl">{title}</h3>
          <p className="text-secondary mt-2">{description}</p>
          
          {/* Tech Stack on hover */}
          <div className="tech-stack mt-3">
            {techStack && techStack.map((tech, index) => (
              <span key={index} className="tech-name">{tech}</span>
            ))}
          </div>
        </div>

        {/* GitHub Logo Button (Top-Right) */}
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-logo absolute top-2 right-2"
        >
          <img src={navIcon2} alt="GitHub" className="w-6 h-6" />
        </a>
      </Tilt>
    </motion.div>
  );
};
