import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import WallOfText from "components/blogs/Paragraphs.js";
import { CustomBanner as Banner } from "components/hero/BackgroundAsImageWithCenteredContent";
import UniversitiesIconImage from "images/university.svg";
import CompaniesIconImage from "images/company.svg";
import CommunityLoveIconImage from "images/community.svg";

const Subheading = tw.span`uppercase tracking-wider`;
export default () => {
  return (
    <AnimationRevealPage>
      <Banner heading1="Who Are We?" heading2="About Our Insitute" />
      <MainFeature1
        heading="About Our Insitute."
        subheading="We are a modern team of young reaschers."
        buttonRounded={false}
        primaryButtonText="Meet The Team"
        primaryButtonUrl="people"
        imageSrc="https://cdn.pixabay.com/photo/2015/01/09/11/09/startup-594091_960_720.jpg"
      />
      <MainFeature1
        heading="Our Vision."
        subheading="We aim to excel in research and development."
        buttonRounded={false}
        primaryButtonText="Our Projects"
        primaryButtonUrl="research-development"
        imageSrc="https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_960_720.jpg"
        textOnLeft={false}
      />
      <WallOfText />

      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We connect."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: UniversitiesIconImage,
            title: "Universities",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CompaniesIconImage,
            title: "Companies",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CommunityLoveIconImage,
            title: "Community",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      />
    </AnimationRevealPage>
  );
};
