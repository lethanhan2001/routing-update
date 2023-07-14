import { Profess } from "../../types";
import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter (1).png";
import Instagram from "../../images/Instagram.png";
import styled from "styled-components";
import tw from "twin.macro";
const BoxItem = styled.div`
  ${tw`
  w-[270px] h-[458px] bg-white shadow-2xl rounded-[42px] px-[5px] text-center
`}

  &:nth-child(2) {
    width: 424px;
    height: 626px;
    background: #fff;
    box-shadow: 10px 25px 50px 25px #efeff8;
    border-radius: 42px;
  }
`;

const Images = styled.img`
  ${tw`mx-auto my-[-12px]`}
`;

const Img = styled.img`
  ${tw`
    mx-auto mt-[93px] mb-[50px]
  `}
`;

const BoxImages = styled.div`
  ${tw`
     mt-[22px] mr-[5px]
  `}
`;
const CenterImages = styled.div``;
const BoxImagesLast = styled.div`
  ${tw`
     mt-[22px] ml-[10px]
  `}
`;

const Name = styled.p`
  ${tw`
  text-base font-semibold text-title mt-[63px] mb-4 mr-[5px] 
`}
`;

const Title = styled.h1`
  ${tw`
  text-lg font-semibold text-main mt-[-7px] mr-0 tracking-[0.6px] mb-[15px]
`}
`;

const Desc = styled.span`
  ${tw`
  text-sm font-normal text-desc tracking-[1.6px] 
`}
`;

const DescCenter = styled.span`
  ${tw`
  text-sm font-normal text-desc tracking-[1.4px] px-[60px] py-0 flex items-center mt-3
`}
`;

const BoxIcons = styled.div`
  ${tw`
  flex justify-center items-center mt-[34px] mr-[10px]
`}
`;
const BoxIconsLast = styled.div`
  ${tw`
  flex justify-center items-center mt-[34px]
`}
`;

const Icons = styled.img``;
const IconsCenter = styled.img`
  ${tw` mt-[10px ] ml-2`}
`;

const NameCenter = styled.p`
  ${tw`
  text-base font-semibold   text-title 
`}
`;
const TitleCenter = styled.p`
  ${tw`
  text-lg font-semibold text-main mt-[10px] ml-[5px] mr-0 tracking-[0.6px] mb-[17px]
`}
`;

interface ProfessItems {
  item: Profess;
}
const ProfessItem: React.FC<ProfessItems> = ({ item }) => {
  return (
    <>
      <BoxItem>
        {item.id === 2 ? (
          <CenterImages>
            <Img src={item.image} alt="" />
          </CenterImages>
        ) : item.id === 3 ? (
          <BoxImagesLast>
            <Images src={item.image} alt="" />
          </BoxImagesLast>
        ) : (
          <BoxImages>
            <Images src={item.image} alt="" />
          </BoxImages>
        )}
        {item.id === 2 ? (
          <>
            <NameCenter>{item.name}</NameCenter>
            <TitleCenter>{item.username}</TitleCenter>
          </>
        ) : (
          <>
            <Name>{item.name}</Name>
            <Title>{item.username}</Title>
          </>
        )}

        {item.id === 2 ? (
          <DescCenter>{item.title}</DescCenter>
        ) : (
          <Desc>{item.title}</Desc>
        )}
        {item.id === 2 ? (
          <BoxIcons>
            <IconsCenter src={Twitter} alt="" />
            <IconsCenter src={Facebook} alt="" />
            <IconsCenter src={Instagram} alt="" />
          </BoxIcons>
        ) : item.id === 3 ? (
          <BoxIconsLast>
            <Icons src={Twitter} alt="" />
            <Icons src={Facebook} alt="" />
            <Icons src={Instagram} alt="" />
          </BoxIconsLast>
        ) : (
          <BoxIcons>
            <Icons src={Twitter} alt="" />
            <Icons src={Facebook} alt="" />
            <Icons src={Instagram} alt="" />
          </BoxIcons>
        )}
      </BoxItem>
    </>
  );
};

export default ProfessItem;
