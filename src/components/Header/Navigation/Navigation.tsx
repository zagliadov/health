import { FC } from "react";
import { Menu } from "antd";
import { Logo } from "../Logo/Logo";



export const Navigation: FC = () => {
  const menuItem = {
    display: 'flex',
    alignItems: 'flex-end',
  }
  return (
    <Menu theme="light" mode="horizontal" 
    defaultSelectedKeys={["2"]}>
      <Menu.Item key="logo">
        <Logo />
      </Menu.Item>
      <Menu.Item key="0" style={menuItem}>Main</Menu.Item>
      <Menu.Item key="1" style={menuItem}>Organizations</Menu.Item>
      <Menu.Item key="2" style={menuItem}>Individuals</Menu.Item>
      <Menu.Item key="3" style={menuItem}>Tech</Menu.Item>
      <Menu.Item key="4" style={menuItem}>Team</Menu.Item>
      <Menu.Item key="5" style={menuItem}>News</Menu.Item>
      <Menu.Item key="6" style={menuItem}>Contact</Menu.Item>
    </Menu>
  );
};
