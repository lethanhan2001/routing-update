import React from "react";
import ContactHome from "../home/ContactHome";
import { styled } from "styled-components";
import tw from "twin.macro";
import MapBg from "../../images/contactImg/map.png";
import { breakpoints } from "../../data/breakpoints";
const HeaderContact = styled.div`
  ${tw`
  mx-[10.5%]
`}
`;
const BoxContact = styled.div`
  ${tw`
  flex justify-around items-center
`}
  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  ${tw`
  w-[50%] mt-[95px] leading-[47px]
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.small}) {
    margin-right: 30px;
  }
`;
const Title = styled.h6`
  ${tw`
  
`}
`;
const Text = styled.h1`
  ${tw`
  
`}
`;
const Right = styled.p`
  ${tw`
    w-[41.5%] ml-[200px] tracking-widest mt-28
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
    margin-left: 0;
    margin: 60px 0;
  }
  @media (max-width: ${breakpoints.small}) {
    margin-right: 30px;
  }
`;

const BoxForm = styled.div`
  ${tw`
  mt-[-27px]
`}
`;

const Map = styled.div`
  ${tw`
   w-full h-[418px] mt-28
`}
`;

const ContactUs = () => {
  return (
    <>
      <HeaderContact>
        <BoxContact>
          <Left>
            <Title>Contact Us</Title>
            <Text>Contact service for our customers</Text>
          </Left>

          <Right>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Right>
        </BoxContact>
      </HeaderContact>
      <BoxForm>
        <ContactHome bgContact="" text="Contact service for our customers" />
      </BoxForm>

      <Map style={{ backgroundImage: `url(${MapBg})` }}></Map>
    </>
  );
};

export default ContactUs;
