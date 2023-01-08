import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={20} />
          <span>Timer</span>
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={20} />
          <span>History</span>
        </NavLink>
      </nav>
    </StyledHeader>
  );
}
