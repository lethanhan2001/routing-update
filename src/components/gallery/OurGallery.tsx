import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Img1 from "../../images/galleryImg/img1.png";
import Img2 from "../../images/galleryImg/img2.png";
import Img3 from "../../images/galleryImg/img3.png";
import Img4 from "../../images/galleryImg/img4.png";
import Img5 from "../../images/galleryImg/img5.png";
import Img6 from "../../images/galleryImg/img6.png";
import Img7 from "../../images/galleryImg/img7.png";
import Img8 from "../../images/galleryImg/img8.png";
import Img9 from "../../images/galleryImg/img9.png";
import { breakpoints } from "../../data/breakpoints";
const Container = styled.div`
  ${tw`
    flex justify-evenly  mx-[10.5%] mt-24 tracking-[0.3px]
`}

  @media (max-width: ${breakpoints.large}) {
    flex-direction: column;
  }
`;
const TitleLeft = styled.div`
  ${tw`
  leading-[43px]
`}
`;
const Text = styled.h6`
  ${tw`
   mt-[0px]
`}
`;
const Title = styled.h1`
  ${tw`
  
`}
`;
const TitleRight = styled.p`
  ${tw`
  w-[50%] ml-16 tracking-widest mt-11
`}

  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    margin-left: 0;
  }
`;
const ListImages = styled.div`
  ${tw`
   grid grid-cols-3 gap-y-10 gap-x-9
`}

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Images = styled.img`
  ${tw`
  
`}
`;
const BoxImages = styled.div`
  ${tw`
    mx-[10.5%] mt-24
`}
`;

const Desc = styled.p`
  ${tw`
   w-[60%] mt-16 tracking-[1.6px]
`}
`;

const OurGallery: React.FC = () => {
  return (
    <>
      <Container>
        <TitleLeft>
          <Text>Our Gallery</Text>
          <Title>Check out the collection pictures from our clinic</Title>
        </TitleLeft>

        <TitleRight>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </TitleRight>
      </Container>

      <BoxImages>
        <ListImages>
          <Images src={Img1} alt="" />
          <Images src={Img2} alt="" />
          <Images src={Img3} alt="" />
          <Images src={Img4} alt="" />
          <Images src={Img5} alt="" />
          <Images src={Img6} alt="" />
          <Images src={Img7} alt="" />
          <Images src={Img8} alt="" />
          <Images src={Img9} alt="" />
        </ListImages>

        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim, our teams.
        </Desc>
      </BoxImages>
    </>
  );
};

export default OurGallery;
