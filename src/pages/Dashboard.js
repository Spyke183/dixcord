import { useState } from "react";

import styled from "styled-components";
import ServerSidebar from "../components/SidebarServer";
import SidebarChannel from "../components/SidebarChannel";
import Chat from "../components/Chat";

const Container = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    overflow: hidden;
`;
export default function () {
    const [serverId, setServerId] = useState(null);
    const [channelId, setChannelId] = useState(null);
    return (
        <Container>
            <Wrapper>
                <ServerSidebar setServerId={setServerId} />
                <SidebarChannel
                    serverId={serverId}
                    setChannelId={setChannelId}
                    user={"Your Name"}
                />
                <Chat serverId={serverId} channelId={channelId} />
            </Wrapper>
        </Container>
    );
}
