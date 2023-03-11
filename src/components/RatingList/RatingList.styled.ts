import styled from "styled-components";
import { mainColor } from "@/styles";

export const RatingListStyled = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RatingItem = styled.li`
  font-size: 13px;
  line-height: 20px;
  color: ${mainColor};
  padding-left: 40px;
  position: relative;
`;

export const RatingItemLabel = styled.label<{
  isChecked: boolean;
  bgColor: string;
}>`
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border: 2px solid ${({ bgColor }) => bgColor};
    border-radius: 3px;
    position: absolute;
    left: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${({ isChecked, bgColor }) =>
      isChecked ? bgColor : "transparent"};
    border-radius: 1px;
    position: absolute;
    left: 4px;
    top: 4px;
  }
`;

export const RatingItemSelect = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  height: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
`;

export const RatingSales = styled.span`
  display: block;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;
