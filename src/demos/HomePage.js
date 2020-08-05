import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Header from "components/hero/CustomHeader.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Footer from "components/footers/MiniCenteredFooter.js";
import Banner from "../components/hero/BackgroundAsImageWithCenteredContent";
export default () => (
  <AnimationRevealPage>
    {/* <Header/> */}
    <Banner />
    <MainFeature />
    <Blog />
    <SliderCard />
    {/* <Footer /> */}
  </AnimationRevealPage>
);
