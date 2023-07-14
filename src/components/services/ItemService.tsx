import React from "react";
import { Services2 } from "../../types";
import styled from "styled-components";
import tw from "twin.macro";
import btnRight from "../../images/serviceImg/angle-double-right.png";
import { breakpoints } from "../../data/breakpoints";
interface ItemSr {
  item: Services2;
}

const GiftService = styled.div`
  ${tw`
   flex justify-center items-center
`}

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;
const Info = styled.div`
  ${tw`
    w-1/2 ml-20  mt-[43px]
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;
const Name = styled.h6`
  ${tw`
    ml-4 tracking-[0.4px] mt-[23px] mb-3
`}
`;
const Text = styled.h1`
  ${tw`
    ml-4 leading-[44px] 
`}
  @media (max-width: ${breakpoints.small}) {
    width: 90%;
    font-size: 30px;
  }
`;
const Title = styled.p`
  ${tw`
  ml-4 pt-4 mb-[25px] w-[80%] tracking-[1.5px]
`}
`;
const Images = styled.div`
  ${tw`
   w-1/2 mt-16 ml-[6%]
`}

  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
    margin: 0 auto;
  }
`;
const Image = styled.img`
  ${tw`

`}
  @media (max-width: ${breakpoints.medium}) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Info2 = styled.div`
  ${tw`
    w-1/2 ml-16 mt-[69px]
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;
const Name2 = styled.h6`
  ${tw`
    ml-4 tracking-[0.5px] mt-[23px] mb-3
`}
`;
const Text2 = styled.h1`
  ${tw`
    ml-4 leading-[44px] w-[70%]
`}
  @media (max-width: ${breakpoints.small}) {
    width: 90%;
    font-size: 30px;
  }
`;
const Title2 = styled.p`
  ${tw`
  ml-4 pt-4 mb-[25px] w-[80%] tracking-[1.5px]
`}
`;
const Images2 = styled.div`
  ${tw`
   w-1/2 pt-24 ml-[10%]
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;
const Image2 = styled.img`
  ${tw`

`}
  @media (max-width: ${breakpoints.medium}) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Info3 = styled.div`
  ${tw`
    w-1/2 ml-20 mt-[63px]
`}

  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;
const Name3 = styled.h6`
  ${tw`
    ml-4 tracking-[0.5px] mt-[23px] mb-3
`}
`;
const Text3 = styled.h1`
  ${tw`
    ml-4 leading-[44px] w-[70%]
`}
  @media (max-width: ${breakpoints.small}) {
    width: 90%;
    font-size: 30px;
  }
`;
const Title3 = styled.p`
  ${tw`
  ml-4 pt-4 mb-[25px] w-[80%] tracking-[1.5px] 
`}
`;
const Images3 = styled.div`
  ${tw`
   w-1/2 pt-24 ml-[6%]
`}
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;
const Image3 = styled.img`
  ${tw`

`}
  @media (max-width: ${breakpoints.medium}) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Make = styled.p`
  ${tw`
 text-base font-semibold text-main 
`}
`;
const Right = styled.img`
  ${tw`
   ml-3
`}
`;
const End = styled.div`
  ${tw`
   flex items-center  ml-4 tracking-[1.9px]
`}
`;

const ItemService: React.FC<ItemSr> = ({ item }) => {
  return (
    <>
      <GiftService>
        {item.id === 2 ? (
          <>
            <Info2>
              <Name2>{item.name}</Name2>
              <Text2>{item.text}</Text2>
              <Title2>{item.title}</Title2>
              <End>
                <Make>Make an Appointment</Make>
                <Right src={btnRight} alt="" />
              </End>
            </Info2>
            <Images2>
              <Image2 src={item.image} />
            </Images2>
          </>
        ) : item.id === 3 ? (
          <>
            <Images3>
              <Image3 src={item.image} />
            </Images3>
            <Info3>
              <Name3>{item.name}</Name3>
              <Text3>{item.text}</Text3>
              <Title3>{item.title}</Title3>
              <End>
                <Make>Make an Appointment</Make>
                <Right src={btnRight} alt="" />
              </End>
            </Info3>
          </>
        ) : (
          <>
            <Images>
              <Image src={item.image} />
            </Images>
            <Info>
              <Name>{item.name}</Name>
              <Text>{item.text}</Text>
              <Title>{item.title}</Title>
              <End>
                <Make>Make an Appointment</Make>
                <Right src={btnRight} alt="" />
              </End>
            </Info>
          </>
        )}
      </GiftService>
    </>
  );
};

export default ItemService;
