import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 14px;
  font-size: 18px;
  width: 100%;
  margin-bottom: 1rem;
`;

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = (props: Props) => {
  return (
    <StyledInput
      placeholder="Create a new todo..."
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
