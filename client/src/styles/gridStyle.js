import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-item: center;
  position: relative;
  box-sizing: border-box;

  button {
    width: 50%;
  }
`;
