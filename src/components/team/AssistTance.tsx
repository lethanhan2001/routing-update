import React from "react";
import Option from "../home/Option";
import styled from "styled-components";
import tw from "twin.macro";
import { teamData } from "../../data";
import { Team } from "../../types";
import TeamItem from "./TeamItem";

const Head = styled.div`
  ${tw`
  mt-[150px]
`}
`;
const Container = styled.div`
  ${tw`
  mt-[105px]
`}
`;

const AssistTance = () => {
  return (
    <>
      <Head>
        <Option
          title="Assistance Team"
          text="Meet the pro assistance"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </Head>

      <Container>
        {teamData.map((item: Team) => (
          <TeamItem key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
};

export default AssistTance;
