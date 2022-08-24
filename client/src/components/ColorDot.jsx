import styled from "styled-components";

export const ColorDot = styled.div`
  display: inline-box;
  margin: 5px 5px;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${(props) => (props.hex === props.color.hexCode ? "white" : props.hexCode)};
  border-radius: 50%;
  background-color: ${(props) => props.hexCode};
  outline: 2px solid grey;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hexCode};
  }
`;
