import React from "react";
import styled from "styled-components";
import ListFooter from "./ListFooter";
import TodoItem from "./TodoItem";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.ListBackground};
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const StyledNoTodos = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.ListBackground};
  border-radius: 5px 5px 0 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.SecondaryText};
  border-bottom: 1px solid ${({ theme }) => theme.Border};
`;

type Todo = {
  id: number;
  text: string;
  status: string;
};

type Props = {
  mobile: boolean;
  todos: Todo[];
  allTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setFiltered: React.Dispatch<React.SetStateAction<Todo[]>>;
  filter: string;
  filterTodos: (filter: string) => void;
};

const TodoList = (props: Props) => {
  const changeStatus = (id: number) => {
    const newTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "active" ? "completed" : "active",
        };
      }
      return todo;
    });
    props.setTodos(newTodos);
    props.setFiltered(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = props.todos.filter((todo) => todo.id !== id);
    props.setTodos(newTodos);
    props.setFiltered(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = props.allTodos.filter(
      (todo) => todo.status !== "completed"
    );
    props.setTodos(newTodos);
    if (props.filter !== "completed") {
      props.setFiltered(newTodos);
    } else {
      props.setFiltered([]);
    }
  };

  return (
    <StyledDiv>
      {props.todos.length > 0 ? (
        props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeStatus={changeStatus}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <StyledNoTodos>No todos</StyledNoTodos>
      )}
      <ListFooter
        mobile={props.mobile}
        todosLeft={props.todos.length}
        clearCompleted={clearCompleted}
        filter={props.filter}
        filterTodos={props.filterTodos}
      />
    </StyledDiv>
  );
};

export default TodoList;
