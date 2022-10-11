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
};

const ListFooter = (props: Props) => {
  const [active, setActive] = useState("all");

  const handleClick = (id: string) => {
    setActive(id);
  };

  return (
    <Container>
      <span>3 Items Left</span>
      {!props.mobile && (
        <FilterContainer>
          <StyledSpan
            id="all"
            className={active === "all" ? "active" : undefined}
            onClick={() => handleClick("all")}
          >
            All
          </StyledSpan>{" "}
          <StyledSpan
            id="active"
            className={active === "active" ? "active" : undefined}
            onClick={() => handleClick("active")}
          >
            Active
          </StyledSpan>{" "}
          <StyledSpan
            id="completed"
            className={active === "completed" ? "active" : undefined}
            onClick={() => handleClick("completed")}
          >
            Completed
          </StyledSpan>
        </FilterContainer>
      )}
      <StyledSpan>Clear Completed</StyledSpan>
    </Container>
  );
};

export default ListFooter;
