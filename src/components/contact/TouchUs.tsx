import React from "react";
import Option from "../home/Option";
import { styled } from "styled-components";
import tw from "twin.macro";
import { contactData } from "../../data";
import { Contact } from "../../types";
import ContactItem from "./ContactItem";
const Head = styled.div`
  ${tw`
  mt-[-15px]
`}
`;

const BoxTouch = styled.div`
  ${tw`
  flex justify-around items-center flex-1 gap-y-10 flex-wrap text-center mt-[90px] mx-[13.1%]
`}
`;

const TouchUs = () => {
  return (
    <>
      <Head>
        <Option
          title="Get in Touch"
          text="Get direct handling by us"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </Head>

      <BoxTouch>
        {contactData.map((item: Contact) => (
          <ContactItem item={item} key={item.id} />
        ))}
      </BoxTouch>
    </>
  );
};

export default TouchUs;
