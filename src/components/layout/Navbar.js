import React, { useRef } from "react";
import "../Navbar.css";
import { NAVIGATION_ITEMS } from "../../data/navigation";

export default function Navbar({ onNavigate }) {
  const toggleRef = useRef(null);

  const handleNavigate = (sectionId) => {
    onNavigate(sectionId);

    if (window.matchMedia("(max-width: 991.98px)").matches) {
      toggleRef.current?.click();
    }
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body portfolio-navbar"
      style={{ background: "#fdfdfdfc" }}
    >
      <div className="container-fluid">
        <div className="container d-flex p-0" style={{ margin: "0px" }}>
          <button
            className="navbar-brand mx-3 border-0 bg-transparent"
            type="button"
            onClick={() => handleNavigate("home")}
          >
            Nizam.dev
          </button>
          <button
            ref={toggleRef}
            className="navbar-toggler mx-2 nav-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div
          className="collapse navbar-collapse mx-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAVIGATION_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  className="nav-link"
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
