import React from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

function UserFooter() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        backgroundColor: "#fff",
        borderTop: "1px solid #eaeaea",
      }}
    >
      
      <div style={{ fontSize: "0.9rem", color: "#777" }}>
        Copyright ©2023 All rights reserved | This template is made with{" "}
        <span style={{ color: "#f6214b", fontWeight: "bold" }}>❤</span> by{" "}
        <a
          href="https://colorlib.com"
          style={{ textDecoration: "none", color: "#f6214b" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Colorlib
        </a>
      </div>

      
      <div style={{ display: "flex", gap: "15px" }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#555",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f6214b";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f9f9f9";
            e.currentTarget.style.color = "#555";
          }}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#555",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f6214b";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f9f9f9";
            e.currentTarget.style.color = "#555";
          }}
        >
          <FaTwitter />
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#555",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f6214b";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f9f9f9";
            e.currentTarget.style.color = "#555";
          }}
        >
          <FaDribbble />
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#555",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f6214b";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f9f9f9";
            e.currentTarget.style.color = "#555";
          }}
        >
          <FaBehance />
        </a>
      </div>
    </footer>
  );
}

export default UserFooter;
