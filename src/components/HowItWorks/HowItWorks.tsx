import { FC } from "react";
import { Row, Col, Typography, Button, Image } from "antd";
// import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import grand from '../../img/grand.png';


const { Title, Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  border: 1px solid black;
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
  widht:100px;
  height: 100px;
  border: 1px solid red;
`;


export const HowItWorks: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper />
      <ButtonWrapper>asdf</ButtonWrapper>
    </Wrapper>
  );
};
