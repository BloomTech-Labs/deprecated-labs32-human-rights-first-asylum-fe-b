import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  justify-content: space-between;

  .background-image {
    background-image: url('https://via.placeholder.com/150?text=Placeholder');
    width: 50vw;
    height: 100vh;
  }

  #sign-in-widget {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 20%;

    #okta-sign-in.auth-container.main-container {
      font-family: Helvetica, Arial, sans-serif;
    }

    .o-form-head {
      font-size: 2.4rem;
    }

    .button-primary {
      background: darkblue;
    }
  }
`;
