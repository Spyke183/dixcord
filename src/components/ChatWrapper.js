import SidebarChannel from "./SidebarChannel";
import Chat from "./Chat";
import Call from "./Call";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

export default function ({
  serverId,
  serverName,
  channelId,
  setChannelId,
  channelName,
  setChannelName,
  username,
}) {
  return (
    <>
      <SidebarChannel
        serverId={serverId}
        serverName={serverName}
        setChannelId={setChannelId}
        setChannelName={setChannelName}
        username={username}
      />
      <Routes>
        <Route path="/" element={<NotFound>Sélectionner un canal</NotFound>} />
        <Route
          path="/text/:id"
          element={
            <Chat
              serverId={serverId}
              channelId={channelId}
              channelName={channelName}
              username={username}
            />
          }
        />
        <Route path="/voice/:id" element={<Call username={username} />} />
        <Route path="*" element={<NotFound>Sélectionner un canal</NotFound>} />
      </Routes>
    </>
  );
}
