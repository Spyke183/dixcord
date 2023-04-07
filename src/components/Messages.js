import styled from "styled-components";
import discordLogo from "../images/Avatar.svg";
import { useState } from "react";
import msg from "../data/messages.json";

const Messages = styled.div`
  grid-template-columns: 3rem 1fr;
  margin-top: 1rem;
  gap: 1rem;
  padding: 0.25rem 1rem;
`;

const InputContainer = styled.div`
  position: relative;
  align-items: center;
  diplay: flex;

  > img {
    height: 40px;
    width: 40px;
    margin-right: 16px;
  }
`;

const ContainerGeneral = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  > img {
    height: 40px;
    width: 40px;
    margin-right: 16px;
  }
  > span {
    font-size: 15px;
    font-weight: 700;
    color: white;
  }
`;
const BarreContainer = styled.div`
  display: flex;
  padding-top: 1rem;

  &:hover {
    background-color: var(--background-message-hover);
  }
`;
const NomContainer = styled.div`
  > span {
    font-size: 15px;
    font-weight: 300;
    color: white;
  }
`;
const MessageContainer = styled.div`
  > span {
    font-size: 15px;
    font-weight: 300;
    color: white;
  }
`;

const Upload = styled.div`
  margin: 16px;
  min-height: 100px;
  width: 50%;
  border: 1px solid var(--background-darker);
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: var(--background-secondary);
  color: var(--media-text);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function () {
  const [result, setResult] = useState(msg);

  return (
    <>
      <Messages>
        <ContainerGeneral>
          {result.map((msg) => (
            <BarreContainer>
              <InputContainer>
                <img src={msg.imgavatar} alt={msg.name} />
              </InputContainer>
              <RowContainer>
                <NomContainer>
                  <span>{msg.user}</span>
                </NomContainer>
                <MessageContainer>
                  <span>{msg.message}</span>
                </MessageContainer>
              </RowContainer>
            </BarreContainer>
          ))}
        </ContainerGeneral>
      </Messages>
    </>
  );
}
