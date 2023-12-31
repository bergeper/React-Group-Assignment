import { Link } from "react-router-dom";
import { StyledNavBar } from "../styled/header/DesktopNavbar/StyledNavBar";
import { StyledNavList } from "../styled/header/DesktopNavbar/StyledNavList";
import { StyledListItem } from "../styled/header/DesktopNavbar/StyledListITem";

export const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <StyledNavList>
          <StyledListItem>
            <Link to={"/"}>Hem</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to={"/menu"}>Meny</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to={"/booking"}>Boka</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to={"/contact"}>Kontakt</Link>
          </StyledListItem>
        </StyledNavList>
      </StyledNavBar>
    </>
  );
};
