"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ThemeSwitch = () => {
  // Initialize state from a function to avoid running on the server.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false; // Default to light mode on the server
    }
    return document.documentElement.classList.contains('dark');
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);


  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  if (!isMounted) {
    // Render a placeholder or null on the server and initial client render
    return <div style={{ width: '3.5em', height: '2em' }} />;
  }

  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(var(--card));
    transition: .4s;
    border-radius: 30px;
    border: 1px solid hsl(var(--border));
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: #223243;
    box-shadow: inset 2px -2px 0 1.8px #fff;
    transition: .4s;
  }

  .switch input:checked + .slider {
     background-color: hsl(var(--card));
  }

  .switch input:checked + .slider:before {
    background-color: yellow;
    box-shadow: none;
    transform: translateX(1.5em);
  }
`;

export default ThemeSwitch;
