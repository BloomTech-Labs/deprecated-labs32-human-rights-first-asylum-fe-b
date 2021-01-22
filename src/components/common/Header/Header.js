import React from 'react';
import { Button, Avatar, Typography, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StyledHeader } from './Header-styling';
import Logout from './Logout';

const { Title } = Typography;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Title>Human Rights First</Title>
        <Menu
          mode="horizontal"
          style={{ backgroundColor: 'inherit', border: 'none' }}
        >
          <Menu.Item>
            <Button type="primary">Upload</Button>
          </Menu.Item>
          <Menu.Item>
            <Logout />
          </Menu.Item>
        </Menu>
      </StyledHeader>
    </>
  );
};

export default Header;
