import React from "react";
import { Blog } from "../../types";
import { styled } from "styled-components";
import tw from "twin.macro";
import Caret from "../../images/blogImg/caret-right.png";
import { breakpoints } from "../../data/breakpoints";

interface ItemBlog {
  item: Blog;
}

const BoxBlog = styled.div`
  ${tw`
    w-[730px] h-[953px] shadow-2xl rounded-[50px] mr-16 mb-32
`}

  @media (max-width: ${breakpoints.xlarge}) {
    margin: 40px auto;
    width: 80%;
  }

  &:nth-child(3) {
    padding-top: 7px;
  }
  &:nth-child(2) {
    padding-top: 2px;
  }
`;

const Images = styled.img`
  ${tw`
    w-[730px] h-[453px] mt-1
`}
  @media (max-width: ${breakpoints.xlarge}) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.medium}) {
    height: 300px;
  }
`;

const Folder = styled.img`
  ${tw`
    w-[135px] h-[25px] ml-1
`}
`;

const BoxInfo = styled.div`
  ${tw`
    px-[10%] pt-[55px]  leading-[50px]
`}
`;
const Title = styled.h1`
  ${tw`
    pt-4 tracking-[0.3px] ml-1
`}
  @media (max-width: ${breakpoints.small}) {
    font-size: 25px;
  }
`;
const Desc = styled.p`
  ${tw`
    leading-[25px] tracking-[1.6px] mt-4 ml-1
`}
  @media (max-width: ${breakpoints.small}) {
    letter-spacing: 0;
    margin-left: 0;
  }
`;
const ReadBtn = styled.p`
  ${tw`
  w-[226px] flex items-center justify-center tracking-[1.5px] h-[58px] rounded-[50px] bg-[#ff64ae] text-white text-base 
  font-semibold border-none outline-none mt-[30px] pl-6
`}
`;
const Carets = styled.img`
  ${tw`
    
`}
`;
const BlogItem: React.FC<ItemBlog> = ({ item }) => {
  return (
    <>
      <BoxBlog>
        <Images src={item.image} alt="" />
        <BoxInfo>
          {" "}
          <Folder src={item.folder} alt="" />
          <Title>{item.title}</Title>
          <Desc>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the…
          </Desc>
          <ReadBtn>
            Read More <Carets src={Caret} alt="" />
          </ReadBtn>
        </BoxInfo>
      </BoxBlog>
    </>
  );
};

export default BlogItem;
