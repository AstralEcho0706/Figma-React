import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import DetailedSection from "./DetailedSection";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Introduction />
      <DetailedSection />
      <Testimonials />
      <BlogSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default HomePage;
