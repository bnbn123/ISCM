import React, { useState } from "react";
//markdown
// import Markdown from "react-markdown";
import postlist from "../../posts.json";
//styling
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
//Styling
//Router
import { Link } from "react-router-dom";
// Component
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import ResponsiveModalContent from "../../helpers/ResponsiveModalContent.js";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-center items-center flex-col xl:flex-col `;
const Header = tw(SectionHeading)`
  mb-4 xl:mb-8
`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none sm:mt-4 xl:mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-8 py-6 mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
`;

const TabContent = tw(
  motion.div
)`mt-6 flex sm:h-9/12 flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const CardContainer = tw.div`flex mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.div
)`flex-grow flex flex-col bg-gray-200 rounded-b max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.thumbnail}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-base`;

const CardText = tw.div`flex-grow p-4 text-gray-900`;
const CardTitle = tw.h5`lg:h-1/2 text-lg font-semibold group-hover:text-primary-500`;
// const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}

    css {
    }
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center bg-indigo-600 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

const TABS = {
  News: [
    {
      thumbnail:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$2.99",
      rating: "4.8",
      reviews: "32",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1515163842884-3c780ba91d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1557428894-56bcc97113fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$2.99",
      rating: "4.8",
      reviews: "32",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1515163842884-3c780ba91d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      title: "News",
      content: "Some Random piece of news",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: " ",
    },
  ],
  Events: [
    {
      thumbnail:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Events",
      content: "Some random events",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "Events",
      content: "Some random events",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1515163842884-3c780ba91d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      title: "Events",
      content: "Some random events",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Events",
      content: "Some random events",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
      title: "Events",
      content: "Some random events",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "Events",
      content: "Some random events",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1557428894-56bcc97113fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80",
      title: "Events",
      content: "Some random events",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Events",
      content: "Some random events",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: "Events",
      content: "Some random events",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: " ",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1515163842884-3c780ba91d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      title: "Events",
      content: "Some random events",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: " ",
    },
  ],
  studiolab: [
    {
      thumbnail:
        "https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2866.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2867.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2869.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2871.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2873.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2874.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2876.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2877.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2879.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2881.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2885.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2886.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2887.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2890.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2891.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2892.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
    {
      thumbnail: "src/images/studiolab/_MG_2894.JPG",
      title: "Events",
      content: "Some random events",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: " ",
    },
  ],
};

export default ({
  heading = " ",
  tabs = {
    News: postlist,
    Events: getRandomCards(TABS.Events),
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  // console.log("tabsKey", tabsKeys);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const shortenCardtitle = postList.map((post) => {
    return post.title.split(" ").slice(0, 7).join(" ") + "...";
  });
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((post, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={post.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Link to={`/article/${post.id}`}>
                    <CardImageContainer thumbnail={post.thumbnail}>
                      <CardHoverOverlay
                        variants={{
                          hover: {
                            opacity: 1,
                            height: "auto",
                          },
                          rest: {
                            opacity: 0,
                            height: 0,
                          },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardButton>Read more</CardButton>
                      </CardHoverOverlay>
                    </CardImageContainer>
                  </Link>
                  <CardText>
                    <CardTitle>{shortenCardtitle[index]}</CardTitle>
                    <small>
                      Published on {post.date} by {post.author}
                    </small>
                    {/* <CardContent>{card.content}</CardContent> */}
                    {/* <CardPrice>{card.price}</CardPrice> */}
                    {/*  <small tw="hover:text-indigo-500">
                      <Link className="links">Read more</Link>
                    </small> */}
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = (Events) => {
  // Shuffle array
  return Events.sort(() => Math.random() - 0.5);
};

export const TwoLinesTabsGrid = ({
  heading = " ",
  tabs = {
    data: TABS.News,
  },
}) => {
  const tabsKeys = Object.keys(tabs);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSRC, setimgSRC] = useState(
    "https://images.unsplash.com/photo-1570291233163-5af2d525570f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  );
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer
                    thumbnail={card.thumbnail}
                    onClick={() => setimgSRC(card.thumbnail)}
                  >
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={toggleModal}
                    >
                      <CardButton>View</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                </Card>
              </CardContainer>
            ))}
            <StyledModal
              closeTimeoutMS={300}
              className="mainHeroModal"
              isOpen={modalIsOpen}
              onRequestClose={toggleModal}
              shouldCloseOnOverlayClick={true}
            >
              <CloseModalButton onClick={toggleModal}>
                <CloseIcon tw="w-6 h-6" />
              </CloseModalButton>
              <div className="content">
                <ResponsiveModalContent
                  classname="modal"
                  url={imgSRC}
                  tw="w-full"
                />
              </div>
            </StyledModal>
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
