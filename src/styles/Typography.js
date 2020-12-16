import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    html {
        font-family: Helvetica, Arial, sans-serif;
        color: var(--font);
        font-size: 62.5%;
    }
`;

export default Typography;
