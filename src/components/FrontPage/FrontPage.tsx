import { FC } from "react";
import styled from "styled-components";
import secondPic from "../../img/secondPic.png";
import watchTheMember from '../../img/watchTheMember.png';
import { CaretRightOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Button, Divider } from "antd";


const { Title, Text } = Typography;


const Wrapper = styled(Row)`
  display: flex;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

const TextWrapper = styled.div`
`;

const ModifiedTitel = styled(Title)`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  line-height: 120%;
`;
const ModifiedText = styled(Text)`
  display: flex;  
  font-style: normal;
  text-align: center;
  font-weight: normal;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const GetStartedButton = styled(Button)`  
  font-size: 22px;
  height: auto;
  width: 90%;
  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 992px) {
    width: 40%;
  }
`;
const LearnMoreButton = styled(Button)`
  font-size: 20px;
  height: auto;
  @media (min-width: 768px) {
    padding-left: 100px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 20px;
  }
`;

const Shadow = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 0;
  right: 230px;
  top: 230px;
  background: #06be53;
  opacity: 0.8;
  filter: blur(300px);
  transform: matrix(0.89, -0.39, 0.48, 0.91, 0, 0);
`;

export const FrontPage: FC = () => {

  return (
    <Wrapper>
        <TextWrapper>
          <ModifiedTitel>
            Tula Health for vibrant life you deserve
          </ModifiedTitel>
          <ModifiedText>
            Tula Health combine state-of-art technology and service that support you in your management and control of diabetes.
          </ModifiedText>
          <Shadow />
        </TextWrapper>

        <ButtonWrapper>
          <GetStartedButton type="primary" shape="round">
            Get started
          </GetStartedButton>
          <LearnMoreButton type="link">Learn more</LearnMoreButton>
        </ButtonWrapper>
    </Wrapper>
  );
};
