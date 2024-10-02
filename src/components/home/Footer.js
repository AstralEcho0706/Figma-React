import React from "react";
import "../../styles/Footer.css";
import logo from "../../assets/earthrive-logo-cmyk-01-1-3.svg";
import bgImage from "../../assets/rectangle-33.svg";

const footerData = {
  logo: logo,
  background: bgImage,
  links: [
    { label: "Triple Helix", link: "#", icon: "../assets/group-25.svg" },
    { label: "Injection System", link: "#", icon: "../assets/group-25.svg" },
    {
      label: "Fertigation Solution",
      link: "#",
      icon: "../assets/group-25.svg",
    },
    // { label: "Blog", link: "#", icon: "../assets/group-25.svg" },
    // { label: "FAQs", link: "#", icon: "../assets/group-25.svg" },
    // { label: "Results", link: "#", icon: "../assets/group-25.svg" },
  ],
  contact: {
    label: "Contact Us",
    // buttonBackground: "../assets/rectangle-32.svg",
  },
};

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${footerData.background})` }}
    >
      <div className="footer-content">
        <img
          src={footerData.logo}
          alt="Earthrive Logo"
          className="footer-logo"
        />
        <div className="footer-links">
          {footerData.links.map((link, index) => (
            <div key={index} className="footer-link">
              <img src={link.icon} alt="" />
              <a href={link.link}>{link.label}</a>
            </div>
          ))}
        </div>
        <div className="contact-section">
          <button
            style={{
              backgroundImage: `url(${footerData.contact.buttonBackground})`,
            }}
          >
            {footerData.contact.label}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
