import React from "react";
import Option from "../home/Option";
import styled from "styled-components";
import tw from "twin.macro";
import Logo1 from "../../images/aboutImg/LOGO1.png";
import Logo2 from "../../images/aboutImg/LOGO2.png";
import Logo3 from "../../images/aboutImg/LOGO3.png";
import Logo4 from "../../images/aboutImg/LOGO4.png";
import Logo5 from "../../images/aboutImg/LOGO5.png";

const Head = styled.div`
  ${tw`
  mr-[31px]
`}
`;
const BoxLogo = styled.div`
  ${tw`
   flex justify-evenly flex-wrap gap-y-10 items-center ml-[15%] mr-[13%] pt-12
`}
`;
const Logo = styled.img`
  ${tw`
  mr-[31px]
`}
`;
const Client = () => {
  return (
    <>
      <Head>
        <Option
          title="Our Clients"
          text="Well-known agencies"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Head>

      <BoxLogo>
        <Logo src={Logo1} alt="" />
        <Logo src={Logo2} alt="" />
        <Logo src={Logo3} alt="" />
        <Logo src={Logo4} alt="" />
        <Logo src={Logo5} alt="" />
      </BoxLogo>
    </>
  );
};

export default Client;
