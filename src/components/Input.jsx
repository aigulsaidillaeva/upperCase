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
  ${(props) =>
    props.variant === "upper" &&
    `text-transform: uppercase;
  `}
  ${(props) =>
    props.variant === "lower" &&
    `text-transform: lowercase;
  `}
`;
