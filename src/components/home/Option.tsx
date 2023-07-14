import styled from "@emotion/styled";
import { breakpoints } from "../../data/breakpoints";

const Options = styled.div`
  text-align: center;
  margin: 30px 10px 50px 10px;
  line-height: 40px;
  margin-top: 120px;
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
  }
`;
const Services = styled.div`
  text-align: center;
  margin: 30px 10px 50px 6px;
  line-height: 40px;
  margin-top: 118px;
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  color: #ff64ae;
`;
const Text = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #091156;
  width: 30%;
  margin: 6px auto 7px auto;
  padding-left: 6px;
  letter-spacing: 0.3px;
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    text-align: center;
    padding-left: 0;
  }
  @media (max-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }
`;

const TextService = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #091156;
  width: 50%;
  margin: 6px auto 7px auto;
  padding-left: 6px;
  letter-spacing: 0.3px;
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    text-align: center;
    padding-left: 0;
  }
  @media (max-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }
`;

const Desc = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #8b8b8b;
  font-family: Poppins, sans-serif;
  letter-spacing: 2px;
  margin: 26px 20%;

  line-height: 26px;
  @media (max-width: ${breakpoints.large}) {
    margin: 24px 10%;
  }
`;

interface Data {
  title: string;
  text: string;
  desc: string;
}

const About = styled.div`
  line-height: 25px;
  margin-top: 32px;
`;
const TextAbout = styled.div`
  margin-top: 20px;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #091156;
`;
const DescAbout = styled.div`
  margin-top: 30px;
  width: 80%;
  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
  letter-spacing: 2px;
`;
const DescService = styled.div`
  margin-top: 20px;
  text-align: center;
  margin-left: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
  letter-spacing: 1.7px;
`;

const TextTeam = styled.h1`
  width: 50%;
  margin: 0 auto;
`;

const TextTest = styled.h1`
  width: 60%;
  margin: 7px auto;
`;

const Touch = styled.h1`
  width: 60%;
  margin: 7px auto;
`;

const Option: React.FC<Data> = ({ title, text, desc }) => {
  return (
    <>
      {title === "About Us" ? (
        <About>
          <Title>{title}</Title>
          <TextAbout>{text}</TextAbout>
          <DescAbout>{desc}</DescAbout>
        </About>
      ) : title === "Our Services" ? (
        <Services>
          <Title>{title}</Title>
          <TextService>{text}</TextService>
          <DescService>{desc}</DescService>
        </Services>
      ) : title === "Assistance Team" ? (
        <Services>
          <Title>{title}</Title>
          <TextTeam>{text}</TextTeam>
          <DescService>{desc}</DescService>
        </Services>
      ) : title === "Our Testimonials" ? (
        <Services>
          <Title>{title}</Title>
          <TextTest>{text}</TextTest>
          <DescService>{desc}</DescService>
        </Services>
      ) : title === "Get in Touch" ? (
        <Services>
          <Title>{title}</Title>
          <Touch>{text}</Touch>
          <DescService>{desc}</DescService>
        </Services>
      ) : (
        <Options>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <Desc>{desc}</Desc>
        </Options>
      )}
    </>
  );
};

export default Option;
