import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring holistic wellness to your fingertips, offering a wide range of Ayurvedic services tailored to your unique constitution. Connect with experienced Vaidyas online for personalized health guidance, herbal prescriptions, and natural remedies — all designed to restore balance and promote lasting well-being.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Urgent Dosha Care"
          description="For sudden imbalances or acute conditions, our Ayurvedic experts offer prompt consultations to restore harmony in the body. While Ayurveda is not a substitute for emergency allopathic care, we provide immediate support through calming therapies, herbal interventions, and lifestyle guidance."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Wellness (Hridaya Roga)"
          description="Our Vaidyas support heart health through Ayurvedic assessments, herbal formulations, and lifestyle changes focused on balancing Sadhaka Pitta and Vyana Vata. Experience holistic heart care rooted in centuries-old wisdom to promote emotional and physical well-being."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Oral Health (Danta Swasthya)"
          description="Maintain a healthy smile through Ayurvedic dental care practices like oil pulling, herbal tooth powders, and diet-based oral hygiene. Our approach supports gum health, strengthens teeth, and promotes freshness — naturally and effectively."
          icon={faTooth}
        />

      </div>
    </div>
  );
}

export default Info;
