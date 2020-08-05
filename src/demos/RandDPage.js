import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { CustomBanner as Hero } from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Blogposts from "components/blogs/BlogIndex.js";
export default function RandDPage() {
  return (
    <AnimationRevealPage>
      <Hero heading1="Research" heading2="And Development" />
      <Blogposts />
    </AnimationRevealPage>
  );
}
