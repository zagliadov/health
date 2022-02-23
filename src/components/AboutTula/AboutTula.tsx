import { FC } from "react";
import { Row, Typography, Col, Image, Button, Collapse } from "antd";
import styled from "styled-components";
import IconGenie from "../../img/IconGenie.png";
import IconWatch from "../../img/IconWatch.png";
import bigmen from '../../img/bigmen.png';
import biggerBigman from '../../img/biggerBigman.png'


const { Title, Text } = Typography;
const { Panel } = Collapse;

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
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    order: 1;
  }
`;
const BottomCol = styled(Col)`
  height: 50vh;
  order: 2;
  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 992px) {
    height: 100vh;
    order: 2;
  }
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
  @media (max-width: 576px) {
    width: 100%;
    padding-left: 10px;
  }
`;
const GetStartedButton = styled(Button)`
  background: #000000;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 15px;
  @media (max-width: 576px) {
    padding-top: 100px;
  }
`;
const ImageAboutTula = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  background: url(${bigmen});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat; 
  @media (min-width: 768px) {
    background: url(${biggerBigman});
    background-repeat: no-repeat; 
    background-size: contain;
    background-position: center center;
  }
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
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    left: 0px;
    bottom: 330px;
    filter: blur(300px);
  }
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
    <Wrapper>
      <TopCol xs={24} sm={24} md={24} lg={12}>
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
      </TopCol>
      <BottomCol xs={24} sm={24} md={24} lg={12}>
        <ImageAboutTula />
        <Shadow />
      </BottomCol>
    </Wrapper>
  );
};
