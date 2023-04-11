import styled from "styled-components";
import { Link } from "react-router-dom";
import { getChannels } from "../api/api";
import { useEffect } from "react";

const ChannelItem = styled.div``;

export default function ({
    serverId,
    setChannelId,
    setChannelName,
    channels,
    setChannels,
}) {
    useEffect(() => {
        getChannels(serverId, setChannels);
    }, [serverId]);
    if (channels.length == 0) {
        return <>No Channels</>;
    }
    return (
        <>
            {channels.map((channel) => (
                <Link
                    key={channel.id}
                    to={`${channel.channelType == "text" ? "text" : "voice"}/${
                        channel.id
                    }`}
                >
                    <ChannelItem
                        onClick={() => {
                            setChannelId(channel.id);
                            setChannelName(channel.channelName);
                        }}
                    >
                        {channel.channelName}
                    </ChannelItem>
                </Link>
            ))}
        </>
    );
}
