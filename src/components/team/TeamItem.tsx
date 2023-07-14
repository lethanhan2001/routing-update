import React from "react";
import { Team } from "../../types";
import styled from "styled-components";
import tw from "twin.macro";
import { breakpoints } from "../../data/breakpoints";
interface Item {
  item: Team;
}

const TeamBox = styled.div`
  ${tw`
   flex justify-evenly items-center mx-[4.5%] my-20
`}

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;
const Images = styled.img`
  ${tw`

`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
    margin: 0 auto;
  }
`;
const TeamImg = styled.div`
  ${tw`

`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

const TeamTitle = styled.p`
  ${tw`
  w-4/5 tracking-widest
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;
const TeamTitles = styled.div`
  ${tw`
   w-1/2 pl-[85px]  mb-4
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
    padding-left: 0;
    margin: 20px auto;
  }
`;
const TeamName = styled.p`
  ${tw`
  text-lg text-main font-semibold mr-1 mb-5
`}
`;
const Span = styled.p`
  ${tw`
  text-sm italic ml-1 mb-4
`}
`;
const Line = styled.div`
  ${tw`
  mb-4 ml-[2px]
`}
`;
const TeamItem: React.FC<Item> = ({ item }) => {
  return (
    <>
      <TeamBox>
        <TeamImg>
          {" "}
          <Images src={item.image} alt="" />
        </TeamImg>
        <TeamTitles>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TeamName>{item.name}</TeamName> <Line>/</Line>{" "}
            <Span>{item.text}</Span>
          </div>
          <TeamTitle>{item.title}</TeamTitle>
        </TeamTitles>
      </TeamBox>
    </>
  );
};

export default TeamItem;
