import { FC } from "react";
import styled from "styled-components";
import { Row, Typography, Col, Divider, Image } from "antd";
import plus from "../../img/Plus2.png";
import minus from "../../img/Minus2.png";

const { Text, Title } = Typography;

const Wrapper = styled(Row)`
  position: relative;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 992px) {
    padding-top: 0px;
  }
`;

const TopCol = styled(Col)`
  height: auto;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`;
const BottomCol = styled(Col)`
  padding-top: 40px;
  padding-bottom: 20px;
  width: 100%;
  height: auto;
  @media (min-width: 992px) {
    height: 100vh;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
`;

const WhyUsButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 100px;
  height: 70px;
  outline: none;
  border-radius: 16px;
  border: none;
  font-size: 17px;
  @media (min-width: 992px) {
    margin-left: 40px;
  }
`;

interface IShadow {
  top: number;
}
const Shadow = styled.div<IShadow>`
  position: absolute;
  top: ${({top}) => top && top}px;
  z-index: 2;
  width: 300px;
  height: 300px;
  background: #00a3d2;
  opacity: 0.3;
  filter: blur(200px);
  transform: rotate(-25.73deg);
`;

const OptionWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
`;

const OptionName = styled(Text)`

`;
const OptionLeft = styled.div`
  width: 30%;
`;

const OptionCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const OptionRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const WhyUs: FC = () => {
  return (
    <Wrapper>
      <TopCol xs={24} sm={24} md={24} lg={8}>
        <Title>Why us</Title>
        <Text>
          Tula provides personalized population health management. Tula
          understands that everyone's story and jorney ara different.
        </Text>
        <Shadow top={0} />
        <Divider />
        <Text>
          Because each member is unique, Tula builds a personalized support team
          to empower members in achieving their individual wellness goals.
        </Text>
      </TopCol>

      <BottomCol xs={24} sm={24} md={24} lg={16}>
        <ButtonWrapper>
          <WhyUsButton style={{ background: "#00A3D2", color: "#ffffff" }}>
            Tula Health Programs
          </WhyUsButton>
          <WhyUsButton>Traditional Programs</WhyUsButton>
        </ButtonWrapper>

        <OptionWrapper>
          <OptionItem>
            <OptionLeft>
              <OptionName strong>Human onboarding</OptionName>
            </OptionLeft>
            <OptionCenter>
              <Image src={plus} preview={false} />
            </OptionCenter>
            <OptionRight>
              <Image src={minus} preview={false} />
            </OptionRight>
          </OptionItem>

          <OptionItem>
            <OptionLeft>
              <OptionName strong>Real-Time Biometrics</OptionName>
            </OptionLeft>
            <OptionCenter>
              <Image src={plus} preview={false} />
            </OptionCenter>
            <OptionRight>
              <Image src={plus} preview={false} />
            </OptionRight>
          </OptionItem>

          <OptionItem>
            <OptionLeft>
              <OptionName strong>24/7 Bidirectional Communication</OptionName>
            </OptionLeft>
            <OptionCenter>
              <Image src={plus} preview={false} />
            </OptionCenter>
            <OptionRight>
              <Image src={minus} preview={false} />
            </OptionRight>
          </OptionItem>

          <OptionItem>
            <OptionLeft>
              <OptionName strong>Proactive Outreach</OptionName>
            </OptionLeft>
            <OptionCenter>
              <Image src={plus} preview={false} />
            </OptionCenter>
            <OptionRight>
              <Image src={minus} preview={false} />
            </OptionRight>
          </OptionItem>

          <OptionItem>
            <OptionLeft>
              <OptionName strong>Aligned Personal Support Team</OptionName>
            </OptionLeft>
            <OptionCenter>
              <Image src={plus} preview={false} />
            </OptionCenter>
            <OptionRight>
              <Image src={minus} preview={false} />
            </OptionRight>
          </OptionItem>
          <Shadow top={400}/>
          <OptionItem>
            <OptionLeft>
              <OptionName strong>Incentive Programs</OptionName>
            </OptionLeft>
            <OptionCenter>
              <Image src={plus} preview={false} />
            </OptionCenter>
            <OptionRight>
              <Image src={minus} preview={false} />
            </OptionRight>
          </OptionItem>
        </OptionWrapper>
      </BottomCol>
    </Wrapper>
  );
};
