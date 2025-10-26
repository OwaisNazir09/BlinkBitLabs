import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";

function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="contact-badge">Get In Touch</span>
            <h2 className="contact-title display-4 fw-bold mb-3">
              Let's Start <span className="text-primary">Conversation</span>
            </h2>
            <p className="contact-subtitle lead text-muted">
              Ready to bring your ideas to life? Contact us today and let's
              create something amazing together.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Contact Info Cards */}
          <div className="col-lg-10">
            <div className="row justify-content-center mb-5">
              <div className="col-md-4 mb-4">
                <div className="contact-info-card text-center p-4 h-100">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Email Us</h5>
                  <p className="text-muted mb-2">blinkbitlabs@gmail.com</p>
                  <p className="text-muted">support.blinkbitlabs@gmail.com</p>
                  <a
                    href="mailto:blinkbitlabs@gmail.com"
                    className="contact-link"
                  >
                    Send Email <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="contact-info-card text-center p-4 h-100">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Location</h5>
                  <p className="text-muted mb-2">Based in India</p>
                  <p className="text-muted">Serving clients worldwide</p>
                  <a
                    href="https://www.google.com/maps/place/Sopore,+Jammu+and+Kashmir,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    View on Map <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="contact-info-card text-center p-4 h-100">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Working Hours</h5>
                  <p className="text-muted mb-2">Mon - Fri: 9:00 - 18:00</p>
                  <p className="text-muted">Response within 24 hours</p>
                  <button
                    className="contact-link btn btn-outline-light mt-2"
                    onClick={() => setShowModal(true)}
                  >
                    Schedule Call <i className="fas fa-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h4>Schedule a Call</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Call scheduled! We'll reach out soon.");
                  setShowModal(false);
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="form-control"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="form-control"
                />
                <input
                  type="datetime-local"
                  required
                  className="form-control"
                />
                <button type="submit">Book Call</button>
              </form>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="row justify-content-center mt-4">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="contact-form-card p-4 h-100">
                  <h4 className="form-title mb-4">Send us a Message</h4>
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
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Your Message *
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
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
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Additional Info */}
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
  );
}

export default ContactSection;
