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

const Filter = () => {
  const [active, setActive] = useState("all");

  const changeFilter = (id: string) => {
    setActive(id);
  };

  return (
    <Container>
      <StyledSpan
        id="all"
        className={active === "all" ? "active" : undefined}
        onClick={() => changeFilter("all")}
      >
        All
      </StyledSpan>{" "}
      <StyledSpan
        id="active"
        className={active === "active" ? "active" : undefined}
        onClick={() => changeFilter("active")}
      >
        Active
      </StyledSpan>{" "}
      <StyledSpan
        id="completed"
        className={active === "completed" ? "active" : undefined}
        onClick={() => changeFilter("completed")}
      >
        Completed
      </StyledSpan>
    </Container>
  );
};

export default Filter;
