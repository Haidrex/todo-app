import IconMoon from "../../images/icon-moon.svg";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-bottom: 2rem;
`;

const StyledHeader = styled.h3`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 10px;
`;

const StyledIcon = styled.img`
  width: 25px;
  height: 25px;
`;
const Header = () => {
  return (
    <StyledDiv>
      <StyledHeader>TODO</StyledHeader>
      <StyledIcon src={IconMoon} alt="theme change icon" />
    </StyledDiv>
  );
};

export default Header;
