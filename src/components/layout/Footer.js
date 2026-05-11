import React from "react";
import "../Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Nijamuddin. All rights reserved.
      </p>
    </footer>
  );
}
