import { Field, Form } from "formik";
import styled from "styled-components";

import {
  activeColor,
  dangerColor,
  mainBgColor,
  mainColor,
  subBgColor,
} from "@/styles";

export const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: ${mainColor};
  margin-bottom: 8px;
`;

export const FormSubTitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #9496a6;
  margin-bottom: 48px;
`;

export const FormFieldList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0 0 48px;
  gap: 16px;
`;

export const FormFieldItem = styled.li`
  position: relative;
`;

// TODO При автозаполнении применяются стили браузера, нужно пофиксить
export const FormField = styled(Field)`
  padding: 20px 16px;
  border: 1px solid #3d4250;
  border-radius: 8px;
  background-color: transparent;
  width: 500px;
  color: ${mainColor};
  font-size: 15px;
  line-height: 24px;

  &::placeholder {
    font-size: 15px;
    line-height: 24px;
    color: #7d7f8e;
  }
`;

export const FormErrorMessageWrapper = styled.div`
  position: absolute;
  color: ${dangerColor};
  top: 1px;
  right: 17px;
`;

export const FormConfirmBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 64px;
  background-color: ${activeColor};
  border: 1px solid ${mainBgColor};
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  color: ${mainColor};
  cursor: pointer;
  margin-bottom: 48px;
  transition: background-color 0.5s, border-color 0.5s;

  &:hover {
    background-color: ${subBgColor};
    border-color: ${activeColor};
  }
`;

export const FormFooter = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: ${mainColor};

  & a {
    margin-left: 8px;
    text-decoration: none;
    font-weight: 500;
    color: #78b4ed;
  }
`;
