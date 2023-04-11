import { useEffect, useRef } from "react";
import styled from "styled-components";
import { getMessages } from "../api/api";
const MessageItem = styled.div``;

export default function ({ serverId, channelId, messages, setMessages }) {
  const bottomMessage = useRef(null);
  useEffect(() => {
    getMessages(serverId, channelId, setMessages);
    bottomMessage.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(
    () => bottomMessage.current.scrollIntoView({ behavior: "smooth" }),
    [messages]
  );
  return (
    <>
      {messages.map((message) => (
        <MessageItem key={message.id}>
          {message.message} {message.username}
        </MessageItem>
      ))}
      <div ref={bottomMessage}></div>
    </>
  );
}
