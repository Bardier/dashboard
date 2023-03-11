import styled from "styled-components";
import { activeColor, mainBgColor, mainColor } from "@/styles";

export const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-transform: uppercase;
  color: ${mainColor};
`;

export const HeaderInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${mainColor};
`;

export const HeaderIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${mainBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${activeColor};
  }
`;
