import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Vaidyas</span>
        </h3>

        <p className="dt-description">
          Discover our esteemed team of expert Vaidyas at AyurVeda Plus — custodians of ancient Ayurvedic wisdom. With deep knowledge of holistic healing, they are committed to restoring balance in body, mind, and spirit, guiding you on a natural path to lasting wellness and vitality.
        </p>

      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Vaidya Kavita Sharma"
          title="Kayachikitsa Specialist (General Medicine)"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Vaidya Raghav Menon"
          title="Raktashuddhi Expert (Blood Purification)"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Vaidya Meera Iyer"
          title="Prameha & Madhumeha Specialist (Endocrine Disorders)"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Vaidya Arjun Deshpande"
          title="Raktavaha Strotas Specialist (Blood Disorders)"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
