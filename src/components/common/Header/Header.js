import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Avatar, Typography, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StyledHeader } from './Header-styling';
import Logout from './Logout';

const { Title } = Typography;

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Logout />
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <StyledHeader>
        <Title>Human Rights First</Title>
        <Menu
          mode="horizontal"
          style={{ backgroundColor: 'inherit', border: 'none' }}
        >
          <Menu.Item>Who We Are</Menu.Item>
          <Menu.Item>
            <Link to="/upload">
              <Button type="primary">Upload</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={menu}>
              <Avatar size={50} icon={<UserOutlined />} />
            </Dropdown>
          </Menu.Item>
        </Menu>
      </StyledHeader>
    </>
  );
};

export default Header;
