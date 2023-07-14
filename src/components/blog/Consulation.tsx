import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import {
  FB,
  IG,
  LK,
  TW,
  blogDta,
  recent1Img,
  recent2Img,
  recent3Img,
} from "../../data";
import { Blog } from "../../types";
import BlogItem from "./BlogItem";
import LogoSearch from "../../images/blogImg/search.png";
import { breakpoints } from "../../data/breakpoints";
import useInnerWidth from "../../hooks/useInnerWidth";
const ConsulationBox = styled.div`
  ${tw`
  mt-[104px] 
`}
`;
const Main = styled.div`
  ${tw`
   flex justify-center  mx-[0.2%] mb-[-88px]
`}

  @media (max-width: ${breakpoints.xlarge}) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  ${tw`
   pl-[148px]
`}
  @media (max-width: ${breakpoints.xlarge}) {
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }
`;
const Right = styled.div`
  ${tw`
   w-full
   
`}

  @media (max-width: ${breakpoints.xlarge}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;
const ImgSearch = styled.img`
  ${tw`
   ml-[-46px] mt-[-32px]
`}
`;

const RecentBox = styled.div`
  ${tw`
  w-[350px] h-[471px] shadow-xl mt-8 rounded-[25px] ml-[-4px]
`}
  @media (max-width: ${breakpoints.medium}) {
  }
`;
const Title = styled.h4`
  ${tw`
   text-base font-semibold text-main px-12 pt-[60px] tracking-[0.4px]
`}
`;
const PostList = styled.div`
  ${tw`
     px-12 pt-1.5
`}
`;
const PostItem = styled.div`
  ${tw`
   flex justify-center  my-[23.5px]
`}
`;
const ImgPost = styled.img`
  ${tw`
   mt-0
`}
`;

const Categories = styled.div`
  ${tw`
   w-[350px] h-[250px] shadow-xl rounded-[20px] mt-20 ml-[-6px]`}
`;

const Info = styled.div`
  ${tw`
   pl-[26px] 
`}
`;
const Date = styled.h6`
  ${tw`
 font-semibold text-sm text-title tracking-[1.5px]
`}
`;
const Desc = styled.p`
  ${tw`
   text-xs font-normal text-[#8b8b8b] tracking-[1px] w-[103%] mt-2
`}
`;

const Item = styled.p`
  ${tw`
    px-12 mt-[27px] leading-[1px] 
`}
`;
const Tags = styled.p`
  ${tw`
    w-[350px] h-[274px] shadow-2xl rounded-[25px] ml-[-4px] mt-[82px]
`}
`;
const GridTags = styled.div`
  ${tw`
    grid grid-cols-3 gap-y-4 gap-x-4 pl-[43px] pr-[52px] mt-6
`}
`;
const Tag = styled.div`
  ${tw`
    w-[82px] h-[26px] rounded-[50px] shadow-xl text-center
`}
`;

const Social = styled.div`
  ${tw`
  w-[350px] h-[213px] rounded-[25px] shadow-xl mt-[84px] ml-[-5px]
`}
`;
const Icons = styled.div`
  ${tw`
   flex mt-2  justify-center 
`}
`;
const Icon = styled.img`
  ${tw`
  w-[93px] h-[93px] mx-[-10px]
`}
`;
const Pagination = styled.div`
  ${tw`
  flex justify-center items-center mt-[67px] mb-[-68px]
`}
`;

const One = styled.div`
  ${tw`
    mx-[18px]
`}

  &:first-child {
    background-color: #091156;
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 12px;
  }
`;

const Grid = styled.div`
  ${tw`
    grid grid-cols-2  gap-x-6 mb-24
`}

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Consulation = () => {
  const width = useInnerWidth();
  return (
    <>
      <ConsulationBox>
        <Main>
          <Left>
            {blogDta.map((item: Blog) => (
              <BlogItem key={item.id} item={item} />
            ))}
          </Left>
          <Right>
            <ImgSearch src={LogoSearch} alt="" />
            {width > 1200 ? (
              <>
                <RecentBox>
                  <Title>Recents Posts</Title>
                  <PostList>
                    <PostItem>
                      <ImgPost src={recent1Img} alt="" />
                      <Info>
                        <Date>01 jan 2021</Date>
                        <Desc>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </Desc>
                      </Info>
                    </PostItem>
                    <PostItem>
                      <ImgPost src={recent2Img} alt="" />
                      <Info>
                        <Date>01 jan 2021</Date>
                        <Desc>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </Desc>
                      </Info>
                    </PostItem>
                    <PostItem>
                      <ImgPost src={recent3Img} alt="" />
                      <Info>
                        <Date>01 jan 2021</Date>
                        <Desc>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </Desc>
                      </Info>
                    </PostItem>
                  </PostList>
                </RecentBox>

                <Categories>
                  <Title>Categories</Title>
                  <Item>Consulation</Item>
                  <Item>Beauty</Item>

                  <Item>Treatments</Item>

                  <Item>News</Item>
                </Categories>

                <Tags>
                  <Title>Cloud Tags</Title>
                  <GridTags>
                    <Tag>beauty</Tag>
                    <Tag>cute</Tag>
                    <Tag>skin</Tag>
                    <Tag>glow</Tag>
                    <Tag>style</Tag>
                    <Tag>clinic</Tag>
                    <Tag>style</Tag>
                    <Tag>great</Tag>
                    <Tag>cute</Tag>
                  </GridTags>
                </Tags>

                <Social>
                  <Title>Social Connect</Title>
                  <Icons>
                    <Icon src={FB} alt="" />
                    <Icon src={TW} alt="" />
                    <Icon src={IG} alt="" />
                    <Icon src={LK} alt="" />
                  </Icons>
                </Social>
              </>
            ) : (
              <Grid>
                <RecentBox>
                  <Title>Recents Posts</Title>
                  <PostList>
                    <PostItem>
                      <ImgPost src={recent1Img} alt="" />
                      <Info>
                        <Date>01 jan 2021</Date>
                        <Desc>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </Desc>
                      </Info>
                    </PostItem>
                    <PostItem>
                      <ImgPost src={recent2Img} alt="" />
                      <Info>
                        <Date>01 jan 2021</Date>
                        <Desc>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </Desc>
                      </Info>
                    </PostItem>
                    <PostItem>
                      <ImgPost src={recent3Img} alt="" />
                      <Info>
                        <Date>01 jan 2021</Date>
                        <Desc>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </Desc>
                      </Info>
                    </PostItem>
                  </PostList>
                </RecentBox>

                <Categories>
                  <Title>Categories</Title>
                  <Item>Consulation</Item>
                  <Item>Beauty</Item>

                  <Item>Treatments</Item>

                  <Item>News</Item>
                </Categories>

                <Tags>
                  <Title>Cloud Tags</Title>
                  <GridTags>
                    <Tag>beauty</Tag>
                    <Tag>cute</Tag>
                    <Tag>skin</Tag>
                    <Tag>glow</Tag>
                    <Tag>style</Tag>
                    <Tag>clinic</Tag>
                    <Tag>style</Tag>
                    <Tag>great</Tag>
                    <Tag>cute</Tag>
                  </GridTags>
                </Tags>

                <Social>
                  <Title>Social Connect</Title>
                  <Icons>
                    <Icon src={FB} alt="" />
                    <Icon src={TW} alt="" />
                    <Icon src={IG} alt="" />
                    <Icon src={LK} alt="" />
                  </Icons>
                </Social>
              </Grid>
            )}
          </Right>
        </Main>
        <Pagination>
          <One>1</One>
          <One>2</One>
          <One>3</One>
        </Pagination>
      </ConsulationBox>
    </>
  );
};

export default Consulation;
