import { FC } from "react";
import { Row, Col, Typography, Button, Image } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import base from "../../img/Base.png";


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
  // background: url();
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
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
