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
  &.checked > span {
    text-decoration: line-through;
  }
  &.checked > img {
    background: linear-gradient(
      to bottom right,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
  }
`;

const Check = styled.img`
  width: 25px;
  height: 25px;
  padding: 5px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 100px;
`;

const Cross = styled.img`
  width: 15px;
  height: 15px;
  display: none;
`;
type Todo = {
  id: number;
  text: string;
  status: string;
};

type Props = {
  todo: Todo;
  changeStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = (props: Props) => {
  const [checked, setChecked] = useState(props.todo.status === "completed");
  return (
    <Container>
      <NameContainer className={checked ? "checked" : ""}>
        <Check
          src={IconCheck}
          onClick={() => {
            props.changeStatus(props.todo.id);
            setChecked(!checked);
          }}
        />
        <span>{props.todo.text}</span>
      </NameContainer>
      <Cross src={IconCross} onClick={() => props.deleteTodo(props.todo.id)} />
    </Container>
  );
};

export default TodoItem;
