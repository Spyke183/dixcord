import { useEffect } from "react";
import styled from "styled-components";
import { getMessages } from "../api/api";
const MessageItem = styled.div``;

export default function ({ serverId, channelId, messages, setMessages }) {
    useEffect(() => {
        getMessages(serverId, channelId, setMessages);
    }, []);
    return (
        <>
            {messages.map((message) => (
                <MessageItem key={message.id}>
                    {message.message} {message.username}
                </MessageItem>
            ))}
        </>
    );
}
