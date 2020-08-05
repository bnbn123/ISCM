import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { customFeature as Features } from "components/features/VerticalWithAlternateImageAndText.js";
import ScrollTop from "components/misc/ScrollTop";
export default () => (
  <AnimationRevealPage>
    <ScrollTop />
    <Features
      headingtitle="This Is An Example Article"
      heading="learn more about what you want"
    />
  </AnimationRevealPage>
);
