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
  }

  .label {
    width: 20%;
    font-weight: bold;
    font-size: large;
    vertical-align: top;
    padding: 15px 10px;
  }
  .content {
    width: 80%;

    li {
      font-size: small;
    }
  }
`;

export const DiscountCard = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.left ? "30%" : "70%")};
  padding: 10px 20px;
  border: 2px solid black;
  cursor: pointer;
  margin: 10px 0px;

  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: lightgrey;
  }
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
  width: 35%;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 10px;
`;

export const PlanDescription = styled.p`
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

  .left {
    width: 60%;
    text-align: left;
  }
  .right {
    width: 40%;
    text-align: right;
  }
`;
