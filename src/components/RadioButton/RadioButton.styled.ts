import styled from "styled-components";
import { mainColor } from "@/styles";

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

export const RadioLabel = styled.label<{ checked: boolean }>`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  color: ${mainColor};
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    right: calc(100% + 17px);
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    border: 1.5px solid ${({ checked }) => (checked ? "#8941FF" : "#60677a")};
    border-radius: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    right: calc(100% + 20px);
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ checked }) => (checked ? "#8941FF" : "transparent")};
  }
`;
