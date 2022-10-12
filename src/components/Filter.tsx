import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.ListBackground};
  padding: 30px;
  color: ${({ theme }) => theme.SecondaryText};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const StyledSpan = styled.span`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.Hover};
  }
  &.active {
    color: hsl(220, 98%, 61%);
  }
`;

type Props = {
  filter: string;
  filterTodos: (filter: string) => void;
};

const Filter = (props: Props) => {
  return (
    <Container>
      <StyledSpan
        id="all"
        className={props.filter === "all" ? "active" : undefined}
        onClick={() => props.filterTodos("all")}
      >
        All
      </StyledSpan>{" "}
      <StyledSpan
        id="active"
        className={props.filter === "active" ? "active" : undefined}
        onClick={() => props.filterTodos("active")}
      >
        Active
      </StyledSpan>{" "}
      <StyledSpan
        id="completed"
        className={props.filter === "completed" ? "active" : undefined}
        onClick={() => props.filterTodos("completed")}
      >
        Completed
      </StyledSpan>
    </Container>
  );
};

export default Filter;
