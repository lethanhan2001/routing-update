import { Services } from "../../types";
import styled from "@emotion/styled";
import tw from "twin.macro";
interface ServicesItem {
  item: Services;
}

const BoxServices = styled("div")`
  ${tw`
   w-[342px] h-[458px] bg-white rounded-[42px]  py-5 px-[10px] text-center shadow-xl
`}
`;

const ImageItem = styled("div")`
  ${tw`
   my-10 mx-auto text-center ml-3 
`}
`;

const Img = styled("img")`
  ${tw`mx-auto first:mr-[40px] `}
`;

const Title = styled("span")`
  ${tw`
   text-sm font-normal mt-5 py-0 px-3 text-desc  flex justify-center items-center tracking-[1.8px]
`}
`;

const Name = styled("p")`
  ${tw`
  text-lg  font-semibold mt-[55px] ml-2 tracking-[.4px] text-main
`}
`;

const ServiceItem: React.FC<ServicesItem> = ({ item }) => {
  return (
    <>
      <BoxServices>
        <ImageItem>
          <Img src={item.image} alt="" />
        </ImageItem>
        <Name>{item.name}</Name>
        <Title>{item.title}</Title>
      </BoxServices>
    </>
  );
};

export default ServiceItem;
