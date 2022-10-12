import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { darkTheme, lightTheme } from "./components/Themes";
// import "./App.css";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Drag from "./components/Drag";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 800px;
  }
`;

const StyledForm = styled.form`
  width: 100%;
`;

type Todo = {
  id: number;
  text: string;
  status: string;
};

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtered, setFiltered] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("light");
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: input,
          status: "active",
        },
      ]);
      if (filter !== "completed") {
        setFiltered([
          ...filtered,
          {
            id: Math.floor(Math.random() * 1000),
            text: input,
            status: "active",
          },
        ]);
      }
      setInput("");
    }
  };

  const filterTodos = (filter: string) => {
    setFilter(filter);

    if (filter === "all") {
      setFiltered(todos);
    }
    if (filter === "active") {
      setFiltered(todos.filter((todo) => todo.status === "active"));
    }
    if (filter === "completed") {
      setFiltered(todos.filter((todo) => todo.status === "completed"));
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <StyledDiv onSubmit={addTodo}>
          <Header themeToggler={themeToggler} theme={theme} />
          <StyledForm>
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
          </StyledForm>
          <TodoList
            mobile={screenSize < 768}
            todos={filtered}
            allTodos={todos}
            setTodos={setTodos}
            setFiltered={setFiltered}
            filter={filter}
            filterTodos={filterTodos}
          />
          {screenSize < 768 && (
            <Filter filter={filter} filterTodos={filterTodos} />
          )}
          <Drag />
        </StyledDiv>
      </Container>
    </ThemeProvider>
  );
}

export default App;
