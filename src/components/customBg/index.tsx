import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Violet from "../../images/aboutImg/violet.png";
import TourBg from "../../images/galleryImg/videotour.png";
import BlogBg from "../../images/blogImg/blog.png";
const BgSpa = styled.div`
  ${tw`
   w-full mt-[153px] h-[529px]
`}
`;

const BgTour = styled.div`
  ${tw`
   w-full mt-[153px] h-[628px]
`}
`;

const BgViolet = styled.div`
  ${tw`
   w-full mt-[153px] h-[529px]
`}
`;

const BgVioletTour = styled.div`
  ${tw`
   w-full mt-[153px] h-[628px]
`}
`;

const BgBlog = styled.div`
  ${tw`
   w-full mt-[153px] h-[285px]
`}
`;

const BgVioletBlog = styled.div`
  ${tw`
   w-full mt-[153px] h-[285px]
`}
`;

interface BgCustom {
  children: React.ReactNode;
  fakeBg: string;
}
const CustomBg: React.FC<BgCustom> = ({ children, fakeBg }) => {
  return (
    <>
      {fakeBg === TourBg ? (
        <BgTour style={{ backgroundImage: `url(${fakeBg})` }}>
          <BgVioletTour style={{ backgroundImage: `url(${Violet})` }}>
            {children}
          </BgVioletTour>
        </BgTour>
      ) : fakeBg === BlogBg ? (
        <BgBlog style={{ backgroundImage: `url(${fakeBg})` }}>
          <BgVioletBlog style={{ backgroundImage: `url(${Violet})` }}>
            {children}
          </BgVioletBlog>
        </BgBlog>
      ) : (
        <BgSpa style={{ backgroundImage: `url(${fakeBg})` }}>
          <BgViolet style={{ backgroundImage: `url(${Violet})` }}>
            {children}
          </BgViolet>
        </BgSpa>
      )}
    </>
  );
};

export default CustomBg;
