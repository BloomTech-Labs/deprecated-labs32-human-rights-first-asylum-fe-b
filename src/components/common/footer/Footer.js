import React from 'react';
import { Menu } from 'antd';
import { StyledFooter } from './Footer-styling';

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Menu mode="horizontal">
          <Menu.Item>
            <a
              href="https://www.humanrightsfirst.org/about/contact"
              style={{ color: 'white' }}
            >
              Contact
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="https://www.humanrightsfirst.org/about/privacy-policy"
              style={{ color: 'white' }}
            >
              Privacy
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="https://www.humanrightsfirst.org/about/privacy-policy"
              style={{ color: 'white' }}
            >
              Terms
            </a>
          </Menu.Item>
        </Menu>
      </StyledFooter>
    </>
  );
};

export default Footer;
