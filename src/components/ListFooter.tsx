import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px;
  color: hsl(236, 9%, 61%);
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

type Props = {
  mobile: boolean;
};

const ListFooter = (props: Props) => {
  return (
    <Container>
      <span>3 Items Left</span>
      {!props.mobile && (
        <FilterContainer>
          <span>All</span> <span>Active</span> <span>Completed</span>
        </FilterContainer>
      )}
      <span>Clear Completed</span>
    </Container>
  );
};

export default ListFooter;
