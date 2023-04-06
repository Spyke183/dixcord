import styled from "styled-components";
import discordLogo from "../images/Avatar.svg";
import { useState } from "react";
import msg from "../data/messages.json";

const Messages = styled.div`
  display: grid;
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

  > img {
    height: 40px;
    width: 40px;
    margin-right: 16px;
  }
`;

const MessageContainer = styled.div`
  position: relative;
  align-items: center;

  > img {
    height: 40px;
    width: 40px;
    margin-right: 16px;
  }
`;

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
    //           <img src={country.url} alt={country.name} />
    //           <span>{country.name}</span>
    //         </MessageContainer>
    //       ))}
    //     </Card>
    //   ) : null}
    // </>
    <>
      <Messages>
        <InputContainer>
          <img src={discordLogo} alt="Discord icon" />
          <span></span>
        </InputContainer>

        {/* {result.map((msg) => (
          <MessageContainer>
            <span>{msg.user}</span>
            <span>{msg.message}</span>
          </MessageContainer>
        ))} */}
      </Messages>
    </>
  );
}
