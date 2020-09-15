import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Subheading, SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { Link } from "react-router-dom";

import paperlist from "../../papers.json";

const HeadingRow = styled.div`
  ${tw`flex`}
  ${(props) =>
    props.showResearchs &&
    css`
      ${tw`flex-row justify-between`}
      ${ReadMoreButton} {
        ${tw`flex items-end`}
      }
    `}
`;
const Heading = tw(SectionHeading)`text-gray-900`;
const SubHeading = tw(Subheading)`text-2xl`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 h-full flex flex-col overflow-hidden`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium flex-grow`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg md:h-full`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-72 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`flex-grow p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Subinfo = styled.div`
  ${(props) =>
    !props.featured &&
    css`
      ${tw`flex flex-row justify-between`}
      ${CreationDate} {
        ${tw`mt-0 tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`}
      }
    `}
`;

const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`h-1/3 mt-1 font-black text-xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div`overflow-hidden flex-grow`;
const Author = tw.p`mt-4 font-medium text-gray-600 text-right max-w-sm `;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
const ReadMoreButton = tw(PrimaryButton)`my-2`;
export default ({
  headingText = "Blog Posts",
  featuredpaper = (paperlist[0].featured = "true"),
  posts = [
    ...paperlist,
  ] /*  [
    { THIS IS FOR DEMO PURPOSES 
      imageSrc:
        "https://images.unsplash.com/photo-1551834317-9ddfd4ec7069?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      category: "Events",
      date: "April 21, 2020",
      title: "Learn more about the world",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/article",
      featured: true,
    },
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
  ], */,
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  const shortenDescription = paperlist.map((post) => {
    return post.description.split(" ").slice(0, 30).join(" ") + "...";
  });
  const shortenCardtitle = paperlist.map((post) => {
    return post.title.split(" ").slice(0, 10).join(" ") + "...";
  });
  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            <SubHeading>Featured Entry</SubHeading>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                {console.log(posts)}
                <Link to={`/article/${post.id}`}>
                  <Post className="group" as="a" href={post.url}>
                    <Image imageSrc={post.thumbnail} />
                    <Info>
                      <Subinfo featured={post.featured}>
                        <Category>{post.category}</Category>
                        <CreationDate>{post.date}</CreationDate>
                      </Subinfo>
                      <Link to={`/article/${post.id}`}>
                        <Title>{shortenCardtitle[index]}</Title>
                      </Link>
                      <Description>{shortenDescription[index]}</Description>
                      <Author>by {post.author} </Author>
                    </Info>
                  </Post>
                </Link>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>
                Load More
              </LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};

export const HomepageResearchs = ({
  headingText = "Our Researchs and Papers",
  featuredpaper = (paperlist[0].featured = "true"),
  posts = [
    ...paperlist,
  ] /*  [
    { THIS IS FOR DEMO PURPOSES 
      imageSrc:
        "https://images.unsplash.com/photo-1551834317-9ddfd4ec7069?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      category: "Events",
      date: "April 21, 2020",
      title: "Learn more about the world",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/article",
      featured: true,
    },
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
  ], */,
}) => {
  const shortenDescription = paperlist.map((post) => {
    return post.description.split(" ").slice(0, 30).join(" ") + "...";
  });
  const shortenCardtitle = paperlist.map((post) => {
    return post.title.split(" ").slice(0, 10).join(" ") + "...";
  });
  return (
    <AnimationRevealPage>
      <Container>
        {/* <ContentWithPaddingXl> */}
        <HeadingRow showResearchs>
          <SectionHeading>{headingText}</SectionHeading>
          <Link to="/research-development">
            <ReadMoreButton>Read More</ReadMoreButton>
          </Link>
        </HeadingRow>
        <Posts>
          {posts.slice(0, 3).map((post, index) => (
            <PostContainer key={index}>
              {console.log(posts)}
              <Link to={`/article/${post.id}`}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.thumbnail} />
                  <Info>
                    <Subinfo>
                      <Category>{post.category}</Category>
                      <CreationDate>{post.date}</CreationDate>
                    </Subinfo>
                    <Link to={`/article/${post.id}`}>
                      <Title>{shortenCardtitle[index]}</Title>
                    </Link>
                    <Description>{shortenDescription[index]}</Description>
                    <Author>by {post.author} </Author>
                  </Info>
                </Post>
              </Link>
            </PostContainer>
          ))}
        </Posts>
        {/* </ContentWithPaddingXl> */}
      </Container>
    </AnimationRevealPage>
  );
};

export const EducationPrograms = ({
  headingText = "Learn and improve from our many programs",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      category: "BACHELOR",
      date: "April 21, 2020",
      title: "Learn more about our UNDERGRADE PROGRAMS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/undergrads",
      featured: true,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      category: "PHD/MASTERS",
      date: "April 21, 2020",
      title: "Learn more about our POST GRADUATE PROGRAMS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/postgrads",
      featured: true,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      category: "COURSES",
      date: "April 21, 2020",
      title: "Learn more about SHORT COURSES",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/shortcourses",
      featured: true,
    },
  ],
}) => {
  // const [visible, setVisible] = useState(7);
  // const onLoadMoreClick = () => {
  //   setVisible((v) => v + 6);
  // };
  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && (
                      <Description>{post.description}</Description>
                    )}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};
