import { NavBar } from "./NavBar";
import logo from "../../assets/logo.png";
import { StyledLogo } from "../styled/header/StyledLogo";
import { StyledHeader } from "../styled/header/StyledHeader";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogo src={logo} alt="logga" />
        <NavBar></NavBar>
      </StyledHeader>
    </>
  );
};