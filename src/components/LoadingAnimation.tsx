import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <ModalOverlay>
      {/* Morphing geometric shapes */}
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>

      {/* Matrix-like falling code */}
      <div className="code-stream">01010101</div>
      <div className="code-stream">React</div>
      <div className="code-stream">Web3</div>
      <div className="code-stream">const</div>
      <div className="code-stream">function</div>

      {/* Pulsing energy rings */}
      <div className="energy-ring"></div>
      <div className="energy-ring"></div>
      <div className="energy-ring"></div>

      <LoaderContainer>
        {/* Pyramid Loader */}
        <PyramidWrapper>
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1" />
              <span className="side side2" />
              <span className="side side3" />
              <span className="side side4" />
              <span className="shadow" />
            </div>
          </div>
        </PyramidWrapper>

        {/* Carousel Loader */}
        <CarouselWrapper>
          <div className="loader">
            <div className="container">
              <div className="carousel">
                <div className="love" />
                <div className="love" />
                <div className="love" />
                <div className="love" />
                <div className="love" />
                <div className="love" />
                <div className="love" />
              </div>
            </div>
            <div className="container">
              <div className="carousel">
                <div className="death" />
                <div className="death" />
                <div className="death" />
                <div className="death" />
                <div className="death" />
                <div className="death" />
                <div className="death" />
              </div>
            </div>
            <div className="container">
              <div className="carousel">
                <div className="robots" />
                <div className="robots" />
                <div className="robots" />
                <div className="robots" />
                <div className="robots" />
                <div className="robots" />
                <div className="robots" />
              </div>
            </div>
          </div>
        </CarouselWrapper>
      </LoaderContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom right, #ffffff, #f9fafb);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to bottom right, #111827, #1f2937);
  }

  /* Also support manual dark class toggle */
  .dark & {
    background: linear-gradient(to bottom right, #111827, #1f2937);
  }

  /* Animated gradient orbs */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    animation: gradientShift 12s ease-in-out infinite;
  }

  /* Floating geometric shapes */
  .shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2));
    animation: morph 8s ease-in-out infinite;
  }

  .shape:nth-child(1) {
    width: 80px;
    height: 80px;
    top: 15%;
    left: 20%;
    animation-delay: 0s;
  }

  .shape:nth-child(2) {
    width: 60px;
    height: 60px;
    top: 70%;
    right: 15%;
    animation-delay: 2s;
    background: linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
  }

  .shape:nth-child(3) {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 70%;
    animation-delay: 4s;
    background: linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2));
  }

  /* Matrix-like falling code effect */
  .code-stream {
    position: absolute;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: rgba(59, 130, 246, 0.3);
    white-space: nowrap;
    animation: fall 6s linear infinite;
  }

  .code-stream:nth-child(4) { left: 10%; animation-delay: 0s; }
  .code-stream:nth-child(5) { left: 30%; animation-delay: 1.5s; }
  .code-stream:nth-child(6) { left: 50%; animation-delay: 3s; }
  .code-stream:nth-child(7) { left: 70%; animation-delay: 4.5s; }
  .code-stream:nth-child(8) { left: 90%; animation-delay: 2s; }

  /* Pulsing energy rings */
  .energy-ring {
    position: absolute;
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 50%;
    animation: pulseRing 4s ease-in-out infinite;
  }

  .energy-ring:nth-child(9) {
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 0s;
  }

  .energy-ring:nth-child(10) {
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 1s;
    border-color: rgba(6, 182, 212, 0.2);
  }

  .energy-ring:nth-child(11) {
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 2s;
    border-color: rgba(139, 92, 246, 0.2);
  }

  @keyframes gradientShift {
    0%, 100% {
      transform: rotate(0deg) scale(1);
      opacity: 0.8;
    }
    50% {
      transform: rotate(180deg) scale(1.1);
      opacity: 1;
    }
  }

  @keyframes morph {
    0%, 100% {
      border-radius: 50%;
      transform: rotate(0deg) scale(1);
    }
    25% {
      border-radius: 20% 80% 60% 40%;
      transform: rotate(90deg) scale(1.1);
    }
    50% {
      border-radius: 80% 20% 40% 60%;
      transform: rotate(180deg) scale(0.9);
    }
    75% {
      border-radius: 40% 60% 80% 20%;
      transform: rotate(270deg) scale(1.05);
    }
  }

  @keyframes fall {
    0% {
      top: -50px;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: 100vh;
      opacity: 0;
    }
  }

  @keyframes pulseRing {
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .shape {
      display: none; /* Hide floating shapes on mobile */
    }

    .code-stream {
      display: none; /* Hide falling code on mobile */
    }

    .energy-ring {
      display: none; /* Hide energy rings on mobile */
    }
  }

  @media (max-width: 640px) {
    /* Adjust pyramid loader size for mobile */
    .pyramid-loader {
      width: 200px !important;
      height: 200px !important;
    }

    .pyramid-loader .wrapper .side {
      width: 50px !important;
      height: 50px !important;
    }

    /* Adjust carousel loader size for mobile */
    .loader {
      width: 150px !important;
      height: 45px !important;
    }

    .container {
      height: 150px !important;
    }

    .love, .death, .robots {
      width: 20px !important;
      height: 20px !important;
    }

    .love::before, .love::after {
      width: 20px !important;
      height: 20px !important;
    }

    .love::before {
      left: -12px !important;
    }

    .love::after {
      top: -12px !important;
    }

    .death:after {
      height: 45px !important;
      border-left: 8px solid rgb(30, 184, 255) !important;
    }

    .death:before {
      height: 42px !important;
      border-left: 8px solid red !important;
    }

    .robots {
      height: 40px !important;
      padding: 6px !important;
    }

    .robots::after, .robots::before {
      width: 8px !important;
      height: 8px !important;
    }
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const PyramidWrapper = styled.div`
  .pyramid-loader {
    position: relative;
    width: 300px;
    height: 300px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .pyramid-loader .wrapper .side {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
  }

  .pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
  }

  .pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
  }

  .pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
  }

  .pyramid-loader .wrapper .shadow {
    width: 60px;
    height: 60px;
    background: #8b5ad5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
  }
`;

const CarouselWrapper = styled.div`
  .loader {
    display: flex;
    position: relative;
    justify-items: center;
    align-items: center;
    gap: 1rem;
    height: 55px;
    width: 200px;
    overflow: hidden;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 200px;
    position: relative;
    align-items: center;
  }

  .carousel {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    position: absolute;
    width: 100%;
    transform-origin: center;
    animation-delay: 2s;
  }

  .loader .container:nth-child(3) {
    justify-content: flex-start;
    justify-items: flex-start;
    animation: scroll-up 4s infinite ease-in-out;
    animation-delay: 3s;
  }

  .loader .container:nth-child(2) {
    justify-content: flex-end;
    justify-items: flex-end;
    animation: scroll-down 4s infinite ease-in-out;
    animation-delay: 3s;
  }

  .loader .container:nth-child(1) {
    justify-content: flex-end;
    justify-items: flex-end;
    animation: scroll-down 3s infinite ease-in-out;
    animation-delay: 3s;
  }

  .love {
    background: rgb(0, 195, 255);
    display: flex;
    width: 30px;
    height: 30px;
    position: relative;
    align-items: center;
    justify-content: center;
    left: 8px;
    margin: 0.8rem 4px;
    transform: rotate(45deg);
    animation-delay: 2s;
  }

  .love::before,
  .love::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgb(0, 217, 255);
  }

  .love::before {
    left: -16px;
  }

  .love::after {
    top: -16px;
  }

  .death {
    display: flex;
    width: 100%;
    height: 55px;
    position: relative;
    align-items: center;
    justify-content: center;
    animation: rotation 3s infinite ease-in-out;
    animation-delay: 1s;
  }

  .death:after {
    content: "";
    height: 63px;
    position: absolute;
    border-left: 12px solid rgb(30, 184, 255);
    transform: rotate(45deg);
    border-radius: 8px;
    top: -4px;
  }

  .death:before {
    content: "";
    height: 60px;
    position: absolute;
    border-left: 12px solid red;
    transform: rotate(-45deg);
  }

  .loader:hover {
    animation: none;
  }

  .robots {
    display: flex;
    width: 100%;
    height: 55px;
    justify-content: space-between;
    background-color: #05e6ff;
    border-radius: 0 8px 8px;
    padding: 8px;
    animation-delay: 5s;
  }

  .robots::after {
    content: "";
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    background-color: #f70b0b;
    border-radius: 50%;
    animation-delay: 2s;
    animation: blink 0.5s 2 forwards;
  }

  .robots::before {
    content: "";
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    background-color: #ff0000;
    border-radius: 50%;
    animation-delay: 2s;
    animation: blink 0.5s 2 forwards;
  }

  @keyframes scroll-up {
    0% {
      transform: translateY(0);
      filter: blur(0);
    }

    30% {
      transform: translateY(-150%);
      filter: blur(10px);
    }

    60% {
      transform: translateY(0);
      filter: blur(0px);
    }
  }

  @keyframes scroll-down {
    0% {
      transform: translateY(0);
      filter: blur(0);
    }

    30% {
      transform: translateY(150%);
      filter: blur(10px);
    }

    60% {
      transform: translateY(0);
      filter: blur(0px);
    }
  }

  @keyframes rotation {
    20%,
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes blink {
    0% {
      height: 0;
    }

    20% {
      height: 12px;
    }

    100% {
      height: 12px;
    }
  }
`;

export default LoadingAnimation;
