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
    <div className="md:pr-[128px] pl-[164px] flex text-white gap-4 sm:pr-0">
      <div className="bg-green-400 px-[43px] pt-[27px] pb-[86px] rounded-xl translate-y-[-80px]">
        <div>Our basic approach works well for any field in any condition…</div>
        <div>
          A full nutritional analysis from water to leaf and an explanation of
          what they are doing to the crop.
        </div>
        <div>
          This helps us target toxins, deficiencies and excesses that we will
          correct over time.
        </div>
      </div>
      <div className="bg-green-400 px-[43px] pt-[27px] pb-[86px] rounded-xl translate-y-[-120px]">
        <div>Our basic approach works well for any field in any condition…</div>
        <div>
          A full nutritional analysis from water to leaf and an explanation of
          what they are doing to the crop.
        </div>
        <div>
          This helps us target toxins, deficiencies and excesses that we will
          correct over time.
        </div>
      </div>
      <div className="bg-green-400 px-[43px] pt-[27px] pb-[86px] rounded-xl translate-y-[-80px]">
        <div>Our basic approach works well for any field in any condition…</div>
        <div>
          A full nutritional analysis from water to leaf and an explanation of
          what they are doing to the crop.
        </div>
        <div>
          This helps us target toxins, deficiencies and excesses that we will
          correct over time.
        </div>
      </div>
    </div>
  );
}

export default DetailedSection;
