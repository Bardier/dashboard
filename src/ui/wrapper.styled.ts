import styled from "styled-components";

interface WrapperStyledProps {
  display?: "block" | "flex" | "grid";
  flexGrow?: number;
  backgroundColor?: string;
  minHeight?: string;
  minWidth?: string;
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end";
  padding?: string;
  margin?: string;
  gap?: string;
  maxWidth?: string;
  position?: "absolute" | "relative";
}

export const WrapperStyled = styled.div<WrapperStyledProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || null};
  min-height: ${({ minHeight }) => minHeight || null};
  min-width: ${({ minWidth }) => minWidth || null};
  display: ${({ display }) => display || "block"};
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  gap: ${({ gap }) => gap || 0};
  position: ${({ position }) => position || "static"};
  max-width: ${({ maxWidth }) => maxWidth || ""};
`;
