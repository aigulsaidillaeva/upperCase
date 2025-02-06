import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  return (
    <StyledInput
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      variant={props.variant}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: border 0.2s ease-in-out;
  outline: none;
  margin: 15px 0;
  &:focus {
    border-color: #007bff;
  }
  ${(props) =>
    props.variant === "upper" &&
    `text-transform: uppercase;
  `}
  ${(props) =>
    props.variant === "lower" &&
    `text-transform: lowercase;
  `}
`;
