import styled from "styled-components";
import { mainColor } from "@/styles";

export const GeneralSalesTableStyled = styled.table`
  border: none;
  width: 100%;
  margin-top: 32px;
  border-collapse: collapse;
`;

export const GeneralSalesTableHead = styled.thead`
  border-bottom: solid 8px transparent;
`;

export const GeneralSalesTableBody = styled.tbody`
  & tr {
    height: 72px;
  }

  & tr:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

export const GeneralSalesTableTr = styled.tr`
  transition: background-color 0.5s;

  & th:first-child,
  & td:first-child {
    padding-left: 32px;
  }

  & th:not(:last-child),
  & td:not(:last-child) {
    border-right: 60px solid transparent;
  }
`;

export const GeneralSalesTableTh = styled.th<{
  textAlign?: string;
  padding?: string;
}>`
  text-align: ${({ textAlign }) => textAlign || "left"};
  padding: ${({ padding }) => padding || ""};
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

export const GeneralSalesTableTd = styled.td<{
  textAlign?: string;
  padding?: string;
}>`
  text-align: ${({ textAlign }) => textAlign || "left"};
  padding: ${({ padding }) => padding || ""};
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${mainColor};

  & svg:hover {
    cursor: pointer;
  }
`;

export const GeneralSalesTableImage = styled.img`
  width: 28px;
  height: 40px;
`;

export const GeneralSalesTableSpan = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;
