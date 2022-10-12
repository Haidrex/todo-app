import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

const StyledSpan = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.SecondaryText};
`;

const Drag = () => {
  return (
    <StyledDiv>
      <StyledSpan>Drag and drop to reorder list</StyledSpan>
    </StyledDiv>
  );
};

export default Drag;
