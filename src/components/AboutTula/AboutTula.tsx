import { FC } from "react";
import { Row, Typography, Col, Image, Button, Collapse } from "antd";
import styled from "styled-components";
import IconGenie from "../../img/IconGenie.png";
import IconWatch from "../../img/IconWatch.png";
import bigmen from '../../img/bigmen.png';


const { Title, Text } = Typography;
const { Panel } = Collapse;

const LeftCol = styled(Col)`
  text-align: center;
  padding-top: 130px;
  padding-left: 40px;
  padding-right: 30px;
`;
const RightCol = styled(Col)`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainTitle = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 40px;
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
const MyPanel = styled(Panel)`
  width: 80%;
  box-shadow: 1px 1px 1px 1px #f9fafb;
  padding-top: 20px;
  padding-left: 40px;
  text-align: start;
`;
const GetStartedButton = styled(Button)`
  background: #000000;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  padding-top: 25px;
`;
const ImageWrapper = styled.div`
  width: 80%;
  height: 100%;
  background: url(${bigmen});
  background-position: center center;
  background-size: contain;
  position: relative;
  z-index: 1;
  background-repeat: no-repeat;
`;
const Shadow = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 0;
  left: 0px;
  bottom: 30px;
  background: #06be53;
  opacity: 0.8;
  filter: blur(300px);
  transform: matrix(0.89, -0.39, 0.48, 0.91, 0, 0);
`;
export const AboutTula: FC = () => {
  const genExtra = (icon: string) => {
    return (
      <AbsoluteWrapper top="10px" left="-5px">
        <Image src={icon} width={15} />
      </AbsoluteWrapper>
    );
  };

  return (
    <Row style={{ height: "100vh" }}>
      <LeftCol span={12}>
        <MainTitle>About Tula</MainTitle>

        <Collapse defaultActiveKey={["1"]} expandIconPosition="right" ghost>
          <MyPanel header="Tula Genie" key="1" extra={genExtra(IconGenie)}>
            <Text>
              With Tula's Genie and a companion smartwatch you will better
              understand your body's unique characteristics as you monitor and
              track your blood sugar, steps, sleep and heart rate.
            </Text>
          </MyPanel>
          <MyPanel header="Tula Watch" key="2" extra={genExtra(IconWatch)}>
            <Text>
              With Tula's Genie and a companion smartwatch you will better
              understand your body's unique characteristics as you monitor and
              track your blood sugar, steps, sleep and heart rate.
            </Text>
          </MyPanel>
        </Collapse>
        <CardFooter>
          <GetStartedButton size="large" type="primary" shape="round">
            Get started
          </GetStartedButton>
          <Button size="large" type="link">
            <Text>Learn more</Text>
          </Button>
        </CardFooter>
      </LeftCol>
      <RightCol span={12}>
      <Shadow />
        <ImageWrapper />
      </RightCol>
    </Row>
  );
};
