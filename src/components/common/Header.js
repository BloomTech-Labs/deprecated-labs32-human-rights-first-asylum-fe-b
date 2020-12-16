import React from 'react';
import { Button, Avatar, Typography, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StyledHeader } from './Header-styling';

const { Title } = Typography;

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );

  return (
    <>
      <StyledHeader>
        <Title>Human Rights First</Title>
        <Menu mode="horizontal">
          <Menu.Item>Who We Are</Menu.Item>
          <Menu.Item>
            <Button type="primary">Upload</Button>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={menu}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Dropdown>
          </Menu.Item>
        </Menu>
      </StyledHeader>
    </>
  );
};

export default Header;
