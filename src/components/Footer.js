import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="row text-white align-items-start g-4">
          {/* About */}
          <div className="col-md-3">
            <h4 className="footer-title">Blinkbit Labs</h4>
            <p>
              Innovation at the speed of a blink. Delivering cutting-edge apps,
              websites, and software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="footer-title">Contact Us</h5>
            <p>Email: blinkbitlabs@gmail.com</p>
            <p>Phone: +91 7006968285</p>
            <p>Location: India</p>
          </div>

          {/* Social */}
          {/* <div className="col-md-3">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-social d-flex gap-3">
              <a href="#" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div> */}
        </div>

        <div className="footer-bottom text-center mt-4">
          <p>
            © {new Date().getFullYear()} Blinkbit Labs — Innovation at the Speed
            of a Blink
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
