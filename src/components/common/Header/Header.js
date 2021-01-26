import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Menu } from 'antd';
import { StyledHeader } from './Header-styling';
import Logout from './Logout';
import Collections from './Collections/Collections.js';
import Logo from '../../../assets/hrf-logo.png';

const { Title } = Typography;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div>
          <img src={Logo} alt="Human Rights First Logo"></img>
          <Title className="titleFont">
            human rights <span className="italic">first</span>
          </Title>
        </div>
        <Menu
          mode="horizontal"
          style={{ backgroundColor: 'inherit', border: 'none' }}
        >
          <Menu.Item>
            <Link to="/upload">
              <Button type="primary">Upload</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Logout />
          </Menu.Item>
        </Menu>
      </StyledHeader>
      <Collections />
    </>
  );
};

export default Header;
