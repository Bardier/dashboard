import styled from "styled-components";
import { mainColor } from "@/styles";

export const UsersListStyled = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 16px;
`;

export const UsersListItem = styled.li`
  font-size: 13px;
  line-height: 20px;
  color: ${mainColor};
`;

export const UsersListSpan = styled.span`
  display: block;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;
