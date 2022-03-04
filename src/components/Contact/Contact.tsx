import { FC } from "react";
import styled from "styled-components";
import { Row, Col, Divider, Typography, Form, Input, Button } from "antd";
import contactImg from "../../img/contact.png";
import bigContact from "../../img/bigContact.png";

const { Text, Title } = Typography;
const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
const TopCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 1;
  @media (min-width: 768px) {
    margin: 0 auto;
    align-items: center;
    width: 60%;
  }
  @media (min-width: 992px) {
    order: 2;
    justify-content: center;
  }
`;
const BottomCol = styled(Col)`
  padding-top: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  order: 2;
  @media (min-width: 992px) {
    order: 1;
  }
`;

const InputName = styled(Text)`
  position: absolute;
  margin-left: 40px;
  padding-left: 5px;
  padding-right: 5px;
  background: #ffffff;
  z-index: 3;
`;

const ContactForm = styled(Form)`
  padding-top: 20px;
`;

const ContactInput = styled(Input)`
  width: 400px;
  border-radius: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
`;

const SendButton = styled(Button)`
  height: 60px;
  width: 90%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactImage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 3;
  background: url(${contactImg});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    background: url(${bigContact});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media (min-width: 992px) {
    background: url(${contactImg});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const Contact: FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      <TopCol xs={24} sm={24} md={24} lg={12}>
        <Title level={2}>Contact us</Title>
        <Text>Fill out the form below so we can tell you more about Tula</Text>

        <ContactForm
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <InputName strong>Name</InputName>
          <Form.Item
            name="name"
            style={{ paddingTop: "10px" }}
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <ContactInput placeholder="Merry Colin" />
          </Form.Item>

          <InputName strong>Email</InputName>
          <Form.Item
            name={["user", "email"]}
            style={{ paddingTop: "10px" }}
            rules={[{ type: "email" }]}
          >
            <ContactInput placeholder="merry.colin@gmail.com" />
          </Form.Item>

          <InputName strong>Phone</InputName>
          <Form.Item
            style={{ paddingTop: "10px" }}
            name="Phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <ContactInput placeholder="+8( )" />
          </Form.Item>
          <Divider />
          <ButtonWrapper>
            <SendButton shape="round">Send</SendButton>
          </ButtonWrapper>
        </ContactForm>
      </TopCol>

      <BottomCol xs={24} sm={24} md={24} lg={12}>
        <ContactImage />
      </BottomCol>
    </Wrapper>
  );
};
