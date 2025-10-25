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

        {/* Timeline */}
        {/* <div className="row justify-content-center mb-5">
          <div className="col-6 col-md-3 milestone mb-3">
            <span className="year">2025</span>
            <p>Company Founded</p>
          </div>
          <div className="col-6 col-md-3 milestone mb-3">
            <span className="year">2026</span>
            <p>First Product Launched</p>
          </div>
          <div className="col-6 col-md-3 milestone mb-3">
            <span className="year">2027</span>
            <p>Reached 100k Users</p>
          </div>
        </div> */}

        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4 mb-4">
            <div className="founder-card">
              <div className="card-front">
                <img
                  src={FounderImg}
                  alt="Owais Nazir"
                  className="founder-img img-fluid rounded-circle mb-3"
                />
                <h4>Owais Nazir</h4>
                <p className="role">Founder</p>
              </div>
              <div className="card-back">
                <p>
                  Visionary entrepreneur leading BlinkBit Labs with a focus on
                  web & software innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 mb-4">
            <div className="founder-card">
              <div className="card-front">
                <img
                  src={CoFounderImg}
                  alt="Shehzzad Dar"
                  className="founder-img img-fluid rounded-circle mb-3"
                />
                <h4>Shehzzad Dar</h4>
                <p className="role">Co-Founder</p>
              </div>
              <div className="card-back">
                <p>
                  Frontend enthusiast creating seamless user experiences with
                  modern design & technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
