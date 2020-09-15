import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import WallOfText from "components/blogs/Paragraphs.js";
import { CustomBanner as Banner } from "components/hero/BackgroundAsImageWithCenteredContent";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Banner heading1="Our Short" heading2="Courses" />
      <WallOfText headingText="Short cources you can learn in a few weeks" />
      <MainFeature1
        subheading={<Subheading>Short-limited time course</Subheading>}
        heading="THIS IS THE FULLNAME OF THE COURSE"
        buttonRounded={false}
        primaryButtonUrl=" "
        primaryButtonText="Learn more"
        imageSrc="https://images.unsplash.com/photo-1550202256-47e53ffabc95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Short-limited time course</Subheading>}
        heading="THIS IS THE FULLNAME OF THE COURSE"
        buttonRounded={false}
        primaryButtonUrl=" "
        primaryButtonText="Learn more"
        imageSrc="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
        textOnLeft={false}
      />
    </AnimationRevealPage>
  );
};
