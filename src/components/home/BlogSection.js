import React from "react";
import "../../styles/BlogSection.css";
import latestBlogImage from "../../assets/b-1-1-300-x-290-1.svg";
import buttonIcon from "../../assets/vector-4.svg";

const blogSectionData = {
  latestPost: {
    date: "Feb 8, 2021",
    title: "Carbon Humates and their effects on the soil",
    description:
      "Humate materials are widely distributed organic carbon containing compounds found in soils, fresh water, and oceans. These substances are formed from the biological and chemical breakdown of animal and plant life, and make up approximately 75 percent of the organic... read more...",
    image: latestBlogImage,
  },
  button: {
    text: "Click here for all Blog Articles",
    link: "#blog",
    icon: buttonIcon,
  },
};

function BlogSection() {
  const { latestPost, button } = blogSectionData;

  return (
    <section className="blog-section">
      <h1 className="blog-title">The Latest Blog Post</h1>
      <div className="blog-content">
        <img src={latestPost.image} alt="Latest Blog Post" />
        <div className="blog-details">
          <p className="blog-date">{latestPost.date}</p>
          <h2 className="blog-post-title">{latestPost.title}</h2>
          <p className="blog-description">{latestPost.description}</p>
        </div>
      </div>
      <a href={button.link} className="blog-button">
        {button.text}
        <img src={button.icon} alt="Arrow Icon" />
      </a>
    </section>
  );
}

export default BlogSection; // Ensure this is default export
