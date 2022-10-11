import React, { useState } from "react";
import styled from "styled-components";
import IconCheck from "../assets/icon-check.svg";
import IconCross from "../assets/icon-cross.svg";

const Container = styled.div`
  width: 100%;
  height: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  color: ${({ theme }) => theme.PrimaryText};
  border-bottom: 1px solid ${({ theme }) => theme.Border};

  &:hover {
    cursor: pointer;
    & > img {
      display: block;
    }
  }
`;

const NameContainer = styled.div`
  display: flex;
`;

const Check = styled.img`
  width: 25px;
  height: 25px;
  padding: 5px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 100px;
  background: linear-gradient(
    to bottom right,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
`;

const Cross = styled.img`
  width: 15px;
  height: 15px;
  display: none;
`;
// type Todo = {
//   id: number;
//   name: string;
//   status: string;
// };

// type Props = {
//   todo: Todo;
// };

const TodoItem = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Container>
      <NameContainer>
        <Check src={IconCheck} onClick={() => setChecked(!checked)} />
        <span>Pavadinimas</span>
      </NameContainer>
      <Cross src={IconCross} />
    </Container>
  );
};

export default TodoItem;
