import styled from 'styled-components';
import { Layout } from 'antd';
const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--primary);

  ul {
    width: 40%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    border: none;
  }
`;
