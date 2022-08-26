import styled from "styled-components";

export const CompareDiv = styled.div`
  width: 1440px;
  height: 202px;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 20%) 0 -3px 10px;
  background: #ffffff;
  position: fixed;
  z-index: 99;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export const CompareTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 62px;
  background: #000000;
  position: absolute;
  padding: 0px 30px;
  top: 0;
  color: #ffffff;
  display: felx;
  align-items: center;

  h3 {
    margin: 0;
  }
`;

export const CompareContent = styled.div`
  width: 100%;
  height: 140px;
  background: #ffffff;
  position: absolute;
  bottom: 0;
`;
