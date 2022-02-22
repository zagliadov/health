import { FC } from 'react';
import styled from 'styled-components';
import { Row } from 'antd';
import secondPic from '../../img/secondPic.png';

const Wrapper = styled(Row)`
  display: flex;
  height: 50vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  background: url(${secondPic});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat; 
`;

const Shadow = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  background: #00A3D2;
  opacity: 0.7;
  filter: blur(200px);
  transform: rotate(-25.73deg);
`;
export const HowItWorksImage: FC = () => {

    return (
        <Wrapper>
            <ImageWrapper />
            <Shadow />
        </Wrapper>
    );
}