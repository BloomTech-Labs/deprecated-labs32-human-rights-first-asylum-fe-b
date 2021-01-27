import styled from 'styled-components';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* padding: 2%; */

  img {
    height: 100px;
    width: auto;
  }

  h1 {
    color: black;
    text-align: center;
  }

  .ant-input {
    width: 550px;
  }

  .tagsitem {
    flex-direction: column;
  }
`;
