import styled from "@emotion/styled";
import tw from "twin.macro";
import { professData } from "../../data";
import { Profess, Titless } from "../../types";
import ProfessItem from "./ProfessItem";
import { breakpoints } from "../../data/breakpoints";
const ProfessHeader = styled("div")`
  text-align: center;
  margin: 30px 10px 50px 4px;
  line-height: 40px;
`;
const Title = styled("div")`
  ${tw`
      text-base font-semibold text-title tracking-[0.3px] ml-2 mb-3
    `}
`;
const Text = styled("p")`
  ${tw`
      text-4xl font-semibold text-main tracking-[0.3px] ml-[3px] 
    `}

  @media (max-width: ${breakpoints.xlarge}) {
    width: 100%;
  }
`;

const Desc = styled("div")`
  font-size: 15px;
  font-weight: 400;
  color: #8b8b8b;
  font-family: Poppins, sans-serif;
  letter-spacing: 2.1px;
  margin: 24px calc(20%) 24px calc(20% + 4px);

  line-height: 26px;

  @media (max-width: ${breakpoints.medium}) {
    margin: 24px calc(5%) 24px calc(5% + 4px);
  }
`;

const ProfessList = styled("div")`
  ${tw`
  flex justify-evenly flex-1 flex-wrap gap-y-10 items-center my-[110px] mx-[calc(10% - 20px)]
`}
`;

const ProfessHome: React.FC<Titless> = ({ title }) => {
  return (
    <>
      <ProfessHeader style={{ marginTop: title }}>
        {title === "" ? (
          <></>
        ) : (
          <>
            <Title>Professional Teams</Title>
            <Text>The Professional expert</Text>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </Desc>
          </>
        )}
      </ProfessHeader>

      <ProfessList>
        {professData.map((item: Profess) => (
          <ProfessItem key={item.id} item={item} />
        ))}
      </ProfessList>
    </>
  );
};

export default ProfessHome;
