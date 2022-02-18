import { FC } from "react";
import { Image, Row, Col } from "antd";
import { Menu } from '../Menu/Menu'
import logo from '../../../img/logo.png';
import styled from 'styled-components';
import { ExtraSmallMenu } from "../Menu/ExtraSmallMenu/ExtraSmallMenu";

const Wrapper = styled(Row)`


`;
const LogoWrapper = styled(Col)`
  
`;
const MenuWrapper = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  @media (min-width: 768px) {

  }
`;



export const Navigation: FC = () => {


  return (
    <Wrapper>
      <LogoWrapper xs={12} sm={12} md={6} lg={4} xl={4}>
        <Image src={logo} preview={false} />
      </LogoWrapper>
      <MenuWrapper xs={12} sm={12} md={18} lg={20} xl={20}>
        <Menu />
      </MenuWrapper>
      <ExtraSmallMenu />
    </Wrapper>

  );
};
