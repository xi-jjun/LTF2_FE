import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-item: center;
  position: relative;
  box-sizing: border-box;
  ${(props) =>
    props.body
      ? `padding-left: 48px;
    padding-right: 48px;`
      : ""}

  button {
    width: 50%;
  }
`;
