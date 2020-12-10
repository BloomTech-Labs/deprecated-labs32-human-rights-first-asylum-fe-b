import styled from 'styled-components';
import { Layout } from 'antd';
const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: flex-end;

  ul {
    width: 20%;
    display: flex;
    justify-content: space-between;
  }
`;
