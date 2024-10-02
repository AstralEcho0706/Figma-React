import React from "react";
import "../../styles/DetailedSection.css";
import rectangle3 from "../../assets/rectangle-3.svg";
import rectangle4 from "../../assets/rectangle-4.svg";
import rectangle5 from "../../assets/rectangle-5.svg";

const detailedSectionData = {
  sections: [
    {
      background: rectangle3,
      title: "Our basic approach works well for any field in any condition…",
      paragraphs: [
        "This helps us target toxins, deficiencies and excesses that we will correct over time.",
        "A full nutritional analysis from water to leaf and an explanation of what they are doing to the crop.",
      ],
    },
    {
      background: rectangle4,
      paragraphs: [
        "What makes our nutritional products different is that we have a proprietary surfactant that we stuff minerals into in angstrom size, making them fully available to the plant/microbe cell. Not much per acre is needed to make a difference when the nutrient is in proper form.",
        "We recommend a fertigation and foliar nutritional application schedule that puts us on target to correct the toxins, deficiencies and excesses, in time, without disrupting typical cropping yields.",
      ],
    },
    {
      background: rectangle5,
      paragraphs: [
        "It’s become really important that farmers monitor what they put out on the field by knowing what’s left on the field and how it’s impacting their crop. We continue this basic process for the life of the field. Depending on your goals, Earthrive has the solution for your farm, whether it is to optimize yields, eliminate pest problems, diseases, or improve quality. Our approach addresses these all in one!",
      ],
    },
  ],
};

function DetailedSection() {
  return (
    <section className="detailed-section">
      {detailedSectionData.sections.map((section, index) => (
        <div
          key={index}
          className="subsection"
          style={{ backgroundImage: `url(${section.background})` }}
        >
          {section.title && <h2>{section.title}</h2>}
          {section.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      ))}
    </section>
  );
}

export default DetailedSection;
