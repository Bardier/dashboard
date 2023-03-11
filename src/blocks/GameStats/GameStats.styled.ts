import styled from "styled-components";
import { mainBgColor, mainColor } from "@/styles";

export const GameStatsStyled = styled.section`
  min-height: 360px;
  min-width: 428px;
  background-color: ${mainBgColor};
  border-radius: 4px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

export const GameStatsTitle = styled.h2`
  font-size: 18px;
  line-height: 24px;
  color: ${mainColor};
`;

export const LocationWrapper = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const LocationActive = styled.span<{ isActive: boolean }>`
  font-size: 13px;
  line-height: 20px;
  color: ${({ isActive }) => (isActive ? "#81C2FF" : mainColor)};
  display: inline-flex;
  gap: 7px;

  & svg {
    transition: transform 0.5s;
  }

  & > path {
    stroke: ${({ isActive }) => (isActive ? "#81C2FF" : "white")};
  }

  & > svg {
    cursor: pointer;
    transform: rotate(${({ isActive }) => (isActive ? "180deg" : 0)});
  }
`;

export const LocationList = styled.ul`
  list-style: none;
  position: absolute;
  padding: 8px;
  background-color: ${mainBgColor};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6);
  z-index: 100;
  right: 0;
  top: calc(100% + 4px);
`;

export const LocationItem = styled.li`
  padding: 12px 16px;
  width: 220px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${mainColor};

  &:hover {
    background-color: #31343d;
  }
`;

export const GameStatsBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 53px;
  left: 53px;
`;

export const GameStatsBodyTitle = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #a7a9ad;
  margin-bottom: 4px;
`;

export const GameStatsBodyPersents = styled.p`
  font-weight: 500;
  font-size: 64px;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
  color: ${mainColor};
`;

export const GameStatsBodyText = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${mainColor};
`;

export const GameStatsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GameStatsItem = styled.li<{ circleColor: string }>`
  display: flex;
  gap: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #9f9f9f;
  align-items: center;

  &::before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${({ circleColor }) => circleColor};
  }
`;
