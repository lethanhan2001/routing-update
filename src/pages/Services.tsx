import React from "react";
import Option from "../components/home/Option";
import tw from "twin.macro";
import styled from "styled-components";
import ListImage from "../components/services/ListImage";
import Customer from "../components/services/Customer";
import FAQ from "../components/services/FAQ";

const Head = styled.div`
  ${tw`
  mt-[-20px]
`}
`;
const Services = () => {
  return (
    <>
      <Head>
        <Option
          title="Our Services"
          text="We focus on your beauty"
          desc="Lorem ipsum dolor sit amet"
        />
        <ListImage />
        <Customer />
        <FAQ />
      </Head>
    </>
  );
};

export default Services;
