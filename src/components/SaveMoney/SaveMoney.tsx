import { FC } from "react";
import styled from "styled-components";
import { Typography, Image, Row, Col } from "antd";
import arrow from "../../img/saveMoneyArrow.png";
import healthy from "../../img/spending/spending.png";
import copd from "../../img/spending/copd.png";
import diabetes from "../../img/spending/diabetes.png";
import chf from "../../img/spending/chf.png";

const { Title, Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #eef1f4;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const TopCol = styled(Col)`
  padding-bottom: 20px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BottomCol = styled(Col)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
  align-items: center;
`;

const ModifiedTitle = styled(Title)`
  width: 50%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const ModifiedText = styled(Text)`
  width: 80%;
  padding-top: 20px;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  width: 100%;
  @media (min-width: 992px) {
    position: absolute;
    width: 50%;
    top: 100px;
    left: 200px;
    transform: rotate(-50deg);
  }
`;

const Shadow = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 4;
  right: 200px;
  top: 0px;
  background: #00A3D2;
  opacity: 0.5;
  filter: blur(300px);
  transform: rotate(-25.73deg);
  @media (min-width: 992px) {
    opacity: 0.3;
  }
`;

const SpendingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
    width: 80%;
  }
`;

const SpendingText = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
const SpendingSum = styled(Text)`
  font-size: 38px;
  line-height: 70px;
  font-weight: 700;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SaveMoney: FC = () => {
  return (
    <Wrapper>
      <TopCol xs={24} sm={24} md={24} lg={12}>
        <ImageWrapper>
          <Image src={arrow} preview={false} />
        </ImageWrapper>

        <ModifiedTitle>Save money with Tula</ModifiedTitle>
        <ModifiedText>
          With no real-time visibility and accountability, most patients
          diagnosed with chronic illnesses don't understand the importance of
          managing their health until they are in the emergency room.
        </ModifiedText>
        <Shadow />
      </TopCol>
      <BottomCol xs={24} sm={24} md={24} lg={12}>
        <SpendingWrapper>
          <TextWrapper>
            <SpendingText>Healthy</SpendingText>
            <SpendingSum strong>$2,025</SpendingSum>
          </TextWrapper>
          <Image src={healthy} preview={false} />
        </SpendingWrapper>

        <SpendingWrapper>
          <TextWrapper>
            <SpendingText>COPD</SpendingText>
            <SpendingSum strong>$25,817</SpendingSum>
          </TextWrapper>
          <Image src={copd} preview={false} />
        </SpendingWrapper>

        <SpendingWrapper>
          <TextWrapper>
            <SpendingText>Diabetes</SpendingText>
            <SpendingSum strong>$15,920</SpendingSum>
          </TextWrapper>
          <Image src={diabetes} preview={false} />
        </SpendingWrapper>

        <SpendingWrapper>
          <TextWrapper>
            <SpendingText>CHF</SpendingText>
            <SpendingSum strong>$28,963</SpendingSum>
          </TextWrapper>
          <Image src={chf} preview={false} />
        </SpendingWrapper>
      </BottomCol>
    </Wrapper>
  );
};
