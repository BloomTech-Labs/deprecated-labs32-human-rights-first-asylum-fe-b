import React from 'react';
import { Menu } from 'antd';
import { StyledFooter } from './Footer-styling';

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Menu mode="horizontal">
          <Menu.Item>
            <a href="#">Contact</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#">Privacy</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#">Terms</a>
          </Menu.Item>
        </Menu>
      </StyledFooter>
    </>
  );
};

export default Footer;
