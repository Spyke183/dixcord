import styled from "styled-components";

const DefaultChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--background-primary);
  color: var(--text);
`;

export default function ({ username }) {
  return <DefaultChat>Bienvenue sur Dixcord, {username} !</DefaultChat>;
}
