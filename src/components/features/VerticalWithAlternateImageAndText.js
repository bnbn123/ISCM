import React, { useState } from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
//import { css } from "styled-components/macro";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
// import WallOfText from "components/blogs/Paragraphs";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = styled.div(({ withflex }) => [
  tw`mt-16`,
  withflex ? tw`flex flex-col justify-center items-center` : "",
]);

const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 mb-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center w-1/2`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`flex justify-center items-center rounded md:w-full overflow-hidden flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);

const Details = tw.div`flex flex-col justify-center items-center bg-gray-100 bg-opacity-75 sm:h-full lg:h-3/4 md:mt-2 md:max-w-md mx-4 sm:mx-0 text-center`;
const Subtitle = tw.div`sm:text-xs md:text-base font-bold tracking-wide text-indigo-700`;
const Title = tw.h4`sm:text-base md:text-3xl font-bold text-gray-900`;
const Description = tw.p`sm:text-xs mt-2 md:text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 md:text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default ({
  heading = "Here are Our sponsors and friends",
  headingtitle = "Our Friends and Sponsors",
}) => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1583787164692-5dc0f3be194f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80",
      subtitle: "School/Universities",
      title: "University of Economics ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://www.ueh.edu.vn/",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1494034547187-271c87f7f4fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      subtitle: "Gornverning body.",
      title: "The Government",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1558722141-28237ef18e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      subtitle: "Communities",
      title: "Our comminites",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com",
    },
  ];
  const [isShown, setisShown] = useState(false);
  const [picsID, setpicsID] = useState(0);
  const handleChange = (id) => {
    setisShown(true);
    setpicsID(id);
  };
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{headingtitle}</HeadingTitle>
          <HeadingDescription>{heading}</HeadingDescription>
        </HeadingInfoContainer>

        <Content withflex>
          {cards.map((card, i) => (
            <Card
              key={i}
              onMouseEnter={() => handleChange(i)}
              onMouseLeave={() => setisShown(false)}
            >
              <Image imageSrc={card.imageSrc}>
                {isShown && picsID === i ? (
                  <Details onClick={() => setisShown(false)}>
                    <Subtitle>{card.subtitle}</Subtitle>
                    <Title>{card.title}</Title>
                    <Description>{card.description}</Description>
                    {i === 0 ? <Link href={card.url}>See Details</Link> : ""}
                  </Details>
                ) : null}
              </Image>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};

export const articlePost = ({ ...post }) => {
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{post.title}</HeadingTitle>
          <HeadingDescription>
            Published on {post.date} by {post.author}
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          <Text>
            <Markdown source={post.content} escapeHtml={false} />
          </Text>
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
