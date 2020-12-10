import React from 'react';
import { Button, Avatar, Typography, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StyledHeader } from './Header-styling';

const { Title } = Typography;

const Header = () => {
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
            <Avatar size="large" icon={<UserOutlined />} />
          </Menu.Item>
        </Menu>
      </StyledHeader>
    </>
  );
};

export default Header;
