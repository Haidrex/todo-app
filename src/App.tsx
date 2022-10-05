import React, { useState } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import styled from "styled-components";
import "./App.css";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

function App() {
  const [input, setInput] = useState("");
  return (
    <StyledDiv>
      <Header />
      <Input onChange={(e) => setInput(e.target.value)} />
    </StyledDiv>
  );
}

export default App;
