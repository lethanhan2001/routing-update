import styled from "styled-components";
import tw from "twin.macro";
import BgMain from "../images/bgbubble.png";

import Header from "../components/home/Header";
import ServicesHome from "../components/home/ServicesHome";
import AboutHome from "../components/home/AboutHome";
import ProfessHome from "../components/home/ProfessHome";
import ContactHome from "../components/home/ContactHome";
import Footer from "./Footer";

const Container = styled.div`
  ${tw` absolute top-[122px] `}
`;

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <ServicesHome />
        <AboutHome />
        <ProfessHome title="140px" />
        <ContactHome
          bgContact={BgMain}
          text="Send your inquiry to our expert team"
        />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
