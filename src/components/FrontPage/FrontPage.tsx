import { FC } from "react";
import styled from "styled-components";
import img from "../../img/Img.png";
import { Row, Col, Typography, Button, Image } from "antd";
import { Arrow } from "./Arrow";

const { Title, Text } = Typography;

const LeftCol = styled(Col)`
  text-align: center;
  padding-top: 130px;
  padding-left: 40px;
  padding-right: 20px;
`;
const RightCol = styled(Col)`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;`;

const MainTitle = styled(Title)`
  display: flex;
  align-items: center;
  text-align: center;
  padding-bottom: 40px;
`;
const Shadow = styled.div`
  width: 584px;
  height: 300px;
  position: absolute;
  z-index: 1;
  right: 200px;
  top: 200px;
  background: #06BE53;
  opacity: 0.85;
  filter: blur(380px);
  transform: rotate(-12.39deg);
`;
const ImageWrapper = styled.div`
  width: 80%;
  height: 100%;
  background: url(${img});
  background-position: center center;
  background-size: contain;
  position: relative;
  z-index: 1;
  background-repeat: no-repeat;
`;

export const FrontPage: FC = () => {
  return (
    <Row style={{height: '100vh'}}>
      <LeftCol span={12}>
      <Shadow />
        <MainTitle>Tula Health for vibrant life you deserve</MainTitle>
        <Text>
          Tula Health combine state-of-art technology and service that support
          you in your management and control of diabetes.
        </Text>
        <Row style={{paddingTop: '40px'}}>
          <Col span={12}>
            <Button type="primary" shape="round">
              Get started
            </Button>
          </Col>
          <Col span={12}>
            <Button type="link">Learn more</Button>
          </Col>
        </Row>
        <Arrow />
      </LeftCol>

      <RightCol span={12}>
        {/* <Image src={img} width={400} /> */}
        <ImageWrapper />
      </RightCol>
    </Row>
  );
};
