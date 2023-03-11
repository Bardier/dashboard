import styled from "styled-components";
import { mainBgColor } from "@/styles";

export const StatisticItemStyled = styled.li`
  background-color: ${mainBgColor};
  display: flex;
  padding: 20px;
  border-radius: 8px;
  align-items: flex-start;
  gap: 22px;
`;

export const StatisticItemIconWrapper = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg || ""};
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatisticItemCount = styled.div`
  font-size: 44px;
  line-height: 48px;
`;

export const StatisticItemTitle = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #a2a4a8;
`;
