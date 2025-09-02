import { motion, useScroll, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";


// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export const ProjectCard = ({ title, description, imgUrl, source_code_link, live_demo_link, index, techStack }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  // Overlay hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="col-12 col-sm-6 col-md-4 mb-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index * 0.2}
      whileHover={{ scale: 1.05, rotate: 1 }}
    >
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className="project-card relative overflow-hidden rounded-2xl"
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image with slight parallax effect */}
        <motion.div style={{ y: parallaxY }}>
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-[230px] object-cover rounded-2xl"
          />
        </motion.div>



        {/* Overlay with buttons */}
{isHovered && (
  <div className="overlay">
    {live_demo_link && (
      <motion.a
        href={live_demo_link}
        target="_blank"
        rel="noopener noreferrer"
        className="overlay-btn"
        whileHover={{ scale: 1.08 }}
      >
        <i className="fas fa-external-link-alt"></i>
      </motion.a>
    )}
    {source_code_link && (
      <motion.a
        href={source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="overlay-btn"
        whileHover={{ scale: 1.08 }}
      >
        <i className="fab fa-github"></i>
      </motion.a>
    )}
  </div>
)}




        {/* Project Content (Title & Description) */}
        <div className="project-content mt-4">
          <h3 className="text-white font-bold text-2xl">{title}</h3>
          <p className="text-secondary mt-2">{description}</p>
          <div className="tech-stack mt-3 flex flex-wrap gap-2">
            {techStack && techStack.map((tech, index) => (
              <span key={index} className="tech-name bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};
