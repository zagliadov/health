import { FC } from 'react';
import styled from 'styled-components';
import { Row, Typography, Col } from 'antd';
import bloodSugar from '../../img/bloodSugar.png';

const { Title, Text } = Typography;

const Wrapper = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
`;
const ModifiedCol = styled(Col)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ModifiedTitle = styled(Title)`
    padding-top: 20px;
`;

const ModifiedText = styled(Text)`
    width: 85%;
    text-align: center;
`;

const OptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 40px;
    width: 250px;
    height: auto;
`;

interface IImage {
    image: string;
}
const OptionImage = styled.div<IImage>`
    width: 70px;
    height: 70px;
    background: url(${({ image }) => image && image});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const Benefits: FC = () => {

    return (
        <Wrapper>
            <ModifiedTitle>Benefits</ModifiedTitle>
            <ModifiedCol xs={24} sm={12}>
                <OptionWrapper>
                    <OptionImage image={bloodSugar} />
                    <ModifiedTitle level={5}>Blood Sugar</ModifiedTitle>
                    <ModifiedText>Keep your blood sugar consistently supervised and under control</ModifiedText>
                </OptionWrapper>
                <OptionWrapper>
                    <OptionImage image={bloodSugar} />
                    <ModifiedTitle level={5}>Steps</ModifiedTitle>
                    <ModifiedText>Monitor your daily actvity via steps counter</ModifiedText>
                </OptionWrapper>
                <OptionWrapper>
                    <OptionImage image={bloodSugar} />
                    <ModifiedTitle level={5}>Heart Rate</ModifiedTitle>
                    <ModifiedText>Manage your cordial health with analysis of your heart rate</ModifiedText>
                </OptionWrapper>
                <OptionWrapper>
                    <OptionImage image={bloodSugar} />
                    <ModifiedTitle level={5}>Sleep</ModifiedTitle>
                    <ModifiedText>Track changes in your biorhythms and sleep quality</ModifiedText>
                </OptionWrapper>
            </ModifiedCol>
        </Wrapper>
    )
}