import styled from 'styled-components';
import { Layout } from 'antd';
const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color: var(--primary);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: transparent;
    vertical-align: none;
    border: none;
  }

  li {
    height: 100%;
    display: flex;
    line-height: normal;
    vertical-align: none;
  }
`;
