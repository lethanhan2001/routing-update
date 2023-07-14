import React from "react";
import TourBg from "../../images/galleryImg/videotour.png";
import CustomBg from "../customBg";
import styled from "styled-components";
import tw from "twin.macro";
import PlayBtn from "../../images/galleryImg/play.png";
import { breakpoints } from "../../data/breakpoints";
const Head = styled.div`
  ${tw`
    mt-[-27px] text-center
`}
`;
const Text = styled.div`
  ${tw`
   text-4xl font-semibold text-white  pt-44
`}
`;
const Desc = styled.div`
  ${tw`
    w-[40%]  mx-auto text-base font-normal text-[#cacaca] tracking-[1.6px] mt-4
`}

  @media (max-width: ${breakpoints.large}) {
    width: 100%;
  }
`;
const PlayBg = styled.img`
  ${tw`
  mx-auto my-8
`}

  @media (max-width: ${breakpoints.small}) {
    width: 30%;
  }
`;
const VideoTour = () => {
  return (
    <>
      <Head>
        {" "}
        <CustomBg fakeBg={TourBg}>
          <Text>Watch the video tour</Text>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Desc>

          <PlayBg src={PlayBtn}></PlayBg>
        </CustomBg>
      </Head>
    </>
  );
};

export default VideoTour;
