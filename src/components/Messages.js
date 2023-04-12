import styled from "styled-components";
import { useState } from "react";
import msg from "../data/messages.json";

const ContainerGeneral = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;

    img {
        padding: 0.25rem 1rem;
        height: 40px;
        width: 40px;
        margin-right: 16px;
    }
    span {
        font-size: 15px;
        font-weight: 700;
        color: white;
    }
`;

const BarreContainer = styled.div`
    display: flex;

    &:hover {
        background-color: var(--background-message-hover);
    }
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; /* ajout */

    img {
        height: 40px;
        width: 40px;
        margin-right: 16px;
    }
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const NomContainer = styled.div`
    span {
        font-size: 15px;
        font-weight: 700;
        color: var(--text);
    }
`;

const MessageContainer = styled.div`
    span {
        font-size: 15px;
        font-weight: 300;
        color: var(--text);
    }
`;

const Upload = styled.div`
    margin: 0 16px 16px 0;
    min-height: 100px;
    max-width: 100%;
    width: 47rem;
    border: 1px solid var(--background-darker);
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: var(--background-secondary);
    color: var(--media-text);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--hover-color);
    }

    @media (max-width: 1200px) {
        width: 30rem;
    }

    @media (max-width: 820px) {
        width: 15rem;
    }
`;

export default function () {
    const [result, setResult] = useState(msg);

    return (
        <>
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
                                {msg.media === "file.png" && (
                                    <Upload>file.png</Upload>
                                )}
                            </MessageContainer>
                        </RowContainer>
                    </BarreContainer>
                ))}
            </ContainerGeneral>
        </>
    );
}
