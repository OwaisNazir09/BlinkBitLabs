import React from "react";
import "../styles/about.css";
import FounderImg from "../assets/images/founder.jpg";
import CoFounderImg from "../assets/images/cofounder.jpg";
import { FaRocket, FaLightbulb, FaCode, FaCog } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="about-section py-5">
      <div className="floating-icons">
        <FaRocket className="icon rocket" />
        <FaLightbulb className="icon lightbulb" />
        <FaCode className="icon code" />
        <FaCog className="icon cog" />
      </div>

      <div className="container text-center">
        <h2 className="contact-title display-4 fw-bold mb-3">
          About BlinkBit Labs
        </h2>
        <p className="about-description mb-5">
          Founded in <strong>2025</strong>, BlinkBit Labs is a forward-thinking
          tech startup delivering innovative digital solutions that redefine
          modern technology.
        </p>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4 mb-4">
            <div className="founder-card">
              <img
                src={FounderImg}
                alt="Owais Nazir"
                className="founder-img img-fluid rounded-circle mb-3"
              />
              <h4>Owais Nazir</h4>
              <p className="role">Founder & Tech Lead</p>
              <div className="card-back">
                Tech visionary and full-stack developer driving innovation
                through cutting-edge software solutions and robust architecture.
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 mb-4">
            <div className="founder-card">
              <img
                src={CoFounderImg}
                alt="Shehzzad Dar"
                className="founder-img img-fluid rounded-circle mb-3"
              />
              <h4>Shehzzad Dar</h4>
              <p className="role">Co-Founder & Sales Manager</p>
              <div className="card-back">
                Sales strategist and business development expert building strong
                client relationships and driving market growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
