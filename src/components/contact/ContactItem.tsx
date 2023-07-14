import React from "react";
import { Contact } from "../../types";
import { styled } from "styled-components";
import tw from "twin.macro";
interface Item {
  item: Contact;
}

const BoxItem = styled.div`
  ${tw`
   w-[270px] h-[262px]  rounded-[50px]
`}

  &:nth-child(2) {
    width: 424px;
    height: 402px;
    border-radius: 50px;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1);
  }
`;
const Avatar = styled.img`
  ${tw`
   mx-auto mt-1 
`}
`;
const Text = styled.h6`
  ${tw`
   mt-[48px] mb-3
`}
`;
const Title = styled.h1`
  ${tw`
 text-2xl
`}
`;
const Desc = styled.p`
  ${tw`
  tracking-[0.6px] mt-[8px]
`}
`;
const Desc2 = styled.p`
  ${tw`
  w-[60%] mx-auto mt-3 leading-[22px]
`}
`;
const Avatar2 = styled.img`
  ${tw`
  mx-auto mt-20 mb-[-10px]
`}
`;
const ContactItem: React.FC<Item> = ({ item }) => {
  return (
    <>
      <BoxItem>
        {item.id === 2 ? (
          <Avatar2 src={item.image} alt="" />
        ) : (
          <Avatar src={item.image} alt="" />
        )}

        <Text>{item.text}</Text>
        <Title>{item.title}</Title>
        {item.id === 2 ? (
          <Desc2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Desc2>
        ) : (
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Desc>
        )}
      </BoxItem>
    </>
  );
};

export default ContactItem;
