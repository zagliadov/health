import { FC } from 'react';
import styled from "styled-components";
import { Row, Typography, Col, Image } from "antd";
import diagram1 from '../../img/diagram/diagram1.png';
import diagram2 from '../../img/diagram/diagram2.png';
import diagram3 from '../../img/diagram/diagram3.png';
import diagram4 from '../../img/diagram/diagram4.png';
import diagram5 from '../../img/diagram/diagram5.png';
import diagram6 from '../../img/diagram/diagram6.png';


const { Title, Text } = Typography;

const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #EEF1F4;
  opacity: 0.9;
  width: 100%;
  height: 100%;
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

const DiagramWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`;
const DiagramItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 352px;
    height: 147px;
    box-shadow: 4px 8px 24px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
`;
const DiagramPercent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
`;

const Percent = styled(Title)`

`;
const Risk = styled(Text)`
`;

export const RisksReduction: FC = () => {

    return (
        <Wrapper>
            <ModifiedTitle>
                Health risks reduction
                in numbers
            </ModifiedTitle>
            <DiagramWrapper>
                <DiagramItem>
                    <Image src={diagram1} preview={false} />
                    <DiagramPercent>
                        <Percent level={1}>76%</Percent>
                        <Risk>In kidney failure</Risk>
                    </DiagramPercent>
                </DiagramItem>

                <DiagramItem>
                    <Image src={diagram2} preview={false} />
                    <DiagramPercent>
                        <Percent level={1}>60%</Percent>
                        <Risk>In nerve disease (neuropathy)</Risk>
                    </DiagramPercent>
                </DiagramItem>

                <DiagramItem>
                    <Image src={diagram3} preview={false} />
                    <DiagramPercent>
                        <Percent level={1}>57%</Percent>
                        <Risk>In foot ulcers</Risk>
                    </DiagramPercent>
                </DiagramItem>

                <DiagramItem>
                    <Image src={diagram4} preview={false} />
                    <DiagramPercent>
                        <Percent level={1}>34%</Percent>
                        <Risk>Reduction in amputation</Risk>
                    </DiagramPercent>
                </DiagramItem>

                <DiagramItem>
                    <Image src={diagram4} preview={false} />
                    <DiagramPercent>
                        <Percent level={1}>60%</Percent>
                        <Risk>In eye disease (retinopathy)</Risk>
                    </DiagramPercent>
                </DiagramItem>

                <DiagramItem>
                    <Image src={diagram4} preview={false} />
                    <DiagramPercent>
                        <Percent level={1}>57%</Percent>
                        <Risk>IIn nonfatal heart attack</Risk>
                    </DiagramPercent>
                </DiagramItem>

            </DiagramWrapper>
        </Wrapper>
    )
}