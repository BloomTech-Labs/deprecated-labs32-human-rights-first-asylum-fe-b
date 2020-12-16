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
  }

  ul {
    // Menu component in Ant Design
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
`;
