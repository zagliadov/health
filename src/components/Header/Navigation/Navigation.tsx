import { FC } from "react";
import { Image, Row, Col } from "antd";
import logo from '../../../img/logo.png';
import styled from 'styled-components';

const Wrapper = styled(Row)`
  border: 1px solid black;

`;

export const Navigation: FC = () => {


  return (
    <Wrapper>
      <Image src={logo} preview={false} />

    </Wrapper>

  );
};
