import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/* Ready Made Pages (from demos folder) */
import HOMEPAGE from "demos/HomePage.js";
import NETWORKPAGE from "demos/NetworkPage.js";
import ABOUTUSPAGE from "demos/AboutUsPage.js";
import NEWSANDEVENTSPAGE from "demos/News&EventsPage.js";
import STUDIOLABPAGE from "demos/StudioLabPage.js";
import RANDDPAGE from "demos/RandDPage.js";
import EDUPAGE from "demos/EducationPage.js";
import PEOPLEPAGE from "demos/PeoplePage.js";

import Header from "./components/headers/CustomHeader";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactForm from "components/forms/SimpleContactUs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CollabPage from "pages/Collaborators";
import Undergrads from "pages/Undergrads";
import Postgrads from "pages/Postgrads";
import Shortcourses from "pages/Shortcourses";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <div className="div">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <HOMEPAGE />
          </Route>
          <Route exact path="/about">
            <ABOUTUSPAGE />
          </Route>
          <Route exact path="/network">
            <NETWORKPAGE />
          </Route>
          <Route exact path="/newsandevents">
            <NEWSANDEVENTSPAGE />
          </Route>
          <Route exact path="/studiolab">
            <STUDIOLABPAGE />
          </Route>
          <Route exact path="/research-development">
            <RANDDPAGE />
          </Route>
          <Route exact path="/education">
            <EDUPAGE />
          </Route>
          <Route exact path="/people">
            <PEOPLEPAGE />
          </Route>
          <Route exact path="/collaborators">
            <CollabPage />
          </Route>
          <Route exact path="/undergrads">
            <Undergrads />
          </Route>
          <Route exact path="/postgrads">
            <Postgrads />
          </Route>
          <Route exact path="/shortcourses">
            <Shortcourses />
          </Route>
        </Switch>
      </Router>
      <ContactForm />
      <Footer />
    </div>
  );
}