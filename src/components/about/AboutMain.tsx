import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { breakpoints } from "../../data/breakpoints";
import { bgPlay, bgWhite } from "../../data";
const AboutContainer = styled.div`
  ${tw`
   mx-[5%]
   mt-[106px]
`}
`;
const Head = styled.div`
  ${tw`
  mx-[6%]
`}
`;
const BoxImages = styled.div`
  ${tw`
   relative
`}
`;
const Images = styled.img`
  ${tw`
   w-full 
`}
`;
const ImgChild = styled.img`
  ${tw`
    absolute top-[40%] left-[46.5%] w-[90px]
`}
  @media (max-width: ${breakpoints.large}) {
    width: 50px;
  }
  @media (max-width: ${breakpoints.small}) {
    width: 50px;
    top: 35%;
    left: 44%;
  }
`;
const BtnPlay = styled.div`
  ${tw`
  
`}
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
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
  }
`;
const Desc = styled.p`
  ${tw`
   tracking-[1.5px] w-3/5 mt-5 mb-4
`}
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
  }
`;
const AboutMain = () => {
  return (
    <>
      <AboutContainer>
        <Head>
          <Title>About</Title>
          <Text>
            We are a leading beauty clinic that has been around since 2002
          </Text>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Desc>
        </Head>

        <BoxImages>
          <Images src={bgWhite} alt="" />
          <BtnPlay>
            <ImgChild src={bgPlay} alt="Hello" />
          </BtnPlay>
        </BoxImages>
      </AboutContainer>
    </>
  );
};

export default AboutMain;
