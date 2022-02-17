import { FC } from "react";
import { Row, Col, Typography, Button, Image } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import second from "../../img/second.png";
import union from "../../img/Union.png";
import base from "../../img/Base.png";
import secondBase from "../../img/SecondBase.png";

const { Title, Text } = Typography;

const LeftCol = styled(Col)`
  padding-top: 30px;
  padding-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightCol = styled(Col)`
  text-align: center;
  padding-top: 130px;
  padding-left: 20px;
  padding-right: 30px;
`;

const MainTitle = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 40px;
`;

const Shadow = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 0;
  right: -100px;
  bottom: -130px;
  background: #06be53;
  opacity: 0.3;
  filter: blur(300px);
  transform: matrix(0.89, -0.39, 0.48, 0.91, 0, 0);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  background: url(${second});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

interface PositionProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
const AbsoluteWrapper = styled.div<PositionProps>`
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  position: absolute;
  z-index: 1;
`;
const PlayVideoButton = styled(Button)`
  background: #000000;
`;
const ColForWatchVideoText = styled(Col)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HowItWorks: FC = () => {
  return (
    <Row style={{ height: "100vh" }}>
      <LeftCol span={12}>
        <ImageWrapper>
          <AbsoluteWrapper bottom="390px" right={"-50px"}>
            <Image src={union} width={130} />
          </AbsoluteWrapper>
          <AbsoluteWrapper bottom="0" left="-60px">
            <Image src={base} width={200} />
          </AbsoluteWrapper>
          <AbsoluteWrapper bottom="-130px" right="-160px">
            <Image src={secondBase} width={400} />
          </AbsoluteWrapper>
          <Shadow />
        </ImageWrapper>
      </LeftCol>

      <RightCol span={12}>
        <MainTitle>How it works</MainTitle>
        <Text>
          Tula Health combine state-of-art technology and service that support
          you in your management and control of diabetes.
        </Text>
        <Row style={{ paddingTop: "40px" }}>
          <Col span={12}>
            <PlayVideoButton
              size="large"
              type="primary"
              shape="circle"
              icon={<CaretRightOutlined />}
            />
          </Col>
          <ColForWatchVideoText span={12}>
            <Text>Whatch the video</Text>
          </ColForWatchVideoText>
        </Row>
      </RightCol>
    </Row>
  );
};
