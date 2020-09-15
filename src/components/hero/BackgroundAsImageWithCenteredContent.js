import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0 uppercase`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-800 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <Heading>
            Institute of Smart City
            <br />
            And Management
          </Heading>
          <Link to="/education">
            <PrimaryAction>See Our Programs</PrimaryAction>
          </Link>
        </Content>
      </HeroContainer>
    </Container>
  );
};

export const PlainBanner = () => {
  return (
    <Container>
      <HeroContainer></HeroContainer>
    </Container>
  );
};

export const CustomBanner = ({ heading1, heading2 }) => {
  return (
    <Container>
      <HeroContainer>
        <Content>
          <Heading>
            {heading1}
            <br />
            {heading2}
          </Heading>
        </Content>
      </HeroContainer>
    </Container>
  );
};
