import styled from "styled-components";
import livechannel from "../data/channels.json";
import { Link } from "react-router-dom";

const Channelcategories = styled.li`
    align-items: center;
    padding-top: 1rem;
    color: var(--channels-default);
    cursor: pointer;
    &:hover {
        color: rgb(224, 225, 229);
    }
    h3 {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    > svg {
        width: 12px;
        height: 12px;
    }
`;
const ChannelGroup = styled.li`
    display: flex;
    align-items: center;
    padding-top: 1rem;
    color: var(--channels-default);
    cursor: pointer;
    &:hover {
        color: rgb(224, 225, 229);
    }
    h3 {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    > svg {
        width: 12px;
        height: 12px;
    }
`;

const AllChannels = styled.div`
    flex: 1 1 auto;
    list-style-type: none;
    padding: 0 0.5rem;
    z-index: 1;
    > ul {
        padding: 0;
        list-style: none;
    }
`;

const ChannelName = styled.li`
    display: flex;
    align-items: center;
    padding: 6px 1rem;
    color: var(--channels-default);
    cursor: pointer;
    &:hover {
        color: rgb(224, 225, 229);
        background-color: var(--hover-color);
    }
    h3 {
        font-size: 12px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    > svg {
        width: 20px;
        height: 20px;
    }
`;

export default function Channels() {
    return (
        <AllChannels>
            <Channelcategories>
                <ChannelGroup>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                        ></path>
                    </svg>
                    <h3>Text channels</h3>
                </ChannelGroup>

                {livechannel
                    .filter((livechannel) => livechannel.type === "text")
                    .map((livechannel) => (
                        <ChannelName>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"
                                ></path>
                            </svg>
                            <h3>{livechannel.name}</h3>
                        </ChannelName>
                    ))}
            </Channelcategories>

            <Channelcategories>
                <ChannelGroup>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                        ></path>
                    </svg>
                    <h3>Voice channels</h3>
                </ChannelGroup>
                {livechannel
                    .filter((livechannel) => livechannel.type === "voice")
                    .map((livechannel) => (
                        <ChannelName>
                            <svg
                                aria-hidden="true"
                                role="img"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                                    aria-hidden="true"
                                ></path>
                            </svg>
                            <h3>{livechannel.name}</h3>
                        </ChannelName>
                    ))}
            </Channelcategories>
        </AllChannels>
    );
}
