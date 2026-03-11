import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features container mt-5">
      <div className="row text-center">

        <div className="col-md-4 mb-4">
          <div className="feature-card p-4">
            <i className="bi bi-truck feature-icon"></i>
            <h4>Fast Delivery</h4>
            <p>Get your products delivered quickly and safely.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="feature-card p-4">
            <i className="bi bi-shield-check feature-icon"></i>
            <h4>Secure Payment</h4>
            <p>Your payment information is fully protected.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="feature-card p-4">
            <i className="bi bi-headset feature-icon"></i>
            <h4>24/7 Support</h4>
            <p>Our support team is always ready to help you.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;

