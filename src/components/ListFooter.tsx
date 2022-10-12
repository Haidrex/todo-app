import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.ListBackground};
  padding: 30px;
  color: ${({ theme }) => theme.SecondaryText};
  border-radius: 0 0 5px 5px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
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
  mobile: boolean;
  todosLeft: number;
  clearCompleted: () => void;
  filter: string;
  filterTodos: (filter: string) => void;
};

const ListFooter = (props: Props) => {
  return (
    <Container>
      <span>{props.todosLeft} Items Left</span>
      {!props.mobile && (
        <FilterContainer>
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
        </FilterContainer>
      )}
      <StyledSpan onClick={props.clearCompleted}>Clear Completed</StyledSpan>
    </Container>
  );
};

export default ListFooter;
