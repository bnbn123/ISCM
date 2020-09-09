import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings";
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
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
export default ({ headingText = "Our Mission", textContent = " " }) => {
  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p className="">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              scelerisque nibh non auctor mattis. Aenean imperdiet consequat ex.
              Etiam non ante rhoncus, porttitor sem eget, varius quam. Donec vel
              tempor tortor, et condimentum est. Vivamus ac vestibulum ligula.
              Suspendisse molestie ipsum eget mattis semper. Proin varius, justo
              vel dapibus pulvinar, ante purus dapibus nisl, at facilisis sapien
              tortor vel nulla. Morbi in justo ut metus dapibus lobortis. Nunc
              semper, dolor at varius faucibus, dui est congue leo, ut vehicula
              orci ipsum non lacus. Fusce at pulvinar augue. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Aliquam erat volutpat. Maecenas a imperdiet massa.
              Nullam non sollicitudin neque, in lobortis odio. Pellentesque
              ullamcorper purus in sapien ullamcorper, quis tempus ex imperdiet.
              Sed ornare pulvinar mauris. Duis eget ipsum convallis, imperdiet
              odio vitae, tristique tellus. Curabitur consectetur orci et velit
              facilisis aliquam. Curabitur a enim eu elit aliquet egestas.
              Curabitur quis tristique lorem, a gravida felis. Nam tristique
              tincidunt ipsum, non condimentum ligula sodales non. Quisque
              sagittis dui quis nunc lobortis, sit amet rutrum lacus facilisis.
              Fusce eleifend vehicula lectus. Sed in posuere massa. Sed vehicula
              quis ipsum vitae dignissim. In varius tellus erat.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};
