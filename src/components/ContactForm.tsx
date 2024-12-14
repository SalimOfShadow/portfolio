import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import * as React from "react";
import {
  darkThemeStyles,
  themeShadows,
  themeStyles,
  useTheme,
} from "../contexts/ThemeContext";
import { color } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="contact-section">
      <div
        className="contact-info"
        style={{ boxShadow: `0 8px 32px 0 ${themeShadows[theme]}` }}
      >
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a
            href="mailto:salimofshadowkof@gmail.com"
            style={{ color: themeStyles[theme] || undefined }}
          >
            email
          </a>
          . 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                style={{ boxShadow: `0 8px 32px 0 ${darkThemeStyles[theme]}` }}
              >
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>

        <div>
          <p className="contact-links">
            <MdEmail />
            salimofshadowkof@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Rotterdam (Netherlands)
          </p>
        </div>
      </div>
      <div className="contact-form">
        <form
          name="contact"
          data-netlify="true"
          style={{ boxShadow: `0 8px 32px 0 ${themeShadows[theme]}` }}
        >
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="text" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="theme-submit"
            style={{
              backgroundColor: isHovered ? themeStyles[theme] : undefined, // Default background color
              boxShadow: `0 8px 32px 0 ${themeShadows[theme]}`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
