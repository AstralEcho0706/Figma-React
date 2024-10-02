import React from "react";
import "../../styles/Testimonials.css";
import testimonialImage from "../../assets/brycehappy-1.svg";

const testimonialData = {
  testimonials: [
    {
      image: testimonialImage,
      name: "Bryce Matthews",
      title: "Founder and Lead Advisor",
      description:
        "I am the Founder and Lead Advisor at Earthrive. Please contact me in the form below so I can answer your questions and explain anything helpful!",
    },
  ],
  additionalText:
    "Please watch this presentation above from the World Ag Expo Feb 9-10, 2021! We look forward to speaking with you!",
};

function Testimonials() {
  return (
    <section className="testimonials">
      {testimonialData.testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={testimonial.image} alt="Testimonial" />
          <h2>{testimonial.name}</h2>
          <p>{testimonial.description}</p>
        </div>
      ))}
      <div className="testimonial-additional">
        <p>{testimonialData.additionalText}</p>
      </div>
    </section>
  );
}

export default Testimonials;
