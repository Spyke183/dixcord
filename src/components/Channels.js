import {
    collection,
    addDoc,
    getDocs,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import styled from "styled-components";

const addChannel = async (e) => {
    e.preventDefault();

    try {
        const docRef = await addDoc(
            collection(
                db,
                "servers",
                "f9tEVButWu29JFoMMO7R",
                "channels",
                "LtD9II3yFpuQq4E6l5Qd",
                "messages"
            ),
            {
                message: "general",
                username: "Sambeau",
                createAt: serverTimestamp(),
            }
        );
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const ChannelItem = styled.div``;

export default function ({ serverId, setChannelId }) {
    const [channels, setChannels] = useState([]);

    const getChannels = async () => {
        await getDocs(collection(db, "servers", serverId, "channels")).then(
            (querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setChannels(newData);
                console.log(newData);
            }
        );
    };

    // useEffect(() => {
    //     getChannels();
    // }, []);
    return (
        <>
            {channels.map((channel) => (
                <ChannelItem onClick={() => setChannelId(channel.id)}>
                    {channel.channelName}
                </ChannelItem>
            ))}
            {serverId}
            <button onClick={getChannels}>Get channels</button>
            <button type="submit" className="btn" onClick={addChannel}>
                Add channel
            </button>
        </>
    );
}
