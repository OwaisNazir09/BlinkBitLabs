import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
          }}
        />

        <div className="hero-overlay" />

        <div
          className="grid-pattern"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${
              mousePosition.y * 0.2
            }px)`,
          }}
        />

        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div
          className="floating-circle circle1"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${
              mousePosition.y * 1.5
            }px)`,
          }}
        />
        <div
          className="floating-circle circle2"
          style={{
            transform: `translate(${mousePosition.x * -1}px, ${
              mousePosition.y * -1
            }px)`,
          }}
        />
        <div className="floating-circle circle3" />

        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center text-white">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Now Building The Future</span>
            </div>

            <h1 className="hero-title">BlinkBit Labs</h1>

            <p className="hero-subtitle">
              Innovation at the speed of a blink{" "}
              <span className="highlight"> 💡</span>
            </p>

            <p className="hero-description">
              We design and build modern web, software, and digital solutions
              that empower businesses to grow faster in the connected world.
            </p>

            <div className="btn-group-hero d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button
                className="btn btn-hero-primary"
                onClick={() => navigate("/contact")}
              >
                <span>Get Started</span>
              </button>
              {/* <button className="btn btn-hero-secondary">
                Our Projects
                <span className="arrow">→</span>
              </button> */}
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-box">
            <div className="scroll-indicator-dot"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
