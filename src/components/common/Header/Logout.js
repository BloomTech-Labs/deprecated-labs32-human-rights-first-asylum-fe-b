import React from 'react';
import { Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

const Logout = () => {
  const { authService } = useOktaAuth();

  const logout = async () => {
    // Will redirect to Okta to end the session then redirect back to the configured `postLogoutRedirectUri`
    await authService.logout('/');
    console.log('working');
  };

  return (
    <Button onClick={() => logout()} type="primary">
      Logout
    </Button>
  );
};

export default Logout;
