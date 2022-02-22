import { FC } from 'react';
import styled from 'styled-components';
import { Row, Typography, Button } from 'antd';
import { CaretRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
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
  width: 70%;
`;

const ModifiedCaretRightOutlined = styled(CaretRightOutlined)`
  font-size: 33px;
  color: #ffffff;
`;

export const HowItWorks: FC = () => {


    return (
        <Wrapper>
            <TextWrapper>
                <ModifiedTitel>How it works</ModifiedTitel>
                <ModifiedText>
                    Tula Health, a digital health platform, combines state-of-the-art technology, artificial intelligence and machine learning with 24/7 monitoring and engagement services to produce lower healthcare costs and improved health.
                </ModifiedText>
            </TextWrapper>

            <ButtonWrapper>
                <VideoButton shape="circle" size="large">
                    <ModifiedCaretRightOutlined />
                </VideoButton>
                <Text>Whatch the video</Text>
            </ButtonWrapper>
        </Wrapper>
    );
}