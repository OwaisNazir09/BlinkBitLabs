import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaPhone,
  FaGlobe,
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
    { icon: <FaPhone />, text: "+91 7006968285", color: "#fa709a" },
    { icon: <FaGlobe />, text: "www.blinkbitlabs.com", color: "#30cfd0" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://blinkbitlabscrm.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      } else {
        alert(" Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(" Network error — please check your connection.");
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#f9f9f9",
        color: "#111",
      }}
    >
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
            <span className="text-black">
              {" "}
              <i className="fas fa-envelope me-2"></i>Contact Methods
            </span>
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
                    {/* <a
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
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
              <div className="row">
                {/* Form Card */}
                <div className="col-lg-8 mb-4">
                  <div className="contact-form-card p-4 h-100">
                    <h4 className="form-title mb-4">
                      Send Us a <span className="gradient-text">Message</span>
                    </h4>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="name" className="form-label">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email" className="form-label">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                          Subject *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Your Message *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry..."
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 contact-submit-btn"
                      >
                        <i className="fas fa-paper-plane me-2"></i> Send Message
                      </button>
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

                {/* Sidebar Info */}
                <div className="col-lg-4 mb-4">
                  <div className="contact-sidebar p-4 h-100">
                    <h5 className="sidebar-title mb-4">Why Choose Us?</h5>

                    <div className="feature-item d-flex mb-4">
                      <div className="feature-icon me-3">
                        <i className="fas fa-bolt"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold">Fast Response</h6>
                        <p className="text-muted small">
                          We typically reply within 2-4 hours during business
                          days.
                        </p>
                      </div>
                    </div>

                    <div className="feature-item d-flex mb-4">
                      <div className="feature-icon me-3">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold">Secure & Confidential</h6>
                        <p className="text-muted small">
                          Your information is safe with us. We respect your
                          privacy.
                        </p>
                      </div>
                    </div>

                    <div className="feature-item d-flex mb-4">
                      <div className="feature-icon me-3">
                        <i className="fas fa-headset"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold">24/7 Support</h6>
                        <p className="text-muted small">
                          Round-the-clock support for our ongoing projects and
                          clients.
                        </p>
                      </div>
                    </div>

                    <div className="social-links mt-4">
                      <h6 className="fw-bold mb-3">Follow Us</h6>
                      <div className="d-flex gap-3 justify-content-center">
                        <a
                          href="https://www.facebook.com/profile.php?id=61582633452531&sk=about"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/blinkbit.labs/"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          href="https://github.com/blinkbitlabs-spec"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/blinkbit-labs-a59683390"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
