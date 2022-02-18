import { FC } from "react";
import { Layout } from "antd";
import { Navigation } from "../Header/Navigation/Navigation";
import { FrontPage } from "../FrontPage/FrontPage";
import { HowItWorks } from "../HowItWorks/HowItWorks";
import { AboutTula } from "../AboutTula/AboutTula";
import styled from 'styled-components';

const { Header, Footer, Content } = Layout;

const ModifiedLayout = styled(Layout)`
  background: #ffffff;
`;
const ModifiedHeader = styled(Header)`
  background: #ffffff;
  padding: 10px;
  height: auto;
`;


export const App: FC = () => {
  return (
    <ModifiedLayout>
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
