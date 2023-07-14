import ContactBg from "../../images/Contact Animations.png";
import styled from "@emotion/styled";
import tw from "twin.macro";
import useInnerWidth from "../../hooks/useInnerWidth";
import { breakpoints } from "../../data/breakpoints";
const ContactMain = styled("div")`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
`;

const ContactBox = styled("div")`
  ${tw`
  flex justify-between items-center mr-[10%]
`}
`;

const Content = styled("div")`
  ${tw`
  w-1/2 mt-[27px] ml-[calc(19% - 5px)]
`}
`;

const BoxImages = styled("div")`
  ${tw`
  w-1/2 
`}
`;
const BoxImagesForm = styled("div")`
  ${tw`
   mb-[78px] ml-[16px] 
`}
`;
const Images = styled("img")`
  ${tw`
  ml-[152px] mt-[70px]
`}
`;

const BoxInput = styled("div")`
  ${tw`
  mt-10
`}
`;

const Head = styled("h1")`
  ${tw`
  w-[ calc(100% - 100px)]
  leading-[43px] tracking-[0.7px]
`}
  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;

const Title = styled("h6")`
  ${tw`
 mt-[5px] mb-3
`}
`;

const Desc = styled("p")`
  ${tw`
  mt-5 tracking-[1.6px] 
`}
`;

const InputRow = styled("div")`
  ${tw`
    flex items-center flex-row mt-[46px]
  `}

  @media (max-width: ${breakpoints.small}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const Input = styled("input")`
  ${tw`
  w-[240px] h-[62px] mt-[3px] rounded-[15px] border outline-none pl-[24px] border-[#d9ddfe]
`}

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    letter-spacing: 2px;
  }
  &:nth-child(2) {
    margin-left: 35px;
  }
`;

const InputItem = styled("div")`
  padding: 40px 30px 30px 0;
  width: calc(115%);
`;

const InputInfo = styled("input")`
  ${tw`
  w-[90%] h-[62px] pl-6 my-[2px] pb-[6px] mx-auto rounded-[15px] border border-[#d9ddfe] outline-none
`}

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    letter-spacing: 2px;
  }

  &:nth-child(2) {
    margin-top: 35px;
  }
`;
const TextArea = styled("textarea")`
  ${tw`
  w-[90%] h-[240px] rounded-[15px] border border-[#d9ddfe] outline-none  p-5 mt-[35px] mr-5
`}

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    font-family: Poppins, sans-serif;
    letter-spacing: 1.8px;
    padding-top: 5px;
    padding-left: 4px;
  }
`;

const SendBtn = styled("button")`
  ${tw`
   w-[250px] h-[58.36px]
   mt-4 rounded-[50px]
   bg-[#ff64ae] text-white text-base font-semibold border-none outline-none
   pb-1 tracking-[1.8px]
`}
`;

const ContactBoxTablet = styled("div")`
  ${tw`
 flex justify-center items-center flex-1 flex-col my-0 mx-[8%]
`}

  @media (max-width: ${breakpoints.small}) {
    margin: 0 7% 0 2%;
  }
`;

const BoxImagesTablet = styled("div")`
  ${tw`
 mx-auto w-full
`}
`;
const ImagesTablet = styled("img")`
  ${tw`
 w-3/4 mx-auto
`}
`;
const ContentTablet = styled("div")`
  ${tw`
 w-full
`}
`;
const InputTablet = styled("input")`
  ${tw`
 w-[95%] h-[62px] rounded-[15px] border border-[#d9ddfe] outline-none pl-[21px]
`}

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    letter-spacing: 2.5px;
  }
  &:nth-child(2) {
    margin-left: 35px;
  }

  @media (max-width: ${breakpoints.small}) {
    &:nth-child(2) {
      margin-top: 35px;
      margin-left: 10px;
    }
  }
`;
const InputInfoTablet = styled("input")`
  ${tw`
  w-[90%] h-[62px] rounded-[15px] border border-[#d9ddfe]
  my-[2px] mx-[3%] pl-5
`}

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    letter-spacing: 3px;
  }

  &:nth-child(2) {
    margin-top: 35px;
  }
  @media (max-width: ${breakpoints.xlarge}) {
    margin: 2px 0;
  }
  @media (max-width: ${breakpoints.small}) {
    margin: 2px 3%;
  }
`;
const TextAreaTablet = styled("textarea")`
  ${tw`
  w-[90%] h-[150px] rounded-[15px] border border-[#d9ddfe]
   mx-[3%] p-5 mt-[35px] mr-[10%] ml-0 mb-0 outline-none
`}

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    font-family: Poppins, sans-serif;
    letter-spacing: 1.8px;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 90%;
    margin: 35px 11% 0 3%;
  }
`;

interface Contact {
  text: string;
  bgContact: string;
}

const ContactHome: React.FC<Contact> = ({
  text,
  bgContact,
}: {
  text: string;
  bgContact: string;
}) => {
  const width = useInnerWidth();

  return (
    <>
      <ContactMain style={{ backgroundImage: `url(${bgContact})` }}>
        {width > 1200 ? (
          <ContactBox>
            {text === "Contact service for our customers" ? (
              <BoxImagesForm>
                <Images src={ContactBg} alt="" />
              </BoxImagesForm>
            ) : (
              <BoxImages>
                <Images src={ContactBg} alt="" />
              </BoxImages>
            )}

            <Content>
              {text === "Contact service for our customers" ? (
                <></>
              ) : (
                <>
                  <Title>Contact Us</Title>
                  <Head>{text}</Head>
                  <Desc>Lorem ipsum dolor sit amet nulla turapis tellus.</Desc>
                </>
              )}

              <BoxInput
                style={
                  text === "Contact service for our customers"
                    ? {
                        paddingRight: 10,
                      }
                    : {}
                }
              >
                <InputRow>
                  <Input type="text" placeholder="First name" />
                  <Input className="last" type="text" placeholder="Last name" />
                </InputRow>
                <InputItem>
                  <InputInfo type="email" placeholder="Email address" />
                  <InputInfo type="text" placeholder="Subject message" />
                  <TextArea
                    className="message"
                    typeof="text"
                    placeholder="Your inquiry here"
                  ></TextArea>
                </InputItem>
              </BoxInput>

              <SendBtn>Send Message</SendBtn>
            </Content>
          </ContactBox>
        ) : (
          <ContactBoxTablet>
            <BoxImagesTablet>
              <ImagesTablet src={ContactBg} alt="" />
            </BoxImagesTablet>
            <ContentTablet>
              <Title>Contact Us</Title>
              <Head>Send your inquiry to our expert team</Head>
              <Desc>Lorem ipsum dolor sit amet nulla turapis tellus.</Desc>
              <BoxInput>
                <InputRow>
                  <InputTablet type="text" placeholder="First name" />
                  <InputTablet
                    className="last"
                    type="text"
                    placeholder="Last name"
                  />
                </InputRow>
                <InputItem>
                  <InputInfoTablet type="email" placeholder="Email address" />
                  <InputInfoTablet type="text" placeholder="Subject message" />
                  <TextAreaTablet
                    typeof="text"
                    placeholder="Your inquiry here"
                  ></TextAreaTablet>
                </InputItem>
              </BoxInput>

              <SendBtn>Send Message</SendBtn>
            </ContentTablet>
          </ContactBoxTablet>
        )}
      </ContactMain>
    </>
  );
};

export default ContactHome;
