import React from "react";
import Option from "../home/Option";
import { styled } from "styled-components";
import tw from "twin.macro";
import Logo from "../../images/teamImg/logo.png";
import Left from "../../images/teamImg/arrow-left.png";
import Right from "../../images/teamImg/arrow-right.png";
import StarImg from "../../images/teamImg/Star.png";
import { breakpoints } from "../../data/breakpoints";
const Head = styled.div`
  ${tw`
  mt-[-10px]
`}
`;
const BoxTestimonial = styled.div`
  ${tw`
   mb-[-37px]
`}
`;
const LogoImg = styled.img`
  ${tw`
   mx-auto pt-1
`}
`;
const BoxSlider = styled.div`
  ${tw`
   flex items-center mx-[23%]
`}
  @media (max-width: ${breakpoints.large}) {
    width: 80%;
    margin: 0 auto;
  }
`;
const ImgLeft = styled.img`
  ${tw`

`}
`;
const ImgRight = styled.img`
  ${tw`

`}
`;
const Title = styled.p`
  ${tw`
   w-[75%] tracking-[1.75px] pl-1 mx-auto text-center mt-12 text-sm
`}
`;

const Star = styled.img`
  ${tw`
  mx-auto mt-9
`}
`;
const Testimonial = () => {
  return (
    <>
      <Head>
        <Option
          title="Our Testimonials"
          text="What our customer says"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </Head>

      <BoxTestimonial>
        <LogoImg src={Logo} alt="" />

        <BoxSlider>
          <ImgLeft src={Left} alt="" />
          <Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            metus tincidunt laoreet ultricies condimentum ac integer aliquam.
            Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem
            elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis
            gravida blandit.
          </Title>
          <ImgRight src={Right} alt="" />
        </BoxSlider>

        <Star src={StarImg} alt="" />
      </BoxTestimonial>
    </>
  );
};

export default Testimonial;
