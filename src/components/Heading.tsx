import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
const Heading = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="heading hero-text">
      <h1>
        &lt;
        {props.firstWord}
        <span className={theme} style={{transition: "0.2s"}}>{props.secondWord}/&gt;</span>
      </h1>
    </div>
  );
};

Heading.propTypes = {
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string.isRequired,
};

export default Heading;
