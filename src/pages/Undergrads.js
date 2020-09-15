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
      <Banner heading1="Our undergraduate" heading2="Programs" />
      <WallOfText headingText="OUR BACHELOR PROGRAMS" />
      <MainFeature1
        subheading={<Subheading>bachelor programs</Subheading>}
        heading="Bachelor programs fullname here"
        buttonRounded={false}
        primaryButtonText="Learn more"
        primaryButtonUrl=" "
        imageSrc="https://images.unsplash.com/photo-1546953304-5d96f43c2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
      />
      <MainFeature1
        subheading={<Subheading>bachelor programs</Subheading>}
        heading="Bachelor programs fullname here"
        primaryButtonUrl=" "
        buttonRounded={false}
        primaryButtonText="Learn more "
        imageSrc="https://images.unsplash.com/photo-1550867428-138aec9fce23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      />
    </AnimationRevealPage>
  );
};
