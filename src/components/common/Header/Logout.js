import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';

const Logout = () => {
  const { authService } = useOktaAuth();

  const logout = async () => {
    // Signs users out of Okta by ending their session on the Okta Authorization Server
    await authService.logout('/');
  };

  return (
    <LogoutOutlined onClick={() => logout()} type="primary"></LogoutOutlined>
  );
};

export default Logout;
