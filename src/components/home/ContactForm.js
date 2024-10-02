import React from "react";
import "../../styles/ContactForm.css";
import background from "../../assets/rectangle-21.svg";
import foreground from "../../assets/rectangle-22.svg";
import logo from "../../assets/earthrive-logo-cmyk-01-1-2.svg";

const contactFormData = {
  background: background,
  foreground: foreground,
  form: {
    title: "Book a Free Consultation with us today",
    description:
      "Fill the form out below, or try giving us a call at 530-263-0820. We look forward to speaking to you!",
    fields: [
      { label: "Name", type: "text", placeholder: "Enter your name" },
      {
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
      },
      {
        label: "Phone Number",
        type: "text",
        placeholder: "Enter your phone number",
      },
      {
        label: "Tell us the crops you farm",
        type: "text",
        placeholder: "e.g., Corn, Wheat",
      },
      {
        label: "Tell us About any Pest/Disease challenges",
        type: "text",
        placeholder: "Describe challenges",
      },
      {
        label: "Monthly budget for fertilizers & all diseases/spray per acre",
        type: "text",
        placeholder: "Enter your budget",
      },
      {
        label: "Tell us your acreage",
        type: "text",
        placeholder: "Enter acreage",
      },
    ],
    submit: { text: "Submit" },
  },
};

function ContactForm() {
  const { background, foreground, form } = contactFormData;

  return (
    <section
      className="contact-form"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="contact-form-content">
        <img src={logo} alt="Earthrive Logo" className="contact-logo" />
        <h2>{form.title}</h2>
        <p>{form.description}</p>
        <form className="form">
          {form.fields.map((field, index) => (
            <div key={index} className="form-group">
              <label>{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} />
            </div>
          ))}
          <button type="submit" className="submit-button">
            {form.submit.text}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
