import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {CustomBanner as Hero} from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";

export default () => (
  <AnimationRevealPage>
    <Hero heading1="Our NetWork" heading2=" "/>
    <Features />
    {/* <Blog /> */}
    <Testimonial />
    <ContactUsForm />
  </AnimationRevealPage>
);
