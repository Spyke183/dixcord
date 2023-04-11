import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import ServerSidebar from "../components/SidebarServer";
import ChatWrapper from "../components/ChatWrapper";
import Call from "../components/Call";
import DefaultChat from "../components/DefaultChat";
import NotFound from "../components/NotFound";

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
export default function ({ username }) {
    const [serverId, setServerId] = useState(null);
    const [serverName, setServerName] = useState(null);
    const [channelId, setChannelId] = useState(null);
    const [channelName, setChannelName] = useState(null);
    return (
        <Container>
            <Wrapper>
                <ServerSidebar
                    setServerId={setServerId}
                    setServerName={setServerName}
                />
                <Routes>
                    <Route path="/" element={<DefaultChat />} />
                    <Route
                        path="/:id/*"
                        element={
                            <ChatWrapper
                                serverId={serverId}
                                serverName={serverName}
                                channelId={channelId}
                                setChannelId={setChannelId}
                                channelName={channelName}
                                setChannelName={setChannelName}
                                username={username}
                            />
                        }
                    />
                    <Route
                        path="*"
                        element={<NotFound>Sélectionner un canal</NotFound>}
                    />
                </Routes>
            </Wrapper>
        </Container>
    );
}
