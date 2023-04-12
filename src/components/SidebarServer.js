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
    justify-content: space-between;
    min-height: 0;
    width: 72px;
    flex: 0 0 auto;
    background: var(--background-sidebar-server);
    padding: 0;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export default function () {
    return (
        <ServerSidebar>
            <Servers />
        </ServerSidebar>
    );
}
