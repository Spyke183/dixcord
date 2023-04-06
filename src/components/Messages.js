import styled from "styled-components";
import searchLogo from "../images/discord.png";
import { useState } from "react";

const Messages = styled.div`
  padding: 0.25rem 1 rem;
`;
const Card = styled.div`
  width: 289px;
  height: 375px;
  padding: 25px;
  border-radius: 40px;
  background-color: var(--white);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 57px;
  max-width: 100%;
  padding: 20px;
  border-radius: 1.5rem;
  background-color: var(--beige);

  > span {
    height: 10px;
    width: 1px;
    margin: 0 15px;
    background-color: #c2c2c2;
  }
`;

const Input = styled.input`
  border: none;
  background: none;
`;

const CountryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  max-width: 100%;
  margin-top: 10px;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  > img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }

  > span {
    font-size: 15px;
    font-weight: 500;
  }
`;

export default function () {
  const [result, setResult] = useState(countries);
  const [isOpen, setIsOpen] = useState(true);

  function search(e) {
    const searchResult = countries.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setResult(searchResult);
  }
  return (
    <>
      {isOpen ? (
        <Card>
          <InputContainer>
            <img src={searchLogo} alt="Search icon" />
            <span></span>
            <Input placeholder="Search countries..." onChange={search} />
          </InputContainer>
          {result.map((country) => (
            <CountryItem key={country.name}>
              <img src={country.url} alt={country.name} />
              <span>{country.name}</span>
            </CountryItem>
          ))}
        </Card>
      ) : null}
    </>
  );
}
