import { FC } from "react";
import styled from "styled-components";
import secondPic from "../../img/secondPic.png";
import watchTheMember from '../../img/watchTheMember.png';
import { CaretRightOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Button } from "antd";


const { Title, Text } = Typography;

const LeftCol = styled(Col)`
  text-align: center;
  padding-top: 130px;
  padding-left: 40px;
  padding-right: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itmes: center;
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    height: 100vh;
  }
`;
const RightCol = styled(Col)`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 0px;
    height: 100vh;
  }
`;

const PageRow = styled(Row)`
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;


const MainTitle = styled(Title)`  
  padding-bottom: 40px;
`;
const Shadow = styled.div`
  width: 484px;
  height: 300px;
  position: absolute;
  z-index: 1;
  right: 70px;
  top: 200px;
  background: #06BE53;
  opacity: 0.95;
  filter: blur(380px);
  transform: rotate(-12.39deg);
  @media (max-width: 768px) {
    filter: blur(280px);
    width: 300px;
    right: 290px;
    top: 60px;
  }
`;
const GetStartedButton = styled(Button)`
  background-color: #000000;
  @media (max-width: 768px) {
    width: 70%;
    font-size: 20px;
    height: 50px;
  }
`;
const LearnMoreButton = styled(Button)`
  @media (max-width: 768px) {
    padding-top: 35px;
    font-size: 20px;
    height: 50px;
  }
`;
const ImageWrapper = styled.div`
  width: 80%;
  height: 100%;
  background: url(${secondPic});
  background-position: center center;
  background-size: contain;
  position: relative;
  z-index: 6;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-position: top;
    height: 70%;
  }
`;
const TextWrapper = styled(Text)`
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
const WatchVideoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  width: 70%;
  height: 115px;
`;
const ButtonWrapper = styled(Button)`
  width: 80px;
  height: 80px;
  background: url(${watchTheMember});
  background-position: center center;
  background-size: cover;
  &:hover,
  &:focus,
  &:active {
    background: url(${watchTheMember});
    background-position: center center;
    background-size: cover;
  }
`;

const ModifiedCaretRightOutlined = styled(CaretRightOutlined)`
  font-size: 33px;
  color: #ffffff;
`;

const TextWhatchVideo = styled(Text)`
  font-size: 22px;
`;


export const FrontPage: FC = () => {

  return (
    <PageRow>
      <LeftCol xs={24} sm={24} md={24} lg={12} xl={12}>
        <Shadow />
        <MainTitle>Tula Health for vibrant life you deserve</MainTitle>
        <TextWrapper>
          Tula Health combine state-of-art technology and service that support
          you in your management and control of diabetes.
        </TextWrapper>
        <Row style={{ paddingTop: '40px' }}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <GetStartedButton type="primary" shape="round">
              Get started
            </GetStartedButton>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <LearnMoreButton type="link">Learn more</LearnMoreButton>
          </Col>
        </Row>
      </LeftCol>

      <RightCol xs={24} sm={24} md={24} lg={12} xl={12}>
        <ImageWrapper />
        <Shadow />
        <WatchVideoWrapper>
          <ButtonWrapper shape="circle">
            <ModifiedCaretRightOutlined />
          </ButtonWrapper>
          <TextWhatchVideo strong>
            Whatch the member video
          </TextWhatchVideo>
        </WatchVideoWrapper>
      </RightCol>
    </PageRow>
  );
};
