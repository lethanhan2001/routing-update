import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { breakpoints } from "../../data/breakpoints";
const BoxQuota = styled.div`
  ${tw`
   flex justify-around items-center mt-[118px] ml-10 mx-[9%] mb-[-25px]
`}

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: start;
    margin-left: 15px;
  }
  @media (max-width: ${breakpoints.small}) {
    margin-left: -25px;
  }
`;
const TitleQuota = styled.h6`
  ${tw`
 
`}
`;
const Left = styled.h6`
  ${tw`
   w-1/2 ml-10
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;
const TextQuota = styled.h1`
  ${tw`
  mt-3 tracking-[0.2px] leading-[44px]
`}
`;
const DescQuota = styled.p`
  ${tw`
 w-[90%] tracking-[1.55px] mt-6
`}
`;
const BtnQuota = styled.button`
  ${tw`
  w-[320px] tracking-[2px] h-[58.36px] rounded-[50px] bg-[#ff64ae] text-white text-base 
  font-semibold border-none outline-none ml-[-20px]
`}

  @media (max-width: ${breakpoints.medium}) {
    margin-top: 30px;
    margin-left: 30px;
  }
  @media (max-width: ${breakpoints.medium}) {
    margin-top: 30px;
    margin-left: 30px;
  }
`;
const Quota = () => {
  return (
    <>
      <BoxQuota>
        <Left>
          <TitleQuota>Get The Quota</TitleQuota>
          <TextQuota>
            Want to be handled by our professional team immediately?
          </TextQuota>
          <DescQuota>
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </DescQuota>
        </Left>

        <BtnQuota>Make an Appointment</BtnQuota>
      </BoxQuota>
    </>
  );
};

export default Quota;
