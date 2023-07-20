import React from "react";

import styled from "styled-components";
import tw from "twin.macro";
import { breakpoints } from "../../data/breakpoints";
import { Vision1, Vision2 } from "../../data";

const Container = styled.div`
  ${tw`
    mt-[118px] xl:mx-[5%] mx-3
 `}
  @media (max-width: ${breakpoints.small}) {
    margin: 118px 0 0 -40px;
  }
`;

const Container2 = styled.div`
  ${tw`
    mt-[123px] xl:mx-[calc(10% + 4px)] mx-[10%]
 `}
  @media (max-width: ${breakpoints.small}) {
    margin: 118px 0 0 20px;
  }
`;

const BoxVision2 = styled.div`
  ${tw`
    flex justify-center  flex-1  items-center mx-auto 
 `}
  @media (max-width: ${breakpoints.large}) {
    flex-direction: column;
  }
`;

const BoxVision = styled.div`
  ${tw`
    flex justify-center flex-1  items-center mx-auto 
 `}

  @media (max-width: ${breakpoints.large}) {
    flex-direction: column;
  }
`;

const BoxTitle2 = styled.div`
  ${tw`
    w-[50%]
 `}
  @media (max-width: ${breakpoints.large}) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImageLeft = styled.div`
  ${tw`
    w-1/2 ml-[5%]
 `}
  @media (max-width: ${breakpoints.large}) {
    width: 80%;
  }
`;

const ImageLeft2 = styled.div`
  ${tw`
    w-1/2 ml-[5%]
 `}
  @media (max-width: ${breakpoints.large}) {
    width: 80%;
  }
`;

const Images = styled.img`
  ${tw`
    pl-[68px]
 `}
  @media (max-width: ${breakpoints.large}) {
    width: 80%;
  }
`;
const Images2 = styled.img`
  ${tw`
    pl-[83px]
 `}
  @media (max-width: ${breakpoints.large}) {
    width: 80%;
    margin-top: 40px;
  }
  @media (max-width: ${breakpoints.small}) {
    padding: 0 25px;
  }
`;

const BoxTitle = styled.div`
  ${tw`
  w-1/2 ml-[122px]
 `}
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.h6`
  ${tw`
   
`}
`;
const Text = styled.h1`
  ${tw`
   w-[65%] tracking-[0.2px]
   leading-[42px] mt-4
`}
  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;
const Desc = styled.p`
  ${tw`
   tracking-[1.5px] w-[80%] mt-4 mb-4
`}
`;
const Title2 = styled.h6`
  ${tw`
    ml-1
`}
`;
const Text2 = styled.h1`
  ${tw`
   w-[95%] tracking-[0.5px]
   leading-[42px] mt-3
`}
`;
const Desc2 = styled.p`
  ${tw`
   tracking-[1.7px] w-[85%] mt-4 mb-4
`}
`;

const End = styled.p`
  ${tw`
tracking-[1.5px] w-[82%] mt-6 mb-4
`}
`;

const End2 = styled.p`
  ${tw`
tracking-[1.6px] w-[85%] mt-6 mb-4
`}
`;

const VisionandMission = () => {
  return (
    <>
      <Container>
        <BoxVision>
          <ImageLeft>
            <Images src={Vision1} alt="" />
          </ImageLeft>

          <BoxTitle>
            <Title>Our Vision</Title>
            <Text>Be the best and go international</Text>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </Desc>

            <End>
              {" "}
              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
              suspendisse placerat.
            </End>
          </BoxTitle>
        </BoxVision>
      </Container>
      <Container2>
        <BoxVision2>
          <BoxTitle2>
            <Title2>Our Mission</Title2>
            <Text2>Special & premium service to any clients</Text2>
            <Desc2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </Desc2>

            <End2>
              {" "}
              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
              suspendisse placerat.
            </End2>
          </BoxTitle2>
          <ImageLeft2>
            <Images2 src={Vision2} alt="" />
          </ImageLeft2>
        </BoxVision2>
      </Container2>
    </>
  );
};

export default VisionandMission;
