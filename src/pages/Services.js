import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaBolt,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaRobot,
  FaRocket,
  FaGem,
  FaLock,
  FaSync,
  FaArrowRight,
  FaCheck,
  FaStar,
} from "react-icons/fa";

const Services = () => {
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

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Crafting responsive, modern websites and web applications that not only look great but perform seamlessly across all devices.",
      features: [
        "React & Next.js",
        "Full-stack Solutions",
        "SEO Optimized",
        "Progressive Web Apps",
      ],
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <FaBolt />,
      title: "Software Development",
      description:
        "Building custom software solutions tailored to your business needs, helping you automate processes and improve operational efficiency.",
      features: [
        "Custom Applications",
        "API Integration",
        "Database Design",
        "Legacy Modernization",
      ],
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Designing and developing intuitive, high-performing mobile applications for iOS and Android, ensuring a smooth user experience.",
      features: [
        "Cross-platform",
        "Native Performance",
        "Cloud Integration",
        "App Store Publishing",
      ],
      color: "#4facfe",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Deploying scalable and secure cloud infrastructure to keep your business agile, reliable, and future-ready.",
      features: ["AWS & Azure", "DevOps", "Auto-scaling", "Security First"],
      color: "#43e97b",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Creating clean, user-friendly interfaces that enhance engagement, improve usability, and drive customer satisfaction.",
      features: [
        "User Research",
        "Prototyping",
        "Design Systems",
        "Accessibility",
      ],
      color: "#fa709a",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      icon: <FaRobot />,
      title: "AI & Automation",
      description:
        "Implementing intelligent systems and automation tools to optimize operations, reduce errors, and accelerate growth.",
      features: [
        "Machine Learning",
        "Process Automation",
        "Chatbots",
        "Data Analytics",
      ],
      color: "#a8edea",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
  ];

  const features = [
    {
      icon: <FaRocket />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      color: "#667eea",
    },
    {
      icon: <FaGem />,
      title: "Premium Quality",
      description: "Industry-best practices and cutting-edge technologies",
      color: "#f093fb",
    },
    {
      icon: <FaLock />,
      title: "Secure & Reliable",
      description: "Robust security measures and reliable performance",
      color: "#4facfe",
    },
    {
      icon: <FaSync />,
      title: "Continuous Support",
      description: "Ongoing maintenance and support services",
      color: "#43e97b",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#f9f9f9",
        color: "#222",
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
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
          <FaLaptopCode
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
          <FaRobot
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
          <FaMobileAlt
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
            <span className="text-white fw-medium">🛠️ Our Expertise</span>
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
            Our Services
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
            Comprehensive digital solutions designed to transform your business
            and drive growth through cutting-edge technology.
          </p>

          <a
            href="#services-grid"
            className="btn btn-lg px-5 py-3"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "50px",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "transform 0.3s ease",
              animation: "fadeInUp 0.8s ease-out 0.9s both",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Explore Services <FaArrowRight className="ms-2" />
          </a>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        id="services-grid"
        className="py-5"
        style={{ background: "#f9f9f9" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 animate-on-scroll">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="lead text-secondary animate-on-scroll">
              End-to-end digital solutions for modern businesses
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div
                  className="animate-on-scroll hover-lift h-100"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="glass-card rounded-4 h-100 overflow-hidden">
                    {/* Service Header */}
                    <div
                      className="p-4 position-relative"
                      style={{
                        background: service.gradient,
                      }}
                    >
                      <div
                        className="rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: "70px",
                          height: "70px",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)",
                          fontSize: "2rem",
                          color: "#fff",
                        }}
                      >
                        {service.icon}
                      </div>
                      <h4 className="fw-bold text-white mb-0">
                        {service.title}
                      </h4>
                    </div>

                    {/* Service Body */}
                    <div className="p-4">
                      <p className="text-secondary mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="d-flex align-items-center mb-2"
                          >
                            <FaCheck
                              className="me-2"
                              style={{
                                color: service.color,
                                fontSize: "0.9rem",
                              }}
                            />
                            <small className="text-secondary">{feature}</small>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <button
                        className="btn btn-sm w-100 py-2"
                        style={{
                          background: service.color,
                          border: "none",
                          borderRadius: "8px",
                          color: "#fff",
                          fontWeight: "600",
                          transition: "transform 0.3s ease, opacity 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.opacity = "0.9";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.opacity = "1";
                        }}
                      >
                        Learn More{" "}
                        <FaArrowRight
                          className="ms-2"
                          style={{ fontSize: "0.8rem" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="animate-on-scroll">
                <h2 className="display-5 fw-bold mb-4">
                  Why Choose <span className="gradient-text">Us?</span>
                </h2>
                <p className="lead text-secondary mb-4">
                  We combine creativity, technical expertise, and a
                  client-focused approach to deliver solutions that align
                  perfectly with your business goals.
                </p>
                <p className="text-secondary mb-5">
                  Whether you're a startup or an established enterprise, our
                  team is dedicated to turning your ideas into reality with
                  cutting-edge technology and innovative solutions.
                </p>

                <div className="row g-4">
                  {features.map((feature, index) => (
                    <div key={index} className="col-md-6">
                      <div
                        className="glass-card p-4 rounded-3 h-100"
                        style={{
                          borderLeft: `3px solid ${feature.color}`,
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateX(5px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <div className="d-flex align-items-start">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                            style={{
                              width: "50px",
                              height: "50px",
                              background: feature.color,
                              color: "#fff",
                              fontSize: "1.2rem",
                            }}
                          >
                            {feature.icon}
                          </div>
                          <div>
                            <h6 className="fw-bold mb-2">{feature.title}</h6>
                            <small className="text-secondary">
                              {feature.description}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="animate-on-scroll position-relative"
                style={{
                  opacity: 0,
                  transform: "translateX(30px)",
                  transition: "all 0.6s ease",
                }}
              >
                <div className="glass-card rounded-4 p-5 text-center">
                  <div className="mb-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                      style={{
                        width: "100px",
                        height: "100px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        fontSize: "3rem",
                      }}
                    >
                      <FaStar style={{ color: "#fff" }} />
                    </div>
                    <h3 className="fw-bold mb-3">Client Satisfaction</h3>
                    <div className="display-4 fw-bold gradient-text mb-3">
                      100%
                    </div>
                    <p className="text-secondary">
                      Our commitment to excellence ensures that our clients
                      always achieve their goals and experience top-notch
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(102,126,234,0.1), rgba(240,147,251,0.1))",
        }}
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-4 animate-on-scroll">
            Ready to Elevate Your Business?
          </h2>
          <p className="lead mb-4 text-secondary animate-on-scroll">
            Contact us today and let's start building your digital future.
          </p>
          <a
            href="#contact"
            className="btn btn-lg px-5 py-3"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#fff",
              borderRadius: "50px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Get in Touch <FaArrowRight className="ms-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
