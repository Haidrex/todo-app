import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;
  background-color: hsl(0, 0%, 98%);
  padding: 30px;
  color: hsl(236, 9%, 61%);
`;

const Filter = () => {
  return (
    <Container>
      <span>All</span> <span>Active</span>
      <span>Completed</span>
    </Container>
  );
};

export default Filter;
