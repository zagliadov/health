import { FC } from "react";
import { Row, Col, Typography, Button, Image } from "antd";
// import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import firstPic from '../../img/firstPic.png';


const { Title, Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const LeftCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
`;
const RightCol = styled(Col)`
  display: flex;
  height: 50vh;
`;

const Shadow = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: ;
  right: 100px;
  bottom: -80px;
  background: #06be53;
  opacity: 0.3;
  filter: blur(300px);
  transform: matrix(0.89, -0.39, 0.48, 0.91, 0, 0);
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${firstPic});
  background-position: center center;
  background-size: contain;
  position: relative;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-position: top;
    height: 70%;
  }
`;
const HowItWorksTitle = styled(Title)`
  text-align: center;
`;
const TextWrapper = styled(Text)`
  width: 70%;
`;

export const HowItWorks: FC = () => {
  return (
    <Wrapper>
      <LeftCol>
        <Shadow />
        <HowItWorksTitle>
          How it works
        </HowItWorksTitle>
        <TextWrapper>
          We combine state-of-the-art monitoring technology with 24/7 support and encouragement that engages members in changing their behaviors and improving their health while reducing their overall cost of care.
        </TextWrapper>
      </LeftCol>

      <RightCol>
        <ImageWrapper />
      </RightCol>
    </Wrapper>
  );
};
