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
import {
  Character,
  CharacterName,
} from "./components/animations/character/Character";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { CharacterState } from "./contexts/CharacterContext";
import profilePicture from "./assets/profile-picture.png";
import { Explosion } from "./components/animations/kyo/explosion/Explosion";
import { changeTheme, useTheme } from "./contexts/ThemeContext";
import HeroHeading from "./components/HeroHeading";

const characterArray: CharacterName[] = ["kyo", "iori", "kula"];

function App() {
  const controls = useAnimation();
  const { theme, setTheme } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true });
  const pageDimensions: { width: number; height: number } =
    useWindowDimensions();
  const [characterState, setCharacterState] =
    useState<CharacterState>("running");
  const [characterPresent, setCharacterPresent] = useState<boolean>(false);
  const [characterName, setCharacterName] = useState<CharacterName>(
    // characterArray[Math.floor(Math.random() * characterArray.length)]
    "kula"
  );
  const [explosions, setExplosions] = useState<React.ReactNode[]>([]);
  const [explosionsActive, setExplosionsActive] = useState<boolean>(false);
  const [pfpAnimation, setPfpAnimation] = useState<PfpAnimation>("idle");

  useEffect(() => {
    if (!explosionsActive) return;
    let currentDistance = 0;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        currentDistance += 130; // Increment distance by 100px for each Explosion
        setExplosions((prevExplosions) => [
          ...prevExplosions,
          <Explosion
            animationState="active"
            distance={`${currentDistance}px`}
            key={(Date.now() % 1000) + i}
          />,
        ]);
      }, i * 250); // Delay by 0.5 seconds for each component
    }

    setTimeout(() => {
      setExplosionsActive(false); // Adjust this as needed for your logic
    }, 1250); // Total time of explosions
  }, [explosionsActive]);

  useEffect(() => {
    if (pageDimensions.width > 1242 && characterState !== "running-back") {
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

  return (
    <>
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />

      {characterPresent && ( // Conditionally render the character if characterPresent is true
        <div style={{ display: "flex", position: "relative" }}>
          {characterState === "running" || characterState === "running-back" ? (
            <motion.div
              initial={{
                x:
                  characterState === "running-back"
                    ? pageDimensions.width / 2 -
                      (characterName === "kyo" || characterName === "kula"
                        ? 300
                        : -300) // Center with offset based on character
                    : characterName === "kyo" || characterName === "kula"
                    ? -300 // Off-screen left for Kyo
                    : pageDimensions.width + 300, // Off-screen right for Iori
              }}
              animate={{
                x:
                  characterState === "running-back"
                    ? characterName === "kyo"
                      ? -300 // Back to off-screen left for Kyo
                      : pageDimensions.width + 300 // Back to off-screen right for Iori
                    : pageDimensions.width / 2 -
                      (characterName === "kyo" || characterName === "kula"
                        ? 300
                        : -300), // Near-center position
              }}
              transition={{ duration: 1.5 }}
              onAnimationComplete={() => {
                if (characterState === "running") {
                  setCharacterState("neomax");
                  setTimeout(() => {
                    if (characterName === "kyo") {
                      setExplosionsActive(true);
                      setTimeout(() => setPfpAnimation("quake"), 100);
                      setTimeout(() => setPfpAnimation("idle"), 1300); // Makes it so it happens everytime kyo reappears
                    }
                  }, 1200);
                  setTimeout(() => {
                    if (characterName === "iori") {
                      setTimeout(() => setPfpAnimation("scratched"), 100);
                      setTimeout(() => setPfpAnimation("idle"), 1300); // Makes it so it happens everytime kyo reappears
                    }
                  }, 600);
                } else if (characterState === "running-back")
                  setCharacterPresent(false);
              }}
            >
              <Character
                characterState={characterState}
                setCharacterState={setCharacterState}
                characterName={characterName}
              />
            </motion.div>
          ) : (
            <div
              style={(() => {
                if (characterName === "kyo") {
                  return {
                    position: "absolute",
                    top: 0,
                    left: `${pageDimensions.width / 2 - 300}px`, // Set to final position when standing
                  };
                } else if (characterName === "iori") {
                  return {
                    position: "absolute",
                    top: 0,
                    left: `${pageDimensions.width / 2 + 300}px`, // Set to final position when standing
                  };
                } else if (characterName === "kula") {
                  return {
                    position: "absolute",
                    top: 0,
                    left: `${pageDimensions.width / 2 - 300}px`, // Set to final position when standing
                  };
                } else {
                  return {};
                }
              })()}
            >
              <Character
                characterState={characterState}
                setCharacterState={setCharacterState}
                characterName={characterName}
              ></Character>
            </div>
          )}
        </div>
      )}
      <div
        onClick={async () => {
          if (characterState === "final") {
            setCharacterState("running-back");
            const wait = (ms: number | undefined) =>
              new Promise((resolve) => setTimeout(resolve, ms));
            await wait(1803);
            const newTheme = changeTheme(theme);
            setTheme(newTheme);

            setCharacterPresent(true);
            setCharacterName(
              characterArray[
                (characterArray.indexOf(characterName) + 1) %
                  characterArray.length
              ]
            );
            setCharacterState("running");
          }
        }}
      >
        <Hero
          img={profilePicture}
          description={information.userData.description}
          title={information.userData.title}
          status={pfpAnimation}
          characterState={characterState}
        />
        <div>{explosions}</div>
      </div>
      {}

      <div className="hr"></div>
      <HeroHeading></HeroHeading>
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

      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
