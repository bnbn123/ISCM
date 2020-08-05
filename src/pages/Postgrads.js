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
      <Banner heading1="Our PHD/MASTERS" heading2="Programs" />
      <WallOfText headingText="OUR PHD/MASTERS PROGRAMS" />
      <MainFeature1
        subheading={<Subheading>PHD/MASTER PROGRAMS</Subheading>}
        heading="THIS IS THE FULLNAME FOR PROGRAMS"
        primaryButtonUrl="/article"
        buttonRounded={false}
        primaryButtonText="Learn more"
        imageSrc="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
      <MainFeature1
        subheading={<Subheading>PHD/MASTER PROGRAMS</Subheading>}
        heading="THIS IS THE FULLNAME FOR PROGRAMS"
        primaryButtonUrl="/article"
        buttonRounded={false}
        primaryButtonText="Learn more "
        imageSrc="https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
      />
    </AnimationRevealPage>
  );
};
