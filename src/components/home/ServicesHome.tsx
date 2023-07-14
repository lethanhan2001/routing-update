import styled from "@emotion/styled";
import tw from "twin.macro";
import Option from "./Option";
import { servicesData } from "../../data";
import { Services } from "../../types";
import ServiceItem from "./ServiceItem";
import { breakpoints } from "../../data/breakpoints";

const Space = styled("div")`
  ${tw`
   flex justify-center items-center mt-[-20px]
 `}
`;

const One = styled("div")`
  ${tw` w-[14.82px] h-[3.09px] bg-[#eeeeee] rounded-[50px]`}
`;

const Two = styled("div")`
  ${tw` w-[25.31px] h-[8.15px] bg-[#414880] my-0 mx-[10px] rounded-[50px]`}
`;

const Three = styled("div")`
  ${tw` w-[14.82px] h-[3.09px] bg-[#eeeeee]  rounded-[50px]`}
`;

const BoxModals = styled("div")`
  ${tw`
   flex justify-evenly mt-[80px] gap-y-10 flex-wrap ml-[calc(4% + 25px)] mr-[6%] 
 `}

  @media (max-width: ${breakpoints.small}) {
    margin: 0 auto;
  }
`;

const ServicesHome = () => {
  return (
    <>
      <Space>
        <One></One>
        <Two></Two>
        <Three></Three>
      </Space>

      <Option
        title="Main Services"
        text="Learn services to focus
on your beauty"
        desc="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
      />

      <BoxModals>
        {servicesData.map((item: Services) => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </BoxModals>
    </>
  );
};

export default ServicesHome;
