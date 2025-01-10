import React from 'react';
import './UserHero.css';

function UserHero() {
  return (
    <div
      style={{
        backgroundColor: "#f6214b",
        height: "90vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5%",
      }}
    >
    
      <div style={{ maxWidth: "50%", color: "white" }}>
        <h6 style={{ marginBottom: "10px" }}>Process Visa without within hours</h6>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "20px" }}>
          Immigrations & <br />
          Visa Consultation
        </h1>
        <button className="consultancy-button">Book Consultancy</button>
      </div>

     
      <div style={{ maxWidth: "45%", textAlign: "right" }}>
        <img
          src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp"
          alt="Header Image"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

export default UserHero;
