"use client";

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="moon">
          <div className="crater crater1" />
          <div className="crater crater2" />
          <div className="crater crater3" />
          <div className="crater crater4" />
          <div className="crater crater5" />
          <div className="shadow" />
          <div className="eye eye-l" />
          <div className="eye eye-r" />
          <div className="mouth" />
          <div className="blush blush1" />
          <div className="blush blush2" />
        </div>
        <div className="orbit">
          <div className="rocket">
            <div className="window" />
            <div className="fire" />
            <div className="gas" />
            <div className="gas" />
            <div className="gas" />
            <div className="gas" />
            <div className="gas" />
            <div className="gas" />
            <div className="gas" />
          </div>
        </div>
        <div className="curve">
          <svg viewBox="0 0 500 500">
            <path id="loading" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width={500}>
              <textPath xlinkHref="#loading">...loading...</textPath>
            </text>
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    transform: scale(0.6);
  }

  .moon {
    background-color: #39beff;
    height: 170px;
    width: 170px;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }

  .crater {
    background-color: #31b4ff;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: relative;
  }
  .crater:before {
    content: "";
    position: absolute;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    box-shadow: -5px 0 0 2px #1ca4f9;
    top: 2px;
    left: 7px;
  }
  .crater1 {
    top: 27px;
    left: 90px;
    transform: scale(0.9);
  }
  .crater2 {
    bottom: 15px;
    left: 61px;
    transform: scale(0.6);
  }
  .crater3 {
    left: 15px;
    transform: scale(0.75);
  }
  .crater4 {
    left: 107px;
    top: 32px;
    transform: scale(1.18);
  }
  .crater5 {
    left: 33px;
    bottom: 4px;
    transform: scale(0.65);
  }

  .shadow {
    height: 190px;
    width: 190px;
    box-shadow: 21px 0 0 5px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    position: relative;
    bottom: 157.5px;
    right: 46px;
  }

  .eye {
    background-color: #161616;
    height: 12px;
    width: 12px;
    position: relative;
    border-radius: 50%;
  }
  .eye-l {
    bottom: 255px;
    left: 59px;
  }
  .eye-r {
    bottom: 267px;
    left: 101px;
  }

  .mouth {
    height: 5px;
    width: 10px;
    border: 3px solid #161616;
    position: relative;
    bottom: 262px;
    left: 79px;
    border-top: none;
    border-radius: 0 0 10px 10px;
  }

  .blush {
    background-color: #1ca4f9;
    height: 7.5px;
    width: 7.5px;
    position: relative;
    border-radius: 50%;
  }
  .blush1 {
    bottom: 273px;
    left: 50px;
  }
  .blush2 {
    bottom: 281px;
    left: 115px;
  }

  .orbit {
    height: 280px;
    width: 280px;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    animation: spin 10s infinite linear;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .rocket {
    background-color: #fafcf7;
    height: 50px;
    width: 25px;
    border-radius: 50% 50% 0 0;
    position: relative;
    left: -11px;
    top: 112px;
    overflow: visible;
  }

  .rocket:before {
    content: "";
    position: absolute;
    background-color: #39beff;
    height: 20px;
    width: 55px;
    border-radius: 50% 50% 0 0;
    z-index: -1;
    right: -15px;
    bottom: 0;
  }

  .rocket:after {
    content: "";
    position: absolute;
    background-color: #39beff;
    height: 4px;
    width: 15px;
    border-radius: 0 0 2px 2px;
    bottom: -4px;
    left: 4.3px;
  }

  .rocket .fire {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 30px;
    background: radial-gradient(
      ellipse at center,
      #ffec85 0%,
      #ffae34 40%,
      #ec760c 70%,
      #cd4606 90%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 50%;
    animation: flame 0.3s infinite alternate;
    z-index: -1;
  }

  @keyframes flame {
    0% {
      transform: translateX(-50%) scaleY(1);
      opacity: 0.9;
    }
    100% {
      transform: translateX(-50%) scaleY(1.4);
      opacity: 0.5;
    }
  }

  .rocket .gas {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: rgba(200, 200, 200, 0.6);
    border-radius: 50%;
    animation: gas 1.5s infinite ease-out;
  }
  .rocket .gas:nth-child(3) {
    animation-delay: 0.3s;
    left: 40%;
  }
  .rocket .gas:nth-child(4) {
    animation-delay: 0.6s;
    left: 60%;
  }

  @keyframes gas {
    0% {
      transform: translateX(-50%) scale(0.5);
      opacity: 0.8;
    }
    100% {
      transform: translateX(-50%) translateY(40px) scale(1.8);
      opacity: 0;
    }
  }

  .window {
    background-color: #151845;
    height: 10px;
    width: 10px;
    border: 2px solid #b8d2ec;
    border-radius: 50%;
    position: relative;
    top: 17px;
    left: 5px;
  }

  .curve {
    width: 100%;
    height: 100%;
    position: absolute;
    animation: rotate 10s linear infinite;
    fill: transparent;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .curve text {
    letter-spacing: 20px;
    text-transform: uppercase;
    font:
      1.5em "Fira Sans",
      sans-serif;
    fill: #95d5ff;
    filter: drop-shadow(0 2px 8px rgb(21, 117, 207));
  }
`;

export default Loader;
