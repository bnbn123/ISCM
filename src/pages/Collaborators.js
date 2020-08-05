import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import { CustomBanner as Hero } from "components/hero/BackgroundAsImageWithCenteredContent.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import tw from "twin.macro";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default function CollabPage() {
  return (
    <AnimationRevealPage>
      {/* <Hero heading1="Our" heading2="People" /> */}
      <TeamCardGrid
        heading="Our Trusted Collaborators"
        subheading={<Subheading>Our Collaborators</Subheading>}
      />
    </AnimationRevealPage>
  );
}
