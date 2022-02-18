import { FC } from "react";
import { useAppSelector, RootState } from "../../features/app/store";
import { Layout } from "antd";
import { Navigation } from "../Header/Navigation/Navigation";
import { FrontPage } from "../FrontPage/FrontPage";
import { HowItWorks } from "../HowItWorks/HowItWorks";
import { AboutTula } from "../AboutTula/AboutTula";
import styled from 'styled-components';

const { Header, Footer, Content } = Layout;

interface IMenuOpen {
  open: boolean;
}
const ModifiedLayout = styled(Layout)<IMenuOpen>`
  // overflow-y: ${({open}) => open ? 'hidden' : 'visible'};
  
  background: #ffffff;
`;
const ModifiedHeader = styled(Header)`
  background: #ffffff;
  padding: 10px;
  height: auto;
`;


export const App: FC = () => {
  const open = useAppSelector((state: RootState) => state.data.menuOpen);

  return (
    <ModifiedLayout open={open}>
      <ModifiedHeader>
        <Navigation />
      </ModifiedHeader>
      <Content>
        <FrontPage />
        <HowItWorks />
        <AboutTula />
      </Content>
      <Footer>Footer</Footer>
    </ModifiedLayout>
  );
};
