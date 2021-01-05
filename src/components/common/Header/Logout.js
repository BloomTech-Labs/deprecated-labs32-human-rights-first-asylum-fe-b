import React from 'react';
import { Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

const Logout = () => {
  const { authService } = useOktaAuth();

  const logout = async () => {
    // Signs users out of Okta by ending their session on the Okta Authorization Server
    await authService.logout('/');
  };

  return (
    <Button onClick={() => logout()} type="primary">
      Logout
    </Button>
  );
};

export default Logout;
