import { FC } from "react";
import styled from "styled-components";
import { Row, Typography, Col, Divider, Image } from "antd";
import plus from '../../img/Plus2.png';
import minus from '../../img/Minus2.png';

const { Text, Title } = Typography;

const Wrapper = styled(Row)`
  position: relative;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
`;

const TopCol = styled(Col)`
  height: 50vh;
  order: 1;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    order: 2;
  }
`;
const BottomCol = styled(Col)`
  border: 1px solid red;
  width: 100%;
  height: 50vh;
  order: 2;
  @media (min-width: 992px) {
    height: 100vh;
    order: 1;
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
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 300px;
  height: 300px;
  background: #00a3d2;
  opacity: 0.3;
  filter: blur(100px);
  transform: rotate(-25.73deg);
`;

const OptionWrapper = styled.div`
  border: 1px solid black;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OptionName = styled(Text)``;
const OptionLeft = styled.div`
  border: 1px solid red;
  width: 30%;
`;

const OptionCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  width: 30%;
`;

const OptionRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 30%;
`;

export const WhyUs: FC = () => {
  return (
    <Wrapper>
      <TopCol>
        <Title>Why us</Title>
        <Text>
          Tula provides personalized population health management. Tula
          understands that everyone's story and jorney ara different.
        </Text>
        <Shadow />
        <Divider />
        <Text>
          Because each member is unique, Tula builds a personalized support team
          to empower members in achieving their individual wellness goals.
        </Text>
      </TopCol>

      <BottomCol>
        <ButtonWrapper>
          <WhyUsButton style={{ background: "#00A3D2", color: "#ffffff" }}>
            Tula Health Programs
          </WhyUsButton>
          <WhyUsButton>Traditional Programs</WhyUsButton>
        </ButtonWrapper>

        <OptionWrapper>
          <OptionItem>
            <OptionLeft>
              <OptionName>Human onboarding</OptionName>
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
