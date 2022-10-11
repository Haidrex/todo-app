import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";
import styled, { ThemeConsumer } from "styled-components";

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

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  themeToggler: () => void;
  theme: string;
};

const Header = (props: Props) => {
  return (
    <StyledDiv>
      <StyledHeader>TODO</StyledHeader>
      <StyledIcon
        src={props.theme === "light" ? IconMoon : IconSun}
        alt="theme change icon"
        onClick={props.themeToggler}
      />
    </StyledDiv>
  );
};

export default Header;
