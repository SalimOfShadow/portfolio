import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
const totype = [
  "A Tech Enthusiast 🤖",
  "A Web Developer 🌐",
  "Costantly learning new skills 🛠️",
  "In love with programming ❤️",
  "A Gamer 🕹️",
];

const delayTyping_char = 70;
const delayErasing_text = 70;
const delayTyping_text = 900;

let totypeIndex = 0;
let charIndex = 0;

const HeroHeading = () => {
  const { theme } = useTheme();
  const [currentColor, setCurrentColor] = useState<string>("#394cfa");
  const typedSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    switch (theme) {
      case "blue":
        setCurrentColor("#394cfa");
        break;
      case "red":
        setCurrentColor("#c61b05");
        break;
      case "yellow":
        setCurrentColor("yellow");
        break;
      case "green":
        setCurrentColor("green");
        break;
      default:
        setCurrentColor("#394cfa");
        break;
    }
  }, [theme]);

  useEffect(() => {
    function typeText() {
      if (charIndex < totype[totypeIndex].length) {
        if (typedSpanRef.current) {
          typedSpanRef.current.textContent +=
            totype[totypeIndex].charAt(charIndex);
        }
        charIndex++;
        setTimeout(typeText, delayTyping_char);
      } else {
        setTimeout(eraseText, delayTyping_text);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        if (typedSpanRef.current) {
          typedSpanRef.current.textContent = totype[totypeIndex].substring(
            0,
            charIndex - 1
          );
        }
        charIndex = charIndex - 1;
        setTimeout(eraseText, delayErasing_text);
      } else {
        totypeIndex++;
        if (totypeIndex >= totype.length) totypeIndex = 0;
        setTimeout(typeText, delayTyping_text);
      }
    }

    setTimeout(typeText, delayTyping_text);
  }, []);
  useEffect(() => {
    // Dynamically inject @keyframes into the DOM
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes blinker {
        0% {
          background-color: ${currentColor};
        }
        50% {
          background-color: transparent;
        }
        100% {
          background-color: ${currentColor};
        }
      }
    `;

    // Remove any existing blinker rule (if re-rendered)
    Array.from(styleSheet.cssRules).forEach((rule, index) => {
      if (rule instanceof CSSKeyframesRule && rule.name === "blinker") {
        styleSheet.deleteRule(index);
      }
    });

    // Add new blinker keyframes
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, [currentColor]);

  return (
    <div className="wrapper">
      <h1 className="effect-wrapper" style={{ marginTop: "30px" }}>
        I am <br />
        <span
          id="typed"
          ref={typedSpanRef}
          style={{ color: currentColor }}
        ></span>
        <span
          className="cursor"
          style={{
            animation: "blinker 800ms infinite",
          }}
        >
          &nbsp;
        </span>
      </h1>
    </div>
  );
};

export default HeroHeading;
