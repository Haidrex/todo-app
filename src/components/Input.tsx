import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 14px;
  font-size: 18px;
  width: 100%;
`;

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return <StyledInput placeholder="Create a new todo..." />;
};

export default Input;
