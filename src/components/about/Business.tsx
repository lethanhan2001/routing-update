import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BgFace from "../../images/aboutImg/theface.png";

import { breakpoints } from "../../data/breakpoints";
import CustomBg from "../customBg";

const Box = styled.div`
  ${tw`
   flex justify-center pt-40 h-full text-center
`}
  @media (max-width: ${breakpoints.small}) {
    padding-top: 70px;
  }
`;

const BoxContainer = styled.div``;
const Title = styled.h6`
  ${tw`
    text-base font-semibold text-[#abb4ff]
 `}
`;
const Text = styled.h1`
  ${tw`
  text-4xl font-semibold text-white w-[65%] mx-auto tracking-[0.5px] mt-4
`}
`;
const Desc = styled.p`
  ${tw`
    text-base font-semibold mt-6 text-[#cacaca] w-[73%] mx-auto tracking-[1.55px]
  `}
`;

const Business: React.FC = () => {
  return (
    <>
      <CustomBg fakeBg={BgFace}>
        <Box>
          <BoxContainer>
            <Title>Business Slogan</Title>
            <Text>Best responsibility and service for our customers</Text>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Desc>
          </BoxContainer>
        </Box>
      </CustomBg>
    </>
  );
};

export default Business;
