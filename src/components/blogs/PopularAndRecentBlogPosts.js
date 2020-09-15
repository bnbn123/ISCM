import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container } from "components/misc/Layouts.js";
import postslist from "../../posts.json";
import eventslist from "../../events.json";
import { Link } from "react-router-dom";

const Row = tw.div`flex flex-col lg:flex-row -mb-10 h-full`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const Post = tw(
  motion.a
)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;

const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Image = styled(motion.div)((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`,
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`align-bottom mt-6 flex items-center`;
// const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
// const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`h-2/3 text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PopularPostsContainer = styled.div`
  ${tw`lg:w-2/3`}
  ${Post} {
    ${tw`flex flex-col h-full`}
    ${Title} {
      ${tw`h-1/3`}
    }
    ${Description} {
      ${tw`flex-grow`}
    }
  }
`;
const PostTextContainer = tw.div``;

export default () => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%",
    },
    hover: {
      backgroundSize: "110%",
    },
  };

  //Recommended: Only 2 Items
  const popularPosts = postslist.slice(
    0,
    2
  ); /* [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      title: "Tips on how to do a proper reaserch paper",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Charlotte Delos",
      authorProfile: "A random sleep deprived person",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      title: "Things to keep in mind to avoid procrastination ",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Adam Cuppy",
      authorProfile: "Another sleep deprived person but male",
      url: "https://reddit.com",
    },
  ]; */

  const recentPosts = eventslist.slice(
    0,
    5
  ); /* [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "Getting the most out of your time in class",
      authorName: "Aaron Patterson",
      url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1515163842884-3c780ba91d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      title: "Choosing the perfect major",
      authorName: "Sam Phipphen",
      url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Travelling to relieve stress",
      authorName: "Tony Hawk",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
      title: "Must have recourses while getting your masters",
      authorName: "Himali Turn",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "An extremely fun seminar on directions to smart city",
      authorName: "Naomi Watts",
      url: "https://timerse.com",
    },
  ]; */

  return (
    <Container>
      {/* <ContentWithPaddingXl> */}
      <Row tw="pb-24">
        <PopularPostsContainer>
          <Heading>Popular Events</Heading>
          <PostsContainer>
            {popularPosts.map((post, index) => (
              <Link to={`/article/${post.id}`}>
                <Post
                  key={index}
                  href="/article"
                  className="group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    imageSrc={post.thumbnail}
                  />
                  <Link to={`/article/${post.id}`}>
                    <Title>{post.title}</Title>
                  </Link>
                  <Description>{post.description}</Description>
                  <AuthorInfo>
                    {/* <AuthorImage src={post.authorImageSrc} /> */}
                    <AuthorNameAndProfession>
                      <AuthorName>
                        {post.author}
                        <small>on {post.date}</small>
                      </AuthorName>
                      {/* <AuthorProfile>{post.authorProfile}</AuthorProfile> */}
                    </AuthorNameAndProfession>
                  </AuthorInfo>
                </Post>
              </Link>
            ))}
          </PostsContainer>
        </PopularPostsContainer>
        <RecentPostsContainer>
          <Heading>Recent Posts</Heading>
          <PostsContainer>
            {recentPosts.map((post, index) => (
              <Link to={`/article/${post.id}`}>
                <Post key={index} href="/article" className="group">
                  <PostTextContainer>
                    <Link to={`/article/${post.id}`}>
                      <Title>{post.title}</Title>
                    </Link>
                    <AuthorName>{post.author}</AuthorName>
                  </PostTextContainer>
                  <Image imageSrc={post.thumbnail} />
                </Post>
              </Link>
            ))}
          </PostsContainer>
        </RecentPostsContainer>
      </Row>
      {/* </ContentWithPaddingXl> */}
    </Container>
  );
};
