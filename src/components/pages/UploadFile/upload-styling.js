import styled from 'styled-components';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2%;

  h1 {
    color: #032854;
    text-align: center;
    font-family: 'Copperplate';
    font-size: 2.5em;
  }

  .ant-input,
  .ant-select-selector {
    width: 550px;
    margin-bottom: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    font-size: 1.125em;
    font-family: 'Verdana';
  }

  .tagsitem {
    flex-direction: column;

  }
`;
