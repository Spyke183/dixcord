import styled from "styled-components";
import discordLogo from "../images/Avatar.svg";
import { useState } from "react";
import msg from "../data/messages.json";

const Messages = styled.div`
  grid-template-columns: 3rem 1fr;
  margin-top: 1rem;
  gap: 1rem;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: #2e3035;
  }
`;

const InputContainer = styled.div`
  position: relative;
  align-items: center;
  diplay: flex;

  > img {
    height: 40px;
    width: 40px;
    margin-right: 16px;
  }
`;

const TestContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  > img {
    height: 40px;
    width: 40px;
    margin-right: 16px;
  }
  > span {
    font-size: 15px;
    font-weight: 700;
    color: white;
  }
`;
const TestContainer2 = styled.div`
  display: flex;
`;
const NomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  > span {
    font-size: 15px;
    font-weight: 300;
    color: white;
  }
`;
const MessageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  > span {
    font-size: 15px;
    font-weight: 300;
    color: white;
  }
`;

const Upload = styled.div`
  margin: 16px;
  min-height: 100px;
  width: 50%;
  border: 1px solid var(--background-darker);
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: var(--background-secondary);
  color: var(--media-text);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestFlex = styled.div`
  display: flex;
`;

// EXEMPLE AVEC COUNTRY
// const Card = styled.div`
//   width: 289px;
//   height: 375px;
//   padding: 25px;
//   border-radius: 40px;
//   background-color: var(--white);
// `;

// const InputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   max-height: 57px;
//   max-width: 100%;
//   padding: 20px;
//   border-radius: 1.5rem;
//   background-color: var(--beige);

//   > span {
//     height: 10px;
//     width: 1px;
//     margin: 0 15px;
//     background-color: #c2c2c2;
//   }
// `;

// const Input = styled.input`
//   border: none;
//   background: none;
// `;

// const MessageContainer = styled.li`
//   display: flex;
//   align-items: center;
//   padding: 15px;
//   max-width: 100%;
//   margin-top: 10px;
//   border-radius: 24px;
//   cursor: pointer;

//   &:hover {
//     background-color: #f2f2f2;
//   }

//   > img {
//     height: 30px;
//     width: 30px;
//     margin-right: 10px;
//   }

//   > span {
//     font-size: 15px;
//     font-weight: 500;
//   }
// `;

export default function () {
  const [result, setResult] = useState(msg);

  return (
    // <>
    //   {isOpen ? (
    //     <Card>
    //   <InputContainer>
    //     <img src={searchLogo} alt="Search icon" />
    //     <span></span>
    //     <Input placeholder="Search countries..." onChange={search} />
    //   </InputContainer>
    //       {result.map((country) => (
    //         <MessageContainer key={country.name}>
    //           <img src={country.imgavatar} alt={country.name} />
    //           <span>{country.name}</span>
    //         </MessageContainer>
    //       ))}
    //     </Card>
    //   ) : null}
    // </>
    <>
      <Messages>
        <TestContainer>
          {result.map((msg) => (
            <TestContainer2>
              <InputContainer>
                <img src={msg.imgavatar} alt={msg.name} />
              </InputContainer>
              <TestFlex>
                <NomContainer>
                  <span>{msg.user}</span>
                </NomContainer>
                <MessageContainer>
                  <span>{msg.message}</span>
                </MessageContainer>
              </TestFlex>
            </TestContainer2>
          ))}
        </TestContainer>
      </Messages>
      <Upload>file.png</Upload>
    </>
  );
}
