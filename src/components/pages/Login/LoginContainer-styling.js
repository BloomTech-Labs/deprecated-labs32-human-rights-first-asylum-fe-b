import styled from 'styled-components';
import HelpingHands from '../../../assets/HelpingHands.jpg';

export const StyledLogin = styled.div`
  display: flex;
  background-image: url(${HelpingHands});
  width: auto;
  height: 100vh;
  background-position: center;
  background-size: cover;

  #sign-in-widget {
    display: flex;
    align-items: center;
    margin: auto;
    margin-top: -1vh;

    #okta-sign-in.auth-container.main-container {
      font-family: Helvetica, Arial, sans-serif;
    }

    .o-form-head {
      font-size: 2.4rem;
    }

    .button-primary {
      background: #ac4018;
    }
  }
`;
