import React from "react";
import "../../styles/Header.css";
import logo from "../../assets/earthrive-logo-cmyk-01-1-1.svg";
import background from "../../assets/rectangle-1.svg";

const headerData = {
  logo: logo,
  background: background,
  navigation: [
    { label: "Results", link: "#results" },
    { label: "FAQs", link: "#faqs" },
    { label: "Blog", link: "#blog" },
    { label: "Fertigation Solution", link: "#fertigation" },
  ],
};

function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${headerData.background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="header-content">
        <img src={headerData.logo} alt="Earthrive Logo" className="logo" />
        <nav className="navigation">
          <a className="results" href="/results">
            Results
          </a>
          <a href="/FAQs">FAQs</a>
          <a href="/Blog">Blog</a>
          <a href="/Fertigation Solution">Fertigation Solution</a>
          <button>Contact Us</button>
        </nav>
      </div>
    </header>
  );
}

export default Header; // Ensure this is default export
