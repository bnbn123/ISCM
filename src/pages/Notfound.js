import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import { CustomBanner as Hero } from "components/hero/BackgroundAsImageWithCenteredContent.js";
import { notFound as TeamCardGrid } from "components/cards/ProfileThreeColGrid.js";
import tw from "twin.macro";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default function CollabPage() {
  return (
    <AnimationRevealPage>
      {/* <Hero heading1="Our" heading2="People" /> */}
      <TeamCardGrid
        heading="404"
        subheading={<Subheading>UH OH!!!</Subheading>}
        description="We can't seem to find what you're looking for. Please try your luck with another link or post"
      />
    </AnimationRevealPage>
  );
}
