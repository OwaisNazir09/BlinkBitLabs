import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaPhone,
  FaGlobe,
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: ["blinkbitlabs@gmail.com", "support@blinkbit.com"],
      action: "mailto:blinkbitlabs@gmail.com",
      color: "#667eea",
      delay: "0.1s",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: ["Based in India", "Serving clients worldwide"],
      action: "#location",
      color: "#f093fb",
      delay: "0.2s",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "Response within 24h"],
      action: "#schedule",
      color: "#4facfe",
      delay: "0.3s",
    },
  ];

  const quickLinks = [
    { icon: <FaPhone />, text: "+91 XXX XXX XXXX", color: "#fa709a" },
    { icon: <FaGlobe />, text: "www.blinkbitlabs.com", color: "#30cfd0" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#f9f9f9",
        color: "#111",
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
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
        .form-input {
          width: 100%;
          padding: 15px 20px;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          color: #111;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }
        .form-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 1);
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.15);
        }
        .form-input::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
        .form-textarea {
          resize: none;
          min-height: 150px;
        }
        .form-label {
          color: rgba(0, 0, 0, 0.8);
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
        }
      `}</style>

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
          <FaEnvelope
            className="position-absolute"
            style={{
              top: "15%",
              left: "12%",
              fontSize: "2.5rem",
              color: "#667eea",
              opacity: 0.2,
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <FaPaperPlane
            className="position-absolute"
            style={{
              top: "25%",
              right: "15%",
              fontSize: "3rem",
              color: "#f093fb",
              opacity: 0.2,
              animation: "float 5s ease-in-out infinite reverse",
            }}
          />
          <FaPhone
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
        </div>

        {/* Hero Content */}
        <div
          className="container text-center position-relative"
          style={{ zIndex: 2 }}
        >
          <div
            className="d-inline-block mb-4 px-4 py-2 glass-card rounded-pill"
            style={{
              animation: "fadeInDown 0.8s ease-out",
            }}
          >
            <span className="text-dark fw-medium">📬 Get In Touch</span>
          </div>

          <h1
            className="display-2 fw-bold mb-4"
            style={{
              background:
                "linear-gradient(135deg, #fff 0%, #667eea 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-2px",
              animation: "fadeInUp 0.8s ease-out 0.3s both",
            }}
          >
            Let's Build Something Amazing
          </h1>

          <p
            className="lead mb-5"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.3rem",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: "1.8",
              animation: "fadeInUp 0.8s ease-out 0.6s both",
            }}
          >
            Ready to transform your ideas into reality? Reach out to discuss
            your project, ask questions, or explore how we can collaborate.
          </p>

          {/* Quick Links */}
          <div
            className="d-flex gap-4 justify-content-center flex-wrap"
            style={{ animation: "fadeInUp 0.8s ease-out 0.9s both" }}
          >
            {quickLinks.map((link, i) => (
              <div
                key={i}
                className="glass-card px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span style={{ color: link.color, fontSize: "1.2rem" }}>
                  {link.icon}
                </span>
                <span className="text-dark">{link.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Methods */}
      <section className="py-5" style={{ background: "#f9f9f9" }}>
        <div className="container">
          <h2
            className="text-center fw-bold mb-5 animate-on-scroll"
            style={{ fontSize: "3rem" }}
          >
            <span className="text-black">Contact Methods</span>
          </h2>
          <div className="row g-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="animate-on-scroll hover-lift h-100"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                    transitionDelay: method.delay,
                  }}
                >
                  <div className="glass-card p-5 rounded-4 h-100 text-center">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: method.color,
                        color: "#fff",
                        fontSize: "2rem",
                        boxShadow: `0 10px 30px ${method.color}40`,
                      }}
                    >
                      {method.icon}
                    </div>
                    <h4 className="fw-bold mb-3">{method.title}</h4>
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-dark-50 mb-2">
                        {detail}
                      </p>
                    ))}
                    <a
                      href={method.action}
                      className="btn btn-sm mt-3 px-4 py-2"
                      style={{
                        background: method.color,
                        border: "none",
                        borderRadius: "50px",
                        color: "#fff",
                        fontWeight: "600",
                        transition: "transform 0.3s ease",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      Contact Now{" "}
                      <FaArrowRight
                        className="ms-2"
                        style={{ fontSize: "0.8rem" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3 animate-on-scroll">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="lead text-dark-50 animate-on-scroll">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              <div
                className="glass-card p-5 rounded-4 animate-on-scroll"
                style={{ opacity: 0, transform: "translateY(30px)" }}
              >
                <form onSubmit={handleSubmit} className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input form-textarea"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-3 rounded-pill fw-bold"
                    >
                      Send Message <FaPaperPlane className="ms-2" />
                    </button>
                  </div>
                </form>
                {isSubmitted && (
                  <p
                    className="mt-3 text-center text-success fw-bold"
                    style={{ fontSize: "1rem" }}
                  >
                    Message sent successfully!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
