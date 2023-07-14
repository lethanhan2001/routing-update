import useInnerWidth from "../../hooks/useInnerWidth";
import { breakpoints } from "../../data/breakpoints";
import PlayBtn from "../../images/Play_button.png";
import HomeBg from "../../images/home.png";
import styled from "styled-components";
import tw from "twin.macro";
const AboutMain = styled("div")`
  ${tw`
 flex justify-center items-center flex-nowrap flex-1 my-[100px] ml-[10%] mr-[8%]
`}
`;

const Left = styled("div")`
  ${tw`
 w-1/2 ml-[7px]
`}
`;

const Right = styled("div")`
  ${tw`
 w-1/2 h-[350px]
`}
`;

const Images = styled.img`
  ${tw`
  w-full ml-5 mt-[-35px] h-[500px] object-cover
`}
`;

const WatchBox = styled("div")`
  ${tw`
      flex items-center mt-[50px]
    `}
`;

const Video = styled("div")`
  ${tw` flex items-center`}
`;

const Play = styled("img")`
  ${tw`
  ml-[43px]
`}
`;
const TextWatch = styled("p")`
  ${tw`
     ml-[11px] text-base font-semibold text-desc tracking-[2px]
    `}
`;

const Abouts = styled("div")`
  ${tw`
      leading-[25px] mt-8
    `}
`;
const TextAbout = styled("div")`
  margin-top: 20px;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #091156;

  @media (max-width: ${breakpoints.large}) {
    line-height: 40px;
  }
`;
const DescAbout = styled("div")`
  margin-top: 30px;
  width: 80%;
  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
  letter-spacing: 1.6px;
`;

const Title = styled("div")`
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  color: #ff64ae;
`;

const Span = styled("div")`
  width: 90%;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
  letter-spacing: 1.6px;
`;

const LearnBtn = styled("button")`
  width: 200px;
  letter-spacing: 2px;
  height: 58.36px;
  border-radius: 50px;
  background-color: #ff64ae;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
`;

const AboutMainTablet = styled("div")`
  ${tw`
      flex justify-center items-center flex-col flex-nowrap flex-1 my-[100px] mx-[10%]
    `}

  @media (max-width: ${breakpoints.small}) {
    margin: 100px 5%;
  }
`;

const LeftTablet = styled("div")`
  ${tw` w-full `}
`;

const RightTablet = styled("div")`
  ${tw` w-full `}
`;
const ImagesTablet = styled("img")`
  ${tw` w-full `}
`;

const AboutHome: React.FC = () => {
  const width: number = useInnerWidth();
  return (
    <>
      {width > 1200 ? (
        <AboutMain>
          <Left>
            <Abouts>
              <Title>About Us</Title>
              <TextAbout>We are the best beauty clinic</TextAbout>
              <DescAbout>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat. <br />{" "}
              </DescAbout>
              <Span>
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </Span>
            </Abouts>

            <WatchBox>
              <LearnBtn>Learn More</LearnBtn>
              <Video>
                <Play src={PlayBtn} alt="" />
                <TextWatch>Watch Video</TextWatch>
              </Video>
            </WatchBox>
          </Left>
          <Right>
            <Images src={HomeBg} alt="" />
          </Right>
        </AboutMain>
      ) : (
        <AboutMainTablet>
          <LeftTablet>
            <Abouts>
              <Title>About Us</Title>
              <TextAbout>We are the best beauty clinic</TextAbout>
              <DescAbout>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat. <br />{" "}
              </DescAbout>
              <Span>
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </Span>
            </Abouts>

            <WatchBox>
              <LearnBtn>Learn More</LearnBtn>
              <Video>
                <Play src={PlayBtn} alt="" />
                <TextWatch>Watch Video</TextWatch>
              </Video>
            </WatchBox>
          </LeftTablet>
          <RightTablet>
            <ImagesTablet src={HomeBg} alt="" />
          </RightTablet>
        </AboutMainTablet>
      )}
    </>
  );
};

export default AboutHome;
