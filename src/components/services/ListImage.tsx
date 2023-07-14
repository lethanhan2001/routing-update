import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Img1 from "../../images/serviceImg/img1.png";
import Img2 from "../../images/serviceImg/image2.png";
import Img3 from "../../images/serviceImg/img3.png";
import Img4 from "../../images/serviceImg/img4.png";
import { servicesData2 } from "../../data";
import { Services2 } from "../../types";
import ItemService from "./ItemService";
import { breakpoints } from "../../data/breakpoints";

const Container = styled.div`
  ${tw``}
`;

const BoxImage = styled.div`
  ${tw`mx-[11.7%]`}
`;
const Image3 = styled.img`
  ${tw` h-full`}
`;
const Image4 = styled.img`
  ${tw`mr-1`}
`;

const Image1 = styled.img`
  ${tw``}
`;
const Image2 = styled.img`
  ${tw`h-full mr-1`}
`;

const Top = styled.div`
  ${tw`
  flex justify-between flex-wrap gap-y-16 mt-[65px] items-center
`}
`;
const Bottom = styled.div`
  ${tw`
  flex justify-between flex-wrap gap-y-16 mt-[68px] items-center
`}
`;

const BoxContainer = styled.div`
  ${tw`
   mt-[73px] mx-[5%]
`}
  @media (max-width: ${breakpoints.small}) {
  }
`;

const List = styled.div`
  ${tw`
   
`}
  @media (max-width: ${breakpoints.small}) {
    margin: 0 -50px;
    margin-right: 10px;
  }
`;
const ListImage = () => {
  return (
    <>
      <Container>
        <BoxImage>
          <Top>
            <Image1 src={Img1} alt="" />
            <Image2 src={Img2} alt="" />
          </Top>
          <Bottom>
            <Image3 src={Img3} alt="" />
            <Image4 src={Img4} alt="" />
          </Bottom>
        </BoxImage>
      </Container>

      <BoxContainer>
        <List>
          {servicesData2.map((item: Services2) => (
            <ItemService key={item.id} item={item} />
          ))}
        </List>
      </BoxContainer>
    </>
  );
};

export default ListImage;
