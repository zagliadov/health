import { FC } from 'react';
import styled from "styled-components";
import { Row, Typography, Col, Button } from "antd";
import xsCard1 from '../../img/medicalSupport/xs/Card1.png';
import xsCard2 from '../../img/medicalSupport/xs/Card2.png';
import xsCard3 from '../../img/medicalSupport/xs/Card3.png';
import xsCard4 from '../../img/medicalSupport/xs/Card4.png';
//
import smCard1 from '../../img/medicalSupport/md/Card1.png';
import smCard2 from '../../img/medicalSupport/md/Card2.png';
import smCard3 from '../../img/medicalSupport/md/Card3.png';
import smCard4 from '../../img/medicalSupport/md/Card4.png';
import xsCard from '../../img/xsCard.png';

const { Title, Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  height: 100%;
`;
const TopCol = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  height: 50vh;
  order: 1;
  @media (min-width: 768px) {
    height: 100vh
  }
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    order: 2;
  }
`;
const BottomCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  order: 2;
  @media (min-width: 768px) {
    height: 100vh
  }
  @media (min-width: 992px) {
    height: 100vh;
    order: 1;
  }
`;
const LeftFotoCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const RightFotoCol = styled(Col)`
  
`;

const TextWrapper = styled.div`
    padding: 10px;
    padding-bottom: 40px;
`;

const ModifiedTitel = styled(Title)`
  font-style: normal;
  font-weight: bold;
  line-height: 120%;
`;

const ModifiedText = styled(Text)`
  display: flex;  
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const LearnMoreButton = styled(Button)`
  width: 85%;
  height: auto;
  background: #000000;
`;

const ButtonText = styled(Text)`
  font-size: 24px;
  color: #ffffff;
`;
interface IImage {
    card: string;
    smCard: string;
    width: number;
    smWidth: number;
    smHeight: number;
    height: number;
}
const Image = styled.div<IImage>`
    width: ${({ width }) => width && width}px;
    height: ${({ height }) => height && height}px;
    background: url(${({ card }) => card && card});
    background-size: initial;
    background-repeat: no-repeat;
    @media (min-width: 768px) {
        width: ${({ smWidth }) => smWidth && smWidth}px;
        height: ${({ smHeight }) => smHeight && smHeight}px;
        background: url(${({ smCard }) => smCard && smCard});
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media (min-width: 992px) {
        width: ${({ smWidth }) => smWidth && smWidth}px;
        height: ${({ smHeight }) => smHeight && smHeight}px;
        background: url(${({ smCard }) => smCard && smCard});
        background-size: cover;
        background-repeat: no-repeat;
      }
`;

const XsImage = styled.div`
    width: 100%;
    height: 100%;
    background: url(${xsCard});
    background-size: contain;
    background-repeat: no-repeat;
`;

export const MedicalSupport: FC = () => {

    return (
        <Wrapper>
            <TopCol xs={24} sm={24} md={24} lg={12}>
                <TextWrapper>
                    <ModifiedTitel>Medical support 24/7</ModifiedTitel>
                    <ModifiedText>Unleash your inner strength, and don’t let diabetes slow you down! Tula provides you with a tailored network of support that keeps you on track with your goals and treatment plans so you can enjoy the vibrant life you deserve.</ModifiedText>
                </TextWrapper>
                <LearnMoreButton type="primary" shape="round">
                    <ButtonText>Get started</ButtonText>
                </LearnMoreButton>
            </TopCol>

            <BottomCol xs={24} sm={24} md={24} lg={12}>
                <XsImage />
                {/* <LeftFotoCol span={14}>
                    <Image
                        card={xsCard1}
                        smCard={smCard1}
                        width={220}
                        height={270}
                        smWidth={416}
                        smHeight={533} />
                    <Image
                        card={xsCard3}
                        smCard={smCard3} 
                        width={160}
                        height={190}
                        smWidth={256}
                        smHeight={323} />
                </LeftFotoCol>

                <RightFotoCol span={10}>
                    <Image
                        card={xsCard2}
                        smCard={smCard2} width={160}
                        height={190}
                        smWidth={256}
                        smHeight={323} />

                    <Image
                        card={xsCard4}
                        smCard={smCard4} 
                        width={160}
                        height={190}
                        smWidth={256}
                        smHeight={323} />
                </RightFotoCol> */}
            </BottomCol>
        </Wrapper>
    )
}