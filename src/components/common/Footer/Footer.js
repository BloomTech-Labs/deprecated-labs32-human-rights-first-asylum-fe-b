import React from 'react';
import { Menu } from 'antd';
import { StyledFooter } from './Footer-styling';

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Menu mode="horizontal">
          <Menu.Item>
            <a href="#" className="anchor-footer">
              Contact
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="anchor-footer">
              Privacy
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="anchor-footer">
              Terms
            </a>
          </Menu.Item>
        </Menu>
      </StyledFooter>
    </>
  );
};

export default Footer;
