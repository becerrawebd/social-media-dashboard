import React from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  height: 26px;
  border-radius: 15px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.toggle};
  &::after {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 1px 2px;
    content: "";
    display: block;
    background: ${(props) => props.theme.colors.backgroundLayout};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  width: 55px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    &::after {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin: 1px 2px;
      content: "";
      display: block;
      margin-left: 30px;
      transition: 0.3s;
    }
  }
`;

const SwitchTheme = ({setDarkMode }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        type="checkbox"
        id="checkbox"
        onChange={(e) => setDarkMode(!e.target.checked)}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default SwitchTheme;
