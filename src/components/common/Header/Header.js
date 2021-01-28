import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Menu, Modal } from 'antd';
import { StyledHeader } from './Header-styling';
import UploadFile from '../../pages/UploadFile/Upload';
import Logout from './Logout';
import Collections from './Collections/Collections.js';
import Logo from '../../../assets/hrf-logo.png';

const { Title } = Typography;

const Header = () => {
  // Modal Handlers:
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
            <Button type="primary" onClick={showModal}>
              Upload
            </Button>
            <Modal
              // title="Upload"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              width={600}
              centered
            >
              <UploadFile />
            </Modal>
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
