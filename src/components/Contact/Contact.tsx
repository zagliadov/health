import { FC } from "react";
import styled from "styled-components";
import { Row, Col, Typography, Form, Input, Button } from "antd";

const { Text, Title } = Typography;
const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
`;
const TopCol = styled(Col)`
  display: flex;
  flex-direction: column;
  order: 1;
`;
const BottomCol = styled(Col)`
  display: flex;
  flex-direction: column;
  order: 2;
`;

const InputName = styled(Text)`
  position: absolute;
  margin-left: 40px;
  padding-left: 5px;
  padding-right: 5px;
  background: #ffffff;
  z-index: 3;
`;

const ContactInput = styled(Input)`
  border-radius: 60px;
  padding: 20px;
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
      <TopCol>
        <Title level={2}>Contact us</Title>
        <Text>Fill out the form below so we can tell you more about Tula</Text>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <InputName strong>
            Name
          </InputName>
          <Form.Item
            name="name"
            style={{ paddingTop: "10px" }}
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <ContactInput />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="Phone"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </TopCol>
      <BottomCol></BottomCol>
    </Wrapper>
  );
};
