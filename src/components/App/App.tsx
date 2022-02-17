import { FC } from "react";
import { Layout } from "antd";
import { Navigation } from "../Header/Navigation/Navigation";
import { FrontPage } from "../FrontPage/FrontPage";
import { HowItWorks } from "../HowItWorks/HowItWorks";
import { AboutTula } from "../AboutTula/AboutTula";

const { Header, Footer, Content } = Layout;

export const App: FC = () => {
  return (
    <Layout>
      <Header style={{ background: "white", height: "auto" }}>
        <Navigation />
      </Header>
      <Content style={{ background: "white" }}>
        <FrontPage />
        <HowItWorks />
        <AboutTula />
      </Content>
      <Footer style={{ background: "white" }}>Footer</Footer>
    </Layout>
  );
};
