import Chrev from "../images/chrev.png";
import TotopBtn from "../images/ToTop Button.png";
import Facebook from "../images/facebook-f.png";
import Likedin from "../images/linkedin-in.png";
import Twitter from "../images/twitterlogo.png";
import Instagram from "../images/instagramlogo.png";
import Youtube from "../images/youtube.png";
import styled from "@emotion/styled";
import Footer1Bg from "../images/footer1.png";
import Footer2Bg from "../images/footer2.png";
import Footer3Bg from "../images/footerbottm.png";
import { breakpoints } from "../data/breakpoints";
import { Link } from "react-router-dom";
const Footer1 = styled.div`
  background-image: url(${Footer1Bg});
  width: 100%;
  height: 740px;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const Footer2 = styled.div`
  background-image: url(${Footer2Bg});
  width: calc(100%);
  height: 740px;
  background-position: center;
  background-size: cover;
  position: relative;
  margin-top: 118px;
`;

const Footer3 = styled.div`
  background-image: url(${Footer3Bg});
  width: 100%;
  height: 330px;
  position: absolute;
  bottom: 0px;
  z-index: -1;
  background-position: center;
  background-size: cover;
`;

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
  flex-direction: column;
  width: 80%;
  padding-top: 70px;
  position: relative;

  @media (max-width: ${breakpoints.large}) {
    margin: 0;
    padding-top: 30px;
  }
  @media (max-width: ${breakpoints.small}) {
    margin: 0;
    padding-top: 0px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  margin-left: 30px;
  margin-top: 53px;
`;

const Footers = styled.div`
  margin-top: 65px;
`;
const MainLogo = styled.div``;
const Title = styled.h4`
  margin-left: 35px;
  padding-top: 20px;
  letter-spacing: 2.9px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  font-family: Poppins, sans-serif;
`;
const One = styled.div`
  width: 63px;
  height: 63px;
  margin-top: 20px;
  border-radius: 50%;
  background: #ff64ae;
`;
const Two = styled.div`
  width: 13px;
  position: absolute;
  top: 32px;
  left: 11px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
`;
const Three = styled.div`
  height: 6px;
  width: 6px;
  top: 44px;
  position: absolute;
  left: 25px;
  border-radius: 50%;
  background: #fff;
`;
const Four = styled.div`
  height: 11px;
  width: 40px;
  top: 48px;
  position: absolute;
  left: 38px;

  background: #fff;
  border-radius: 50px;
`;

const LeftFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 calc(8% + 5px);

  @media (max-width: ${breakpoints.large}) {
    display: flex;
    margin: 0;
    flex-direction: column;
    padding-top: 40px;
  }
  @media (max-width: ${breakpoints.small}) {
    display: flex;
    margin: 0 -18%;
    flex-direction: column;
    padding-top: 40px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #d7dbff;
  font-family: Poppins, sans-serif;
  letter-spacing: 2.6px;

  margin-top: 35px;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #d7dbff;
  margin-left: 7px;
  letter-spacing: 2px;
  @media (max-width: ${breakpoints.large}) {
    padding: 0 15px 0 0;
  }
`;

const Content = styled.div`
  margin-left: 8%;
`;

const MainFooter = styled.div``;
const Address = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #d7dbff;
  font-family: Poppins, sans-serif;
  letter-spacing: 1.75px;
  margin-top: 22px;
  margin-left: 8px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
  margin-left: 5px;
  @media (max-width: ${breakpoints.large}) {
    margin-top: -20px;
  }
`;

const Phone = styled.p`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Mail = styled.p`
  margin-left: 20px;
  text-decoration: underline;
`;

const Navigation = styled.div`
  width: 66%;
  margin-top: -20px;
  @media (max-width: ${breakpoints.large}) {
    margin-top: 0px;
  }
`;

const BoxNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 6.9%;

  margin-top: 229px;
  @media (max-width: ${breakpoints.large}) {
    margin-top: 0px;
  }
`;

const BoxList = styled.div``;

const Box = styled.div``;

const BoxItem = styled.div`
  display: flex;
  align-items: center;
  margin: 26px auto;
`;

const BoxItem2 = styled.div`
  display: flex;
  align-items: center;
  line-height: 3px;
  margin-left: -30px;
  letter-spacing: 2px;
  margin: 27px auto;
`;

const Texts = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #d7dbff;
  margin-left: 10px;
  font-family: Poppins, sans-serif;
`;

const Pages1 = styled.h4`
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 600;
  color: #fff;
  margin-top: 13px;
  margin-left: -7px;
  margin-bottom: 45px;
`;

const Pages2 = styled.h4`
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 600;
  color: #fff;
  margin-top: 20px;
  margin-left: -4px;
  margin-bottom: 35px;
`;

const Nav1 = styled.div`
  line-height: 4px;
  margin-top: 20px;
  letter-spacing: 1.2px;
`;

const Nav2 = styled.div`
  @media (max-width: ${breakpoints.small}) {
    margin: 0 0 0 30px;
  }
`;
const End = styled.div`
  margin: 100px 10% 0 10%;
  @media (max-width: ${breakpoints.large}) {
    margin: 30px 5%;
  }
  @media (max-width: ${breakpoints.small}) {
    margin: 30px 0%;
  }
`;

const EndBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.large}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BoxIcons = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-top: 2px;
  margin-left: 5px;
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const EndTitle = styled.div`
  letter-spacing: 1.6px;
  margin-top: 19px;
  margin-right: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #d7dbff;
  font-family: Poppins, sans-serif;

  @media (max-width: ${breakpoints.large}) {
    text-align: center;
    margin-top: 30px;
  }
`;

const ImageIcon = styled.img`
  margin-top: 20px;
  &:not(:first-child) {
    margin-left: 45px;
  }
`;

const TopBtn = styled.div`
  position: absolute;
  bottom: calc(26% + 8px);
  right: 66px;
`;

const ImageBtn = styled.img``;
const FooterGuest = () => {
  return (
    <>
      <Footers>
        <Footer2>
          <Footer1>
            <MainFooter>
              <LeftFooter>
                <Headers>
                  <Logo>
                    <MainLogo>
                      <One></One>
                      <Two></Two>
                      <Three></Three>
                      <Four></Four>
                    </MainLogo>
                    <Title>Beautice</Title>
                  </Logo>
                  <Content>
                    <Text>
                      <Span>Beautice</Span> is a Beauty Clinic WordPress Theme.
                    </Text>
                    <Address>Baker Steet 101, NY, United States</Address>.
                    <Info>
                      <Phone>+521 569 8966.</Phone>
                      <Mail>mail@company.com.</Mail>
                    </Info>
                  </Content>
                </Headers>

                <Navigation>
                  <BoxNav>
                    <Nav1>
                      <Pages1>Pages</Pages1>
                      <BoxList>
                        <BoxItem>
                          <img src={Chrev} alt="" />
                          <Texts>
                            <Link to={`/`}>Home</Link>
                          </Texts>
                        </BoxItem>
                        <BoxItem>
                          <img src={Chrev} alt="" />
                          <Texts>
                            <Link to={`/about`}>About</Link>
                          </Texts>
                        </BoxItem>
                        <BoxItem>
                          <img src={Chrev} alt="" />
                          <Texts>
                            <Link to={`/service`}>Services</Link>
                          </Texts>
                        </BoxItem>
                        <BoxItem>
                          <img src={Chrev} alt="" />
                          <Texts>
                            <Link to={`/gallery`}>Gallery</Link>
                          </Texts>
                        </BoxItem>
                        <BoxItem>
                          <img src={Chrev} alt="" />
                          <Texts>
                            <Link to={`/team`}>Team</Link>
                          </Texts>
                        </BoxItem>
                      </BoxList>
                    </Nav1>
                    <Nav2>
                      <Pages2>Informations</Pages2>
                      <Box>
                        <BoxItem2>
                          <img src={Chrev} alt="" />
                          <Texts>Terms & conditions</Texts>
                        </BoxItem2>
                        <BoxItem2>
                          <img src={Chrev} alt="" />
                          <Texts>Privacy policy</Texts>
                        </BoxItem2>
                        <BoxItem2>
                          <img src={Chrev} alt="" />
                          <Texts>
                            <Link to={`/blog`}>Blog</Link>
                          </Texts>
                        </BoxItem2>
                        <BoxItem2>
                          <img src={Chrev} alt="" />
                          <Texts>
                            <Link to={`/contact`}>Contact</Link>
                          </Texts>
                        </BoxItem2>
                      </Box>
                    </Nav2>
                  </BoxNav>
                </Navigation>
              </LeftFooter>

              <End>
                <EndBox>
                  <BoxIcons>
                    <ImageIcon src={Facebook} alt="" />
                    <ImageIcon src={Twitter} alt="" />
                    <ImageIcon src={Likedin} alt="" />
                    <ImageIcon src={Youtube} alt="" />
                    <ImageIcon src={Instagram} alt="" />
                  </BoxIcons>
                  <EndTitle>
                    <p>© AltDesain Studio 2021 - All right reserved.</p>
                  </EndTitle>
                </EndBox>

                <TopBtn
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <ImageBtn src={TotopBtn} alt="" />
                </TopBtn>
              </End>
            </MainFooter>

            <Footer3></Footer3>
          </Footer1>
        </Footer2>
      </Footers>
    </>
  );
};

export default FooterGuest;
