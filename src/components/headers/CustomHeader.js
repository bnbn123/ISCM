import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Link } from "react-router-dom";
import { handleForm } from "../misc/Formhandle";
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
      <Link to="/about">
        <NavLink>
          About
          <Dropdown>
            <NavDropdownContent>Overview</NavDropdownContent>
            <Link to="/network">
              <NavDropdownContent>Networks</NavDropdownContent>
            </Link>
          </Dropdown>
        </NavLink>
      </Link>
      <Link to="/newsandevents">
        <NavLink>News & Events</NavLink>
      </Link>
      <Link to="/studiolab">
        <NavLink>StudioLab</NavLink>
      </Link>
      <Link to="/research-development">
        <NavLink>R&D</NavLink>
      </Link>
      <Link to="/people">
        <NavLink tw="relative">
          People
          <Dropdown2>
            <NavDropdownContent>Our members</NavDropdownContent>
            <Link to="/collaborators">
              <NavDropdownContent>Collaborators</NavDropdownContent>
            </Link>
          </Dropdown2>
        </NavLink>
      </Link>
      <Link to="/education">
        <NavLink tw="relative">
          Education
          <Dropdown3>
            <Link to="/undergrads">
              <NavDropdownContent>Undergraduate</NavDropdownContent>{" "}
            </Link>
            <Link to="/postgrads">
              <NavDropdownContent>Post-graduate</NavDropdownContent>
            </Link>
            <Link to="/shortcourses">
              <NavDropdownContent>Short-courses</NavDropdownContent>
            </Link>
            <Link onClick={handleForm}>
              <NavDropdownContent>Admission</NavDropdownContent>
            </Link>
          </Dropdown3>
        </NavLink>
      </Link>
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
