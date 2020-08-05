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
        subheading={<Subheading>About our insitute</Subheading>}
        heading="We are a modern team of young reaschers."
        buttonRounded={false}
        primaryButtonText="Learn more"
        imageSrc="https://images.unsplash.com/photo-1507486673731-8e2cb2d8f106?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to excel in research and development."
        buttonRounded={false}
        primaryButtonText="Learn more"
        imageSrc="https://images.unsplash.com/photo-1503844912657-8f60404b429f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
        textOnLeft={false}
      />
    </AnimationRevealPage>
  );
};
