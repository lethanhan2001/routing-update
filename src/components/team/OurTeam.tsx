import React from "react";
import Option from "../home/Option";
import styled from "styled-components";
import tw from "twin.macro";
import ProfessHome from "../home/ProfessHome";

const Head = styled.div`
  ${tw`
  mt-[-20px] mr-20
`}
`;

const Profess = styled.div`
  ${tw`
  mt-[-20px] 
`}
`;
const OurTeam = () => {
  return (
    <>
      <Head>
        <Option
          title="Our Team"
          text="We are Professional"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </Head>

      <Profess>
        <ProfessHome title="" />
      </Profess>
    </>
  );
};

export default OurTeam;
