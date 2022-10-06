import React from "react";
import styled from "styled-components";
import ListFooter from "./ListFooter";
import TodoItem from "./TodoItem";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: hsl(0, 0%, 98%);
  border-radius: 5px;
  margin-bottom: 1rem;
`;

type Props = {
  mobile: boolean;
};

const TodoList = (props: Props) => {
  return (
    <StyledDiv>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <ListFooter mobile={props.mobile} />
    </StyledDiv>
  );
};

export default TodoList;
