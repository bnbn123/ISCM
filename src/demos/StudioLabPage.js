import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { CustomBanner as Hero } from "components/hero/BackgroundAsImageWithCenteredContent.js";
import { TwoLinesTabsGrid as TabGrid } from "components/cards/TabCardGrid.js";

export default function StudioLabPage() {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (
    <AnimationRevealPage>
      <Hero heading1="Our Studio" heading2="and Labs" />
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>Studio</HighlightedText>
          </>
        }
      />
      <TabGrid
        heading={
          <>
            And our <HighlightedText>LABS</HighlightedText>
          </>
        }
      />
    </AnimationRevealPage>
  );
}
