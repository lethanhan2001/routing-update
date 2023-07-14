import React from "react";
import SatisBg from "../../images/teamImg/satisfaction.png";
import CustomBg from "../customBg";
import { styled } from "styled-components";
import tw from "twin.macro";
import { breakpoints } from "../../data/breakpoints";

const Head = styled.div`
  ${tw`
  mt-[-32px]
`}
`;

const Text = styled.div`
  ${tw`
   text-4xl font-semibold text-white  pt-[183px] pl-4 text-center w-[35%]
   mx-auto
   tracking-[0.2px]
`}
  @media (max-width: ${breakpoints.xlarge}) {
    width: 80%;
  }
`;
const Desc = styled.div`
  ${tw`
    w-[45%] text-center  mx-auto text-base font-normal text-[#cacaca] tracking-[1.6px] mt-4
`}
  @media (max-width: ${breakpoints.xlarge}) {
    width: 80%;
  }
`;
const Satisfaction = () => {
  return (
    <>
      <Head>
        <CustomBg fakeBg={SatisBg}>
          <Text>Customer satisfaction is our main goal</Text>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Desc>
        </CustomBg>
      </Head>
    </>
  );
};

export default Satisfaction;
