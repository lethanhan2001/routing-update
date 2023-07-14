import styled from "styled-components";
import tw from "twin.macro";
import { breakpoints } from "../../data/breakpoints";
import Image from "../../images/animationheader.png";

const BtnDetails = styled.div`
  ${tw`tracking-[2px]`}
`;

const Content = styled.div`
  ${tw`
  flex justify-center items-center tracking-[1px] leading-6 my-[134px] mx-[calc(9%)]
`}

  @media screen and (max-width: ${breakpoints.large}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    letter-spacing: 1px;
  }
`;

const Left = styled.div`
  ${tw`
    w-2/5 mt-[-28px]
  `}

  @media (max-width: ${breakpoints.large}) {
    width: 100%;
  }
`;

const Details = styled.button`
  ${tw`
 w-[200px] h-[58.36px] mt-[30px] rounded-[50px] text-white text-base border-none outline-none tracking-[1.5px] bg-[#ff64ae] font-semibold
`}
`;
const Head = styled.h1`
  ${tw`
  text-5xl font-semibold tracking-[0.7px] leading-[50px] text-main mt-0 mb-[20px]
`}
`;

const Desc = styled.p`
  ${tw`
    text-base w-full font-medium tracking-[1.7px] text-main
  `}
`;

const Right = styled.div`
  ${tw`
 w-1/2
`}
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

const Images = styled.img`
  ${tw`
    w-full mt-[8px] mr-[10px] mb-[26px] ml-[31px]
  `}

  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    margin: 30px auto;
    text-align: center;
  }
`;

const MainHeader = styled.div``;

const Header = () => {
  return (
    <>
      <MainHeader>
        <Content>
          <Left>
            <Head>Clinic & beauty consultant</Head>
            <Desc>
              It is a long established fact that a reader will be by the
              readable content of a page.
            </Desc>
            <BtnDetails>
              {" "}
              <Details>More Details</Details>
            </BtnDetails>
          </Left>
          <Right>
            <Images src={Image} alt="" />
          </Right>
        </Content>
      </MainHeader>
    </>
  );
};

export default Header;
