import styled from "styled-components";
import { mainBgColor, mainColor } from "@/styles";

export const MainStatsStyled = styled.section`
  background-color: ${mainBgColor};

  border-radius: 4px;
  padding: 24px 32px 32px 32px;
  flex-grow: 1;
`;

export const MainStatsTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${mainColor};
`;

export const MainStatsSelectWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

export const MainStatsSelectSpan = styled.span`
  font-size: 13px;
  line-height: 20px;
  color: ${mainColor};
  display: flex;
  gap: 2px;
  align-items: center;

  &.active {
    color: #76b2ea;

    & svg {
      transform: rotate(180deg);
    }

    & path {
      stroke: #76b2ea;
    }
  }

  & svg {
    transition: transform 0.5s;
  }

  & svg:hover {
    cursor: pointer;
  }
`;
