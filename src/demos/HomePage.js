import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Header from "components/hero/CustomHeader.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import SliderCard from "components/cards/ThreeColSlider.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Footer from "components/footers/MiniCenteredFooter.js";
import Banner from "../components/hero/BackgroundAsImageWithCenteredContent";
import { HomepageResearchs as Research } from "components/blogs/BlogIndex";
export default () => (
  <AnimationRevealPage>
    {/* <Header/> */}
    <Banner />
    <MainFeature />
    <Blog />
    <Research />
    {/* <Footer /> */}
  </AnimationRevealPage>
);
