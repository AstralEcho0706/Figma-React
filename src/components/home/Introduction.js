import React from "react";
import "../../styles/Introduction.css";
import background from "../../assets/group-3.svg";
import logo from "../../assets/earthrive-logo-cmyk-01-1-2-2.svg";

const introData = {
  background: background,
  logo: logo,
  title: "Earthrive",
  description:
    "We provide and support farmers with customized fertigation and foliar spray nutritional programs and strategies that boost their crops to their maximum potential.",
};

function Introduction() {
  return (
    <section
      className="introduction"
      style={{
        backgroundImage: `url(${introData.background})`,
        backgroundSize: "cover",
      }}
    >
      <h1>{introData.title}</h1>
      <p>{introData.description}</p>
      <img src={introData.logo} alt="Earthrive Logo" />
    </section>
  );
}

export default Introduction;
