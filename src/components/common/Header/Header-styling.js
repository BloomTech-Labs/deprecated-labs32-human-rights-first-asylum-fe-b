import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  background-color: var(--primary);
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.36);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.36);
  height: 10vh;
  h1,
  ul {
    // Title component in Ant Design
    margin: auto 0;
    color: var(--white);
  }
  // title flex
  div {
    display: flex;
  }
  //title font
  .titleFont {
    font-family: 'Crimson Text', serif;
  }
  //span italic for "first"
  .italic {
    font-family: 'Crimson Text', serif;
    font-style: italic;
  }

  ul {
    // Menu component in Ant Design
    width: 40%;
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
  }

  //upload button
  button {
    width: 90px;
    height: 35px;
    text-align: center;
    vertical-align: center;
  }

  //logout button
  svg {
    width: 25px;
    height: 25px;
    margin-top: 20px;
  }

  //logo png
  img {
    height: 60px;
    margin: auto 0;
    padding: 4px;
  }
`;
