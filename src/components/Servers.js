import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ServerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    color: white;
    background-color: var(--blue);
    transition: background-color 0.1s linear;
    &:hover {
        color: var(--media-text);
        background-color: white;
        border-radius: 0.5rem;
    }
`;

export default function ({ setServerId }) {
    const [servers, setServers] = useState([]);

    const getServers = async () => {
        await getDocs(collection(db, "servers")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setServers(newData);
        });
    };

    useEffect(() => {
        getServers();
    }, []);
    return (
        <>
            {servers.map((server) => (
                <ServerItem onClick={() => setServerId(server.id)}>
                    {server.name.substring(0, 1)}
                </ServerItem>
            ))}
        </>
    );
}
