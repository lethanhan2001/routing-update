import React from "react";
import CustomBg from "../customBg";
import bgPlay from "../../images/serviceImg/Play Button.png";
import styled from "styled-components";
import tw from "twin.macro";
import { breakpoints } from "../../data/breakpoints";
import { CustomerBgs } from "../../data";

const Head = styled.div`
  ${tw`
  mt-[-28px]
`}
`;

const Box = styled.div`
  ${tw`
   flex justify-evenly flex-1 flex-wrap items-center h-full mx-[10.5%]
`}
  @media (max-width: ${breakpoints.xlarge}) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  ${tw`
   w-1/2 
`}
  @media (max-width: ${breakpoints.xlarge}) {
    width: 100%;
  }
`;
const Right = styled.div`
  ${tw`
   w-1/2
`}
  @media (max-width: ${breakpoints.xlarge}) {
    width: 100%;
    margin: 0 auto;
  }
`;
const Text = styled.div`
  ${tw`
   text-4xl font-semibold text-white mt-[-3px] tracking-[0.5px] 
`}
`;
const Desc = styled.div`
  ${tw`
  text-base font-normal mt-8 text-[#cacaca] w-[100%] tracking-[01.6px]
`}
`;
const Images = styled.img`
  ${tw`
   ml-[156px]
`}
  @media (max-width: ${breakpoints.xlarge}) {
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: ${breakpoints.small}) {
    width: 80%;
    margin: 0 auto;
  }
`;
const Customer: React.FC = () => {
  return (
    <>
      <Head>
        <CustomBg fakeBg={CustomerBgs}>
          <Box>
            <Left>
              <Text>Best responsibility and service for our customers</Text>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </Desc>
            </Left>
            <Right>
              <Images src={bgPlay} alt="" />
            </Right>
          </Box>
        </CustomBg>
      </Head>
    </>
  );
};

export default Customer;
