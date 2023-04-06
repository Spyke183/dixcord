import styled from "styled-components";
import ServerSidebar from "../components/SidebarServer";
import Sidebar from "../components/SidebarChannel";
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
  return (
    <Container>
      <Wrapper>
        <ServerSidebar />
        <Sidebar user={"Your Name"} />
        <Chat />
      </Wrapper>
    </Container>
  );
}
