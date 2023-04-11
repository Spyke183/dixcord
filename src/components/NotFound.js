import styled from "styled-components";
const NotFound = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: var(--background-primary);
    color: var(--text);
`;

export default function ({ children }) {
    return <NotFound>{children}</NotFound>;
}
