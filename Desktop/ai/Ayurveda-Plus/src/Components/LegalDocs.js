import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to AyurVeda Plus, your trusted platform for holistic wellness and Ayurvedic healthcare. Our mission is to offer accessible, personalized Ayurvedic services to individuals seeking natural healing, expert guidance, and preventive care. By using our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is important to us. Our Privacy Policy explains how we collect, use, and safeguard your personal and health-related information. At AyurVeda Plus, we ensure that all data is handled securely and treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By accessing AyurVeda Plus, you agree to our Terms of Service, which outline appropriate use of the platform, respectful engagement with Vaidyas (Ayurvedic practitioners), and responsibilities of both users and providers. Understanding these terms helps ensure a smooth and respectful experience for all.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          AyurVeda Plus connects you with experienced Ayurvedic Vaidyas for online consultations. These sessions offer guidance, herbal prescriptions, and wellness plans rooted in ancient Ayurvedic wisdom. While they provide valuable insight, these consultations are not a substitute for emergency or critical care. Please provide accurate information to receive the best support.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          AyurVeda Plus makes it easy to access holistic care. Simply select a practitioner, schedule your session, and connect virtually. Our Vaidyas will provide personalized guidance based on your body constitution (Prakriti), lifestyle, and health goals. For urgent or emergency medical situations, always seek immediate help at a local medical facility.
        </p>
      </div>


      <div className="legal-footer">
        <p>© 2025 AyurVeda+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
