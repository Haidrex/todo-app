import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.ListBackground};
  color: ${({ theme }) => theme.PrimaryText};
  border: none;
  border-radius: 7px;
  padding: 14px;
  font-size: 18px;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.SecondaryText};
  }
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
