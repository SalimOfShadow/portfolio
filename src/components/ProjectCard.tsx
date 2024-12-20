import * as React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { themeShadows, useTheme } from "../contexts/ThemeContext";
// import { motion } from "framer-motion";
const ProjectCard = (props) => {
  const { theme, setTheme } = useTheme();
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  return (
    <div
      className="project-card"
      style={{ boxShadow: `0 8px 32px 0 ${themeShadows[theme]}` }}
    >
      <div className="project-img">
        <img
          src={props.img}
          alt={props.name}
          onClick={() => {
            window.open(props.source, "_blank");
          }}
        />
      </div>
      <div className="project-title">
        <h2>{props.name}</h2>
      </div>
      <div className="project-description">
        <p>{props.description}</p>
      </div>
      <div className="project-links">
        {props.source && (
          <div>
            <a href={props.source} className="github">
              <FaGithub />
            </a>
            <a href={props.preview}>
              <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </div>

      {/* <div className="project-tags">
        <div className="project-tag">
          {projects.stack.map((project, index) => (
            <p key={index}>hello</p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default ProjectCard;
