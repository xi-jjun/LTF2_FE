import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justify};
  position: relative;

  button {
    width: 50%;
  }
`;

export const OrderBar = styled.div`
  text-align: left;
  display: flex;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  width: 100%;
  min-width: 1000px;
  overflow: hidden;
  position: sticky;
  top: 0px;
`;

export const OrderItem = styled.div`
  margin: 0px 25px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => (props.navId === props.active ? 500 : 100)};
  font-size: 24px;
  border-bottom: ${(props) =>
    props.navId === props.active ? "2px solid #e6007e" : "none"};
  color: ${(props) => (props.navId === props.active ? "#e6007e" : "black")};

  &:hover {
    color: #e6007e;
  }
`;

export const DetailInfoContainer = styled.div`
  box-sizing: border-box;
  display: inline-box;
  width: 70%;
  padding: 20px 10px 0px 20px;
  margin: 0px 0px 80px 0px;

  button {
    box-sizing: border-box;
    width: 48%;
    margin: 1% 1%;
  }
`;

export const Price = styled.div`
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

export const PhoneDescription = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  height: 2000px;
  background-color: black;
`;

export const SideBar = styled.div`
  box-sizing: border-box;
  width: 30%;
  padding: 20px;
  height: 1000px;
  background-color: #f5f5f5;
  position: sticky;
  top: 0px;

  p {
    margin: 0;
    font-size: 12px;
  }

  button {
    width: 100%;
    margin: 10px 0px;
  }
`;

export const SideLabel = styled.div`
  display: inline-block;

  :nth-child(1) {
    position: absolute;
    left: 0;
  }
  :nth-child(2) {
    position: absolute;
    right: 0;
  }
`;
