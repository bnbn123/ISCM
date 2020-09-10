import React from "react";
import { Redirect } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { articlePost as Features } from "components/features/VerticalWithAlternateImageAndText.js";
import postlists from "../posts.json";

import ScrollTop from "components/misc/ScrollTop";

export default (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlists.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <AnimationRevealPage>
      <ScrollTop />
      <Features {...fetchedPost} />
    </AnimationRevealPage>
  );
};
