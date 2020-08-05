import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import WallOfText from "components/blogs/Paragraphs.js";
import { EducationPrograms as Blogposts } from "components/blogs/BlogIndex.js";

import { CustomBanner as Hero } from "components/hero/BackgroundAsImageWithCenteredContent.js";

export default function EduPage() {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (
    <AnimationRevealPage>
      <Hero heading1="Our" heading2=" Education Programs" />
      <WallOfText headingText="Learn and improve with our many programs" />
      <Blogposts />
    </AnimationRevealPage>
  );
}
