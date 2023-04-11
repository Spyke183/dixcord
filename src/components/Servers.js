import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { ServerItem } from "./ServerItem";
import { Link } from "react-router-dom";
import { getServers } from "../api/api";

export default function ({ setServerId, setServerName, servers, setServers }) {
    useEffect(() => {
        getServers(setServers);
    }, []);
    return (
        <>
            {servers.map((server) => (
                <Link key={server.id} to={`${server.id}`}>
                    <ServerItem
                        onClick={() => {
                            setServerId(server.id);
                            setServerName(server.name);
                        }}
                    >
                        <span></span>
                        {server.name.substring(0, 1)}
                    </ServerItem>
                </Link>
            ))}
        </>
    );
}
