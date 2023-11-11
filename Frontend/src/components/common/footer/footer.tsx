import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        backgroundColor: "#eee",
        width: "100%",
        padding: "10px",
      }}
    >
      <div className="container text-center">
        <p>&copy; 2022 - Medfar Solutions Cliniques</p>
      </div>
    </footer>
  );
}
