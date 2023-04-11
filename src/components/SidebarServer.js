import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DiscordLogo } from "../images/discord.svg";
import { ReactComponent as PlusLogo } from "../images/plus.svg";
import { ServerItem } from "./ServerItem";
import Servers from "./Servers";
import { addServer } from "../api/api";
import { useState } from "react";

const ServerSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
    width: 72px;
    flex: 0 0 auto;
    background: var(--background-sidebar-server);
    padding: 0;
    padding-top: 0.5rem;

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

const Separator = styled.span`
    display: block;
    margin: 0 auto;
    margin-bottom 0.5rem;
    width: 32px;
    height: 2px;
    border-radius: 1px;
    background-color: var(--separator-color);
`;

export default function ({ setServerId, setServerName }) {
    const [servers, setServers] = useState([]);
    return (
        <ServerSidebar>
            <Link to="">
                <ServerItem>
                    <span></span>
                    <DiscordLogo />
                </ServerItem>
            </Link>
            <Separator />
            <Servers
                setServerId={setServerId}
                setServerName={setServerName}
                servers={servers}
                setServers={setServers}
            />
            <ServerItem
                className="add"
                onClick={(e) => addServer(e, setServers)}
            >
                <PlusLogo />
            </ServerItem>
        </ServerSidebar>
    );
}
