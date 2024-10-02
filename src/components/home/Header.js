import React from "react";
import "../../styles/Header.css";
import logo from "../../assets/earthrive-logo-cmyk-01-1-1.svg";
import background from "../../assets/rectangle-1.svg";

const headerData = {
  logo: logo,
  background: background,
  navigation: [
    { label: "Fertigation Solution", link: "#fertigation" },
    { label: "Blog", link: "#blog" },
    { label: "FAQs", link: "#faqs" },
    { label: "Results", link: "#results" },
    { label: "Contact Us", link: "#contact" },
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
        <img
          class="w-[154px] h-[75px] top-[12px] left-[156px] gap-0 opacity-0"
          src={headerData.logo}
          alt="Earthrive Logo"
          className="logo"
        />
        <nav className="navigation">
          {headerData.navigation.map((navItem, index) => (
            <a key={index} href={navItem.link}>
              {navItem.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header; // Ensure this is default export
