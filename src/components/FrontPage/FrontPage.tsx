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
`;
const FirstCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: auto;
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
`;

const GetStartedButton = styled(Button)`  
  font-size: 22px;
  height: auto;
  width: 90%;
`;
const LearnMoreButton = styled(Button)`
  font-size: 20px;
  height: auto;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
`;




export const FrontPage: FC = () => {

  return (
    <Wrapper>
      <FirstCol xs={24} sm={24} md={24} lg={12} xl={12}>
        <TextWrapper>
          <ModifiedTitel>
            Tula Health for vibrant life you deserve
          </ModifiedTitel>
          <ModifiedText>
            Tula Health combine state-of-art technology and service that support you in your management and control of diabetes.
          </ModifiedText>
        </TextWrapper>

        <ButtonWrapper>
          <GetStartedButton type="primary" shape="round">
            Get started
          </GetStartedButton>
          <LearnMoreButton type="link">Learn more</LearnMoreButton>
        </ButtonWrapper>
      </FirstCol>
    </Wrapper>
  );
};
