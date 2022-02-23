import { FC } from "react";
import { Layout } from "antd";
import { Navigation } from "../Header/Navigation/Navigation";
import { FrontPage } from "../FrontPage/FrontPage";
import { Member } from "../Member/Member";
import { AboutTula } from "../AboutTula/AboutTula";
import { HowItWorks } from '../HowItWorks/HowItWorks';
import styled from 'styled-components';
import { ExtraSmallMenu } from '../Header/Menu/ExtraSmallMenu/ExtraSmallMenu';
import { RootState, useAppSelector } from "../../features/app/store";
import { MedicalSupport } from '../MedicalSupport/MedicalSupport';
import { Benefits } from "../Benefits/Benefits";
import { RisksReduction } from "../RisksReduction/RisksReduction";
import { SaveMoney } from '../SaveMoney/SaveMoney';

const { Header, Footer, Content } = Layout;

const ModifiedLayout = styled(Layout)`
  background: #ffffff;
`;
const ModifiedHeader = styled(Header)`
  background: #ffffff;
  padding: 10px;
  height: auto;
`;
const FrontPageWrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
`;



export const App: FC = () => {

  const open = useAppSelector((state: RootState) => state.data.menuOpen);

  return (
    <ModifiedLayout>
      <ModifiedHeader>
        <Navigation />
      </ModifiedHeader>
      <Content>
        {open ?
          <ExtraSmallMenu />
          :
          <>
            <FrontPageWrapper>
              <FrontPage />
              <Member />
            </FrontPageWrapper>
            <HowItWorks />
            <AboutTula />
            <MedicalSupport />
            <Benefits />
            <RisksReduction />
            <SaveMoney />
          </>


        }




      </Content>
      <Footer>Footer</Footer>
    </ModifiedLayout>
  );
};
