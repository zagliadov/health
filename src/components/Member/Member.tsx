import { FC } from "react";
import { Row, Typography, Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import watchTheMember from '../../img/watchTheMember.png';
import grand from '../../img/grand.png';


const { Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 60%;
  background: url(${grand});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat; 
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 100px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  @media (min-width: 768px) {
    width: 272px;
    position: absolute;
    bottom: 240px;
    right: 140px;
    background-color: #ffffff;
  }
  @media (min-width: 992px) {
    right: 30px;
  }
`;
const VideoButton = styled(Button)`
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

export const Member: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper />
      <ButtonWrapper>
        <VideoButton shape="circle" size="large">
          <ModifiedCaretRightOutlined />
        </VideoButton>
        <Text>Whatch the member video</Text>
      </ButtonWrapper>
    </Wrapper>
  );
};
