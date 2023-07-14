import React from "react";
import CustomBg from "../customBg";
import BlogBg from "../../images/blogImg/blog.png";
import { styled } from "styled-components";
import tw from "twin.macro";

const Head = styled.div`
  ${tw`
  mt-[-133px]
`}
`;
const Title = styled.h1`
  ${tw`
   font-semibold text-4xl text-white
`}
`;
const Right = styled.p`
  ${tw`
   text-base font-medium text-[#D9D9D9] tracking-[1.3px]
`}
`;
const Container = styled.div`
  ${tw`
  flex justify-between items-center h-full mx-[10.5%]
`}
`;
const BlogMain = () => {
  return (
    <>
      <Head>
        <CustomBg fakeBg={BlogBg}>
          <Container>
            <Title>Blog</Title>
            <Right>Home • Blog</Right>
          </Container>
        </CustomBg>
      </Head>
    </>
  );
};

export default BlogMain;
