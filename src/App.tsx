import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import styled from "styled-components";
import "./App.css";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

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

function App() {
  const [input, setInput] = useState<string>("");
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

  return (
    <Container>
      <StyledDiv>
        <Header />
        <StyledForm>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </StyledForm>
        <TodoList mobile={screenSize < 768} />
        {screenSize < 768 && <Filter />}
      </StyledDiv>
    </Container>
  );
}

export default App;
