import { FC } from 'react';
import styled from 'styled-components';
import { Typography, Image, Row, Col } from 'antd';
import arow from '../../img/saveMoneyArrow.png';

const { Title, Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #EEF1F4;
  opacity: 0.9;
  width: 100%;
  height: 100%;
`;

const TopCol = styled(Col)`

`;

const BottomCol = styled(Col)`

`;

const ModifiedTitle = styled(Title)`
    width: 50%;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width: 576px) {
        width: 100%;
    }
`;
const ModifiedText = styled(Text)`
    width: 80%;
    padding-top: 20px;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    width: 100%;
`;

const Shadow = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 1;
  right: 230px;
  top: 0px;
  background: #06BE53;
  opacity: 0.2;
  filter: blur(100px);
  transform: rotate(-25.73deg);
  @media (min-width: 768px) {
    right: 300px;
    top: 400px;
  }
  @media (min-width: 992px) {
    opacity: 0.1;
  }
`;

export const SaveMoney: FC = () => {

    return (
        <Wrapper>
            <TopCol xs={24} sm={24} md={24} lg={12}>
                <ImageWrapper>
                    <Image src={arow} preview={false} />
                </ImageWrapper>

                <ModifiedTitle>Save money with Tula</ModifiedTitle>
                <ModifiedText>With no real-time visibility and accountability, most patients diagnosed with chronic illnesses don’t understand the importance of managing their health until they are in the emergency room.</ModifiedText>
                <Shadow />
            </TopCol>
            <BottomCol xs={24} sm={24} md={24} lg={12}>
asdf
            </BottomCol>
        </Wrapper>
    )
}