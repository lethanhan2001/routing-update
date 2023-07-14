import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AngleBg from "../../images/serviceImg/angle-up.png";
import AngleDownBg from "../../images/serviceImg/angle-down.png";
import bgQuestion from "../../images/serviceImg/faq.png";
import { breakpoints } from "../../data/breakpoints";
const Title = styled.h1`
  ${tw`
  text-4xl font-semibold text-main text-center mt-[120px] tracking-[.7px] ml-4
`}
`;
const BoxFAQ = styled.div`
  ${tw`
   
`}
`;
const Line = styled.div`
  ${tw`
    w-10 bg-[#ff64ae] h-[5px] mx-auto mt-4 rounded-[10px]
`}
`;
const Question = styled.div`
  ${tw`
    flex justify-around items-center mt-[70px]
`}
`;
const Question2 = styled.div`
  ${tw`
    flex justify-between items-center mt-[28px] mx-[16.5%]
`}
  @media (max-width: ${breakpoints.medium}) {
    margin: 40px 20px;
  }
`;

const Text = styled.p`
  ${tw`
   text-base font-semibold text-main tracking-[1.8px] ml-8
`}
`;
const Angle = styled.img`
  ${tw`
   mr-4
`}
`;

const BoxQuestion = styled.div`
  ${tw`
   mx-[16%] h-[216px] mt-4 border-t-2 border-black pl-20 pr-28 tracking-[1.45px]
`}
  @media (max-width: ${breakpoints.medium}) {
    margin: 0 20px;
    padding: 0 10px;
    height: 290px;
  }
`;
const TextQA = styled.div`
  ${tw`
   text-sm font-normal text-desc mt-12 italic
`}
`;
const TextQA2 = styled.div`
  ${tw`
   text-sm font-normal text-desc mt-6 italic
`}
`;
const FAQ = () => {
  return (
    <>
      <BoxFAQ>
        <Title>Services FAQ’s</Title>
        <Line></Line>

        <Question>
          <Text>Is beauty consultation handled thoroughly?</Text>
          <Angle src={AngleBg} alt=""></Angle>
        </Question>

        <BoxQuestion style={{ backgroundImage: `url(${bgQuestion})` }}>
          <TextQA>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </TextQA>
          <TextQA2>
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla
          </TextQA2>
        </BoxQuestion>

        <Question2>
          <Text>Can I be beautiful in an instant time?</Text>
          <Angle src={AngleDownBg} alt=""></Angle>
        </Question2>
        <Question2>
          <Text>
            Are there any side effects to the treatment methods or treatments at
            this clinic?
          </Text>
          <Angle src={AngleDownBg} alt=""></Angle>
        </Question2>
        <Question2>
          <Text>
            Do professionals have accreditation in their respective fields?
          </Text>
          <Angle src={AngleDownBg} alt=""></Angle>
        </Question2>
      </BoxFAQ>
    </>
  );
};

export default FAQ;
