import styled from "styled-components";
import { mainBgColor } from "@/styles";

export const MainStatsSelectList = styled.ul`
  z-index: 100;
  padding: 0;
  list-style: none;
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08),
    0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
  border-radius: 8px;
  background-color: ${mainBgColor};
`;

export const MainStatsSelectItem = styled.li`
  padding: 9px 0 9px 68px;
  width: 300px;
`;
