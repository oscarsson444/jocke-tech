"use client";
import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const numParticles = 100; // Adjust as needed

    const createParticles = () => {
      if (!containerRef.current) return;

      for (let i = 1; i <= numParticles; i++) {
        const circleContainer = document.createElement("div");
        circleContainer.classList.add("circle-container");

        const circle = document.createElement("div");
        circle.classList.add("circle");
        circleContainer.appendChild(circle);
        containerRef.current.appendChild(circleContainer);

        const circleSize = Math.floor(Math.random() * 10) + 1; // Random size up to 10px
        const startPositionY = Math.floor(Math.random() * 10) + 100;
        const moveDuration = 15000 + Math.floor(Math.random() * 5000);
        const animationDelay = Math.floor(Math.random() * 11000);
        const circleAnimationDelay = Math.floor(Math.random() * 4000);

        circleContainer.style.width = `${circleSize}px`;
        circleContainer.style.height = `${circleSize}px`;
        circleContainer.style.animationName = `move-frames-${i}`;
        circleContainer.style.animationDuration = `${moveDuration}ms`;
        circleContainer.style.animationDelay = `${animationDelay}ms`;

        circle.style.animationDelay = `${circleAnimationDelay}ms`;

        // Create keyframes dynamically
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `@keyframes move-frames-${i} {
          from {
            transform: translate3d(${Math.floor(
              Math.random() * 100
            )}vw, ${startPositionY}vh, 0);
          }
          to {
            transform: translate3d(${Math.floor(Math.random() * 100)}vw, ${
          -startPositionY - Math.floor(Math.random() * 30)
        }vh, 0);
          }
        }`;
        document.head.appendChild(styleSheet);
      }
    };

    createParticles();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      const styles = document.querySelectorAll("style");
      styles.forEach((style) => {
        if (style.innerText.includes("move-frames")) {
          style.remove();
        }
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="relative w-full h-full" ref={containerRef}></div>
    </div>
  );
};

export default ParticleBackground;
