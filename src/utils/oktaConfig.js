const config = {
  issuer: 'https://dev-625244.okta.com/outh2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oauwlyl5Xf6AvJxv4x6',
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
