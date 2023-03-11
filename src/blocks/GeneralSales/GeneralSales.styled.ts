import styled from "styled-components";
import { mainBgColor, mainColor } from "@/styles";

export const GeneralSalesStyled = styled.section`
  padding: 24px 0 20px;
  background-color: ${mainBgColor};
  border-radius: 4px;
`;

export const GeneralSalesTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${mainColor};
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 32px;
`;

export const GeneralSalesSettingsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 32px;

  & .arrow {
    cursor: pointer;
  }

  & svg {
    transition: transform 0.5s;
  }

  &.active {
    color: #76b2ea;
  }

  &.active path {
    stroke: #76b2ea;
  }

  &.active svg {
    transform: rotate(180deg);
  }
`;
