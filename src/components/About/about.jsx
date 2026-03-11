import React from "react";
import "./about.css";




const About = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Our Store</h1>
        <p>Your one-stop destination for quality products at the best prices.</p>
      </section>

      {/* Company Info */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a modern e-commerce platform committed to delivering high-quality
          products with fast shipping and secure payments. Our goal is to provide
          a seamless online shopping experience.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-grid">
        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To provide affordable and premium products while maintaining
            exceptional customer service.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 Our Vision</h3>
          <p>
            To become a globally trusted e-commerce brand that customers love.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul className="about-features">
          <li>✔ Secure Payments</li>
          <li>✔ Fast Delivery</li>
          <li>✔ Easy Returns</li>
          <li>✔ 24/7 Customer Support</li>
        </ul>
      </section>

    </div>
  );
};

export default About;