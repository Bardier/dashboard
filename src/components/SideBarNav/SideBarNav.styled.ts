import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { activeColor } from "@/styles";

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavItem = styled.li`
  padding: 0 18px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 47px;
  height: 47px;
  background-color: #191c23;

  &.active {
    background-color: ${activeColor};
  }

  &.active path,
  &.active rect,
  &.active circle {
    stroke: white;
  }
`;
