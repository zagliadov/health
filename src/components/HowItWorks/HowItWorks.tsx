import { FC } from 'react';
import styled from 'styled-components';
import { Row, Typography, Button, Col } from 'antd';
import { CaretRightOutlined } from "@ant-design/icons";
import secondPic from '../../img/secondPic.png';
import bigSecondPic from '../../img/bigSecondPic.png';


const { Title, Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  height: 100vh;
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
  height: 50vh;
  order: 2;
  @media (min-width: 992px) {
    height: 100vh;
    order: 1;
  }
`;
const TextWrapper = styled.div`
    padding: 10px;
`;

const ModifiedTitel = styled(Title)`
  font-style: normal;
  font-weight: bold;
  line-height: 120%;
`;

const ModifiedText = styled(Text)`
  display: flex;  
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const VideoButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  width: 80px;
  height: 80px;
  &:hover,
  &:focus,
  &:active {
    background-color: #000000;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  width: 70%;
  @media (min-width: 768px) {
    padding-top: 40px;
  }
`;

const ModifiedCaretRightOutlined = styled(CaretRightOutlined)`
  font-size: 33px;
  color: #ffffff;
`;


const ImageHowItWorks = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  background: url(${secondPic});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat; 
  @media (min-width: 768px) {
    background: url(${bigSecondPic});
    background-repeat: no-repeat; 
    background-position: center center;
    background-size: contain;
  }
`;

const Shadow = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 0;
  left: 0px;
  top: 0px;
  background: #00A3D2;
  opacity: 0.7;
  filter: blur(200px);
  transform: rotate(-25.73deg);
  @media (min-width: 992px) {
    left: 100px;
    top: 250px;
  }
  
`;

export const HowItWorks: FC = () => {


  return (
    <Wrapper>
      <TopCol xs={24} sm={24} md={24} lg={12}>
        <TextWrapper>
          <ModifiedTitel>How it works</ModifiedTitel>
          <ModifiedText>Tula Health, a digital health platform, combines state-of-the-art technology, artificial intelligence and machine learning with 24/7 monitoring and engagement services to produce lower healthcare costs and improved health.</ModifiedText>
        </TextWrapper>
        <ButtonWrapper>
          <VideoButton shape="circle"><ModifiedCaretRightOutlined /></VideoButton>
          <ModifiedText>Whatch the video</ModifiedText>
        </ButtonWrapper>
      </TopCol>

      <BottomCol xs={24} sm={24} md={24} lg={12}>
          <ImageHowItWorks />
          <Shadow />
      </BottomCol>

    </Wrapper>
  );
}