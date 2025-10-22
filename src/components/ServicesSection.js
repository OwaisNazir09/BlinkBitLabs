import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/services.css";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      description:
        "Custom mobile applications for iOS and Android, crafted to deliver smooth performance and excellent user experience.",
      icon: "📱",
      features: ["React Native", "Flutter"],
    },
    {
      id: 4,
      title: "Website Development",
      description:
        "Professional websites with modern design, responsive layouts, and optimized performance for any business.",
      icon: "🖥️",
      features: ["React/Next.js", "Node.js", "E-commerce"],
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "Engaging and user-centered designs to create seamless digital experiences for your apps and websites.",
      icon: "🎨",
      features: [
        "Wireframing",
        "Prototyping",
        "Figma/Adobe XD",
      
      ],
    },
  ];

  return (
    <section className="services py-5" id="services">
      {/* Floating Background Icons */}
      <div className="floating-icons">
        <i className="icon icon-rocket fas fa-rocket"></i>
        <i className="icon icon-cog fas fa-cog"></i>
        <i className="icon icon-laptop fas fa-laptop-code"></i>
        <i className="icon icon-bulb fas fa-lightbulb"></i>
      </div>

      {/* Background Shapes */}
      <div className="bg-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="services-badge">What We Offer</span>
            <h2 className="services-title display-4 fw-bold mb-3">
              Our <span className="text-black">Services</span>
            </h2>
            <p className="services-subtitle lead text-black">
              Transforming ideas into digital solutions with expertise in apps,
              software, websites, and design.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-6 col-xl-4">
              <div className="service-card h-100">
                <div className="card-body p-4">
                  {/* Icon */}
                  <div className="service-icon mb-4">
                    <span className="icon-emoji">{service.icon}</span>
                    <div className="icon-background"></div>
                  </div>

                  {/* Content */}
                  <h3 className="service-title h4 fw-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="service-description mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="service-features list-unstyled mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="feature-item mb-2">
                        <i className="fas fa-check me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="service-btn btn w-100">
                    Learn More
                    <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="services-cta p-5 rounded">
              <h3 className="h2 mb-3">Ready to Start Your Project?</h3>
              <p className="mb-4">
                Let's discuss how we can bring your ideas to life with our
                expert services.
              </p>
              <div className="cta-buttons d-flex justify-content-center flex-wrap gap-3">
                <button className="btn btn-primary btn-lg">
                  Get Started
                  <i className="fas fa-rocket ms-2"></i>
                </button>
                <button className="btn btn-outline-dark btn-lg">
                  View Portfolio
                  <i className="fas fa-eye ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
