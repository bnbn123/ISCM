import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;
const NavLink = tw(NavLinkBase)`
  sm:text-base sm:mx-6
`;

// Dropdown part of navbar header
const Dropdown = tw.div`
  absolute mt-1 
`;

const Dropdown2 = styled(Dropdown)`
  right: -45px;
`;

const Dropdown3 = styled(Dropdown)`
  right: -35px;
`;
const NavDropdownContent = styled(NavLink)`
  // on hover of navlink
  ${NavLink}:hover & {
    display: block;
    margin: 0;
  }
  //styling of dropdown elements
  ${tw`relative hidden bg-white z-30 p-4`}
`;

const Container = tw.div`relative `;
const FlexSettings = tw.div`flex lg:flex-row bg-gray-100 justify-center`;
const PaddingAndMargin = tw.div` mt-0 xl:pl-10 py-8`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="about">
        About
        <Dropdown>
          <NavDropdownContent href="about">Overview</NavDropdownContent>
          <NavDropdownContent href="network">Networks</NavDropdownContent>
        </Dropdown>
      </NavLink>
      <NavLink href="newsandevents">News & Events</NavLink>
      <NavLink href="studiolab">Studio - Lab</NavLink>
      <NavLink href="research-development">R&D</NavLink>
      <NavLink tw="relative" href="people">
        People
        <Dropdown2>
          <NavDropdownContent href="people">Our members</NavDropdownContent>
          <NavDropdownContent href="collaborators">
            Collaborators
          </NavDropdownContent>
        </Dropdown2>
      </NavLink>
      <NavLink tw="relative" href="education">
        Education
        <Dropdown3>
          <NavDropdownContent href="undergrads">
            Undergraduate
          </NavDropdownContent>
          <NavDropdownContent href="postgrads">
            Post-graduate
          </NavDropdownContent>
          <NavDropdownContent href="shortcourses">
            Short-courses
          </NavDropdownContent>
          <NavDropdownContent href="education">Admission</NavDropdownContent>
        </Dropdown3>
      </NavLink>
    </NavLinks>,
  ],
}) => (
  <Container>
    <FlexSettings>
      <PaddingAndMargin>
        <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
      </PaddingAndMargin>
    </FlexSettings>
  </Container>
);
