import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import styled from "styled-components";

const MessageItem = styled.div``;

export default function ({ serverId, channelId }) {
    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        await getDocs(
            collection(
                db,
                "servers",
                serverId,
                "channels",
                channelId,
                "messages"
            )
        ).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setMessages(newData);
            console.log(newData);
        });
    };

    // useEffect(() => {
    //     getMessages();
    // }, []);
    return (
        <>
            {messages.map((message) => (
                <MessageItem key={message.id}>
                    {message.message} {message.username}
                </MessageItem>
            ))}
            {serverId}
            <button onClick={getMessages}>Get messages</button>
        </>
    );
}
