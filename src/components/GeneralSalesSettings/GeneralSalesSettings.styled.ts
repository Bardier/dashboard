import styled from "styled-components";
import { mainBgColor, mainColor } from "@/styles";

export const GeneralSalesSettingsStyled = styled.ul`
  position: absolute;
  background: ${mainBgColor};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08),
    0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
  border-radius: 8px;
  top: calc(100% + 4px);
  right: 0;
  padding: 4px;
`;

export const GeneralSalesSettingsStyledLabel = styled.label<{
  isChecked: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px 10px 24px;
  color: ${mainColor};
  position: relative;

  &::before {
    content: "";
    cursor: pointer;
    position: absolute;
    right: 16px;
    display: block;
    width: 28px;
    height: 20px;
    background-color: ${({ isChecked }) => (isChecked ? "#8941FF" : "#60677a")};
    border-radius: 10px;
  }

  &::after {
    content: "";
    cursor: pointer;
    position: absolute;
    right: ${({ isChecked }) => (isChecked ? "18px" : "28px")};
    top: 13.5px;
    border-radius: 50%;
    display: block;
    width: 14px;
    height: 14px;
    background-color: ${mainBgColor};
  }
`;

export const GeneralSalesSettingsStyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;
