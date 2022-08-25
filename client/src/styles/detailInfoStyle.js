import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: inline-box;
  width: 70%;
  min-width: 850px;
  padding: 20px 10px 0px 20px;
  margin: 0px 0px 80px 0px;

  button {
    box-sizing: border-box;
    width: 48%;
    margin: 1% 1%;
  }
`;

export const PriceRow = styled.div`
  width: 100%;

  div {
    display: inline-block;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .label {
    width: 20%;
    font-weight: bold;
    font-size: large;
    vertical-align: top;
    padding-top: 15px;
    padding-right: 30px;

    .des {
      font-weight: 200;
      font-size: 16px;
    }
  }
  .content {
    width: 80%;
    padding-right: 30px;

    li {
      font-size: small;
    }
  }
`;

export const DiscountCard = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.left ? "33%" : "63%")};
  height: 220px;
  padding: 10px 30px;
  color: ${(props) => (props.active ? "black" : "lightgrey")};
  outline: ${(props) =>
    props.active ? "2px solid black" : "1px solid lightgrey"};
  border-radius: 10px;
  ${(props) => (props.disabled ? "" : "cursor: pointer;")}
  margin: 0 1%;

  .type {
    margin-bottom: 0px;
  }
  .type-description {
    font-size: 24px;
    margin-top: 0px;
    font-weight: bold;
  }
  .type-price {
    text-align: right;
    span {
      font-size: 24px;
      font-weight: bold;
    }
  }

  ${(props) =>
    props.disabled
      ? ""
      : `&:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: lightgrey;
  }`}
`;

export const Spec = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  height: 2000px;
  background-color: black;
`;

export const PlanCard = styled.div`
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

export const PlanTitle = styled.p`
  font-size: 20px;
  margin: 10px 10px;
`;

export const PlanPrice = styled.p`
  box-sizing: border-box;
  width: 30%;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  padding: 0px 10px;
`;

export const PlanDescription = styled.div`
  box-sizing: border-box;
  width: 70%;
  display: flex;
  font-size: small;
  text-align: right;
  padding: 0px 10px;
  align-items: center;
  margin: 0;

  P {
    display: inline-flex;
    margin: 0;
  }
`;

export const DiscountPrice = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

export const SideBarContainer = styled.div`
  box-sizing: border-box;
  width: 30%;
  min-width: 300px;
  max-width: 400px;
  padding: 20px 30px;
  height: 1000px;
  background-color: #f5f5f5;
  position: sticky;
  top: 0px;

  h2,
  h3 {
    margin: 10px 0px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  button {
    width: 100%;
    margin: 10px 0px;
  }
`;

export const SideFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .left {
    width: 60%;
    text-align: left;
  }
  .right {
    width: 40%;
    text-align: right;
  }
`;
