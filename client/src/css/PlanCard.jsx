import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px 0px;

  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: lightgrey;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  margin: 10px 10px;
`;

export const Price = styled.p`
  box-sizing: border-box;
  width: 35%;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 10px;
`;

export const Description = styled.p`
  box-sizing: border-box;
  width: 55%;
  display: inline-block;
  font-size: small;
  margin: 10px 10px;
  text-align: right;

  AddCircleOutlineIcon {
    position: relative;
    bottom: 10px;
    right: 10px;
  }
`;
