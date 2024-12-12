import "./App.css";
import Hero, { PfpAnimation } from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects from "./content/projects";
import Skill from "./components/Skill";
import { skills } from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import blogPosts from "./content/blogPosts";
import ContactForm from "./components/ContactForm";
import BlogPost from "./components/BlogPost";
import React from "react";
import { CharacterKyo } from "./components/animations/kyo/Kyo";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { CharacterState } from "./contexts/CharacterContext";
import profilePicture from "./assets/profile-picture.png";
import { Explosion } from "./components/animations/explosion/Explosion";

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const pageDimensions: { width: number; height: number } =
    useWindowDimensions();
  const [characterState, setCharacterState] =
    useState<CharacterState>("running");
  const [characterPresent, setCharacterPresent] = useState<boolean>(false);

  const [explosions, setExplosions] = useState<React.ReactNode[]>([]);
  const [explosionsActive, setExplosionsActive] = useState<boolean>(false);
  const [pfpAnimation, setPfpAnimation] = useState<PfpAnimation>("idle");
  useEffect(() => {
    if (!explosionsActive) return;
    console.log(explosionsActive);
    let currentDistance = 0;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        currentDistance += 130; // Increment distance by 100px for each Explosion
        setExplosions((prevExplosions) => [
          ...prevExplosions,
          <Explosion
            animationState="active"
            distance={`${currentDistance}px`}
            key={1337 + i}
          />,
        ]);
      }, i * 250); // Delay by 0.5 seconds for each component
    }
  }, [explosionsActive]);

  useEffect(() => {
    if (pageDimensions.width > 1242) {
      setCharacterPresent(true);
    } else {
      setCharacterPresent(false);
    }
  }, [pageDimensions]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    console.log("Updated characterState:", characterState); // Logs the updated state
  }, [characterState]);

  return (
    <>
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />

      {characterPresent && ( // Conditionally render the character if characterPresent is true
        <div
          style={{ display: "flex", position: "relative", marginTop: "70px" }}
        >
          {characterState === "running" ? (
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: pageDimensions.width / 2 - 300 }}
              transition={{ duration: 1.5 }}
              onAnimationComplete={() => {
                if (characterState === "running") {
                  setCharacterState("neomax");
                  setTimeout(() => {
                    setExplosionsActive(true);
                    setPfpAnimation("quake");
                  }, 1200);
                }
              }}
            >
              <CharacterKyo
                characterState={characterState}
                setCharacterState={setCharacterState}
              />
            </motion.div>
          ) : (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${pageDimensions.width / 2 - 300}px`, // Set to final position when standing
              }}
            >
              <CharacterKyo
                characterState={characterState}
                setCharacterState={setCharacterState}
              />
            </div>
          )}
        </div>
      )}
      <Hero
        img={profilePicture}
        description={information.userData.description}
        title={information.userData.title}
        status={pfpAnimation}
      />
      <div>{explosions}</div>
      {}
      <div className="hr"></div>

      <section id="projects">
        <Heading firstWord="My" secondWord="Projects" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                name={project.name}
                img={project.img}
                description={project.description}
                source={project.sourceCode}
                preview={project.preview}
                tags={""}
              />
            </div>
          ))}
        </motion.div>
      </section>
      <section id="skills">
        <Heading firstWord="Skills" secondWord="&Tools" />
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill.name} url={skill.url} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="blog">
        <Heading firstWord="My" secondWord="Blog" />
        <div className="posts">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              image={post.image}
              read={post.link}
              date={post.pubDate}
              tags={""}
            />
          ))}
        </div>
        <a className="cyber-scourge" href="https://blog.randiltharusha.me">
          View More Posts
        </a>
      </section>

      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
