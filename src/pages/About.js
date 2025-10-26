import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaBullseye,
  FaRocket,
  FaLaptopCode,
  FaBolt,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaRobot,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaUsersCog,
  FaBullseye as FaTarget,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0) scale(1)";
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const corePillars = [
    {
      icon: <FaUsers />,
      title: "Who We Are",
      description:
        "A team of passionate developers, designers, and creative thinkers committed to delivering high-quality software solutions.",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      delay: "0.1s",
    },
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      description:
        "To empower startups, enterprises, and individuals by providing reliable, scalable, and modern technology solutions.",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      delay: "0.2s",
    },
    {
      icon: <FaRocket />,
      title: "Our Vision",
      description:
        "To become a global leader in digital innovation by building powerful, user-friendly, and future-ready solutions.",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      delay: "0.3s",
    },
  ];

  const services = [
    {
      title: "Web Development",
      icon: <FaLaptopCode />,
      desc: "Building responsive, modern websites and web apps with cutting-edge technologies",
      features: ["React & Next.js", "Full-stack Solutions", "SEO Optimized"],
      color: "#667eea",
    },
    {
      title: "Software Development",
      icon: <FaBolt />,
      desc: "Creating tailored software solutions for business growth and efficiency",
      features: ["Custom Applications", "API Integration", "Database Design"],
      color: "#f093fb",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt />,
      desc: "Delivering seamless, high-performing mobile experiences for iOS & Android",
      features: ["Cross-platform", "Native Performance", "Cloud Integration"],
      color: "#4facfe",
    },
    {
      title: "Cloud Solutions",
      icon: <FaCloud />,
      desc: "Deploying scalable infrastructure for modern businesses on AWS, Azure & GCP",
      features: ["DevOps", "Auto-scaling", "Security First"],
      color: "#fa709a",
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush />,
      desc: "Designing clean, intuitive, and engaging interfaces that users love",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "#fee140",
    },
    {
      title: "AI & Automation",
      icon: <FaRobot />,
      desc: "Implementing smart systems for next-gen operations and intelligent workflows",
      features: ["Machine Learning", "Process Automation", "Chatbots"],
      color: "#30cfd0",
    },
  ];

  const coreValues = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      desc: "Always explore new horizons",
      color: "#ffd700",
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      desc: "Transparency matters most",
      color: "#4facfe",
    },
    {
      icon: <FaStar />,
      title: "Quality",
      desc: "Excellence in every line",
      color: "#f093fb",
    },
    {
      icon: <FaUsersCog />,
      title: "Collaboration",
      desc: "Teamwork makes dreams work",
      color: "#667eea",
    },
    {
      icon: <FaTarget />,
      title: "Customer Focus",
      desc: "Your success equals ours",
      color: "#fa709a",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#fdfdfd",
        color: "#111",
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.2) 0%, transparent 50%), #0a0a0a",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
          <div
            className="position-absolute"
            style={{
              top: "10%",
              left: "10%",
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)",
              borderRadius: "50%",
              animation: "float 8s ease-in-out infinite",
              filter: "blur(60px)",
            }}
          />
          <div
            className="position-absolute"
            style={{
              top: "60%",
              right: "10%",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(240, 147, 251, 0.3) 0%, transparent 70%)",
              borderRadius: "50%",
              animation: "float 10s ease-in-out infinite reverse",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Floating Icons */}
        <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
          <FaRocket
            className="position-absolute text-white"
            style={{
              top: "15%",
              left: "12%",
              fontSize: "2.5rem",
              opacity: 0.2,
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <FaLightbulb
            className="position-absolute"
            style={{
              top: "25%",
              right: "15%",
              fontSize: "3rem",
              color: "#ffd700",
              opacity: 0.2,
              animation: "float 5s ease-in-out infinite reverse",
            }}
          />
          <FaLaptopCode
            className="position-absolute"
            style={{
              bottom: "30%",
              left: "18%",
              fontSize: "2rem",
              color: "#4facfe",
              opacity: 0.2,
              animation: "float 7s ease-in-out infinite",
            }}
          />
          <FaBolt
            className="position-absolute"
            style={{
              bottom: "20%",
              right: "12%",
              fontSize: "2.2rem",
              color: "#f093fb",
              opacity: 0.2,
              animation: "float 4s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* Hero Content */}
        <div
          className="container text-center position-relative"
          style={{ zIndex: 2 }}
        >
          <div
            className="animate-on-scroll"
            style={{
              animation: "fadeInUp 1s ease-out",
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <h1
              className="display-2 fw-bold mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #fff 0%, #667eea 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-2px",
              }}
            >
              About BlinkBit Labs
            </h1>
            <p
              className="lead mb-5"
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                fontSize: "1.4rem",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.8",
              }}
            >
              We create intelligent, efficient, and user-focused digital
              experiences that transform businesses and delight users.
            </p>
            <a
              href="#services"
              className="btn btn-lg px-5 py-3 position-relative"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                borderRadius: "50px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "1.1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Explore Our Work <FaArrowRight className="ms-2" />
            </a>
          </div>
        </div>
      </section>
      <section
        className="py-5 position-relative"
        style={{ background: "#fdfdfd" }}
      >
        <div className="container">
          <h2
            className="text-center fw-bold mb-5 animate-on-scroll"
            style={{ fontSize: "3rem", color: "#111" }}
          >
            Our <span className="gradient-text">Core Pillars</span>
          </h2>
          <div className="row g-4">
            {corePillars.map((p, i) => (
              <div key={i} className="col-md-4">
                <div
                  className="animate-on-scroll hover-lift h-100"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                    transitionDelay: p.delay,
                  }}
                >
                  <div
                    className="glass-card p-5 rounded-4 h-100"
                    style={{
                      borderLeft: `4px solid transparent`,
                      borderImage: p.color,
                      borderImageSlice: 1,
                    }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: p.color,
                        color: "#fff",
                        fontSize: "2rem",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {p.icon}
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: "#111" }}>
                      {p.title}
                    </h4>
                    <p className="text-dark-50 mb-0">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5" style={{ background: "#f7f7f7" }}>
        <div className="container">
          <h2
            className="text-center fw-bold mb-5 animate-on-scroll"
            style={{ fontSize: "3rem", color: "#111" }}
          >
            What We <span className="gradient-text">Do Best</span>
          </h2>
          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div
                  className="animate-on-scroll hover-lift h-100"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="glass-card p-4 rounded-4 h-100">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: "70px",
                        height: "70px",
                        background: s.color,
                        color: "#fff",
                        fontSize: "2rem",
                      }}
                    >
                      {s.icon}
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: "#111" }}>
                      {s.title}
                    </h5>
                    <p className="text-dark-50 mb-4">{s.desc}</p>
                    <div className="d-flex flex-column gap-2">
                      {s.features.map((feature, idx) => (
                        <div key={idx} className="d-flex align-items-center">
                          <FaCheck
                            className="me-2"
                            style={{ color: s.color, fontSize: "0.9rem" }}
                          />
                          <small className="text-dark-50">{feature}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5" style={{ background: "#fdfdfd" }}>
        <div className="container">
          <h2
            className="text-center fw-bold mb-5 animate-on-scroll"
            style={{ fontSize: "3rem", color: "#111" }}
          >
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <div className="row g-4 justify-content-center">
            {coreValues.map((v, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2">
                <div
                  className="text-center animate-on-scroll"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      background: v.color,
                      color: "#fff",
                      fontSize: "2rem",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      boxShadow: `0 10px 30px ${v.color}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1.15) rotate(5deg)";
                      e.currentTarget.style.boxShadow = `0 15px 40px ${v.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                      e.currentTarget.style.boxShadow = `0 10px 30px ${v.color}40`;
                    }}
                  >
                    {v.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#111" }}>
                    {v.title}
                  </h5>
                  <p className="small text-dark-50">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 position-relative"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          overflow: "hidden",
        }}
      >
        <div
          className="container text-center position-relative"
          style={{ zIndex: 2 }}
        >
          <h2
            className="display-4 fw-bold mb-4 animate-on-scroll"
            style={{ color: "#fff" }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className="lead mb-4 animate-on-scroll"
            style={{ maxWidth: "600px", margin: "0 auto", color: "#f0f0f0" }}
          >
            Let's build something amazing together. Get in touch with our team
            today.
          </p>
          <button
            className="btn btn-light btn-lg px-5 py-3 animate-on-scroll"
            style={{
              borderRadius: "50px",
              fontWeight: "600",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Us <FaArrowRight className="ms-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
