import styled from "styled-components";

export const OrderContainer = styled.div`
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

export const NavContainer = styled.div`
  text-align: left;
  display: flex;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  position: fixed;
  top: 50px;
  width: 100%;
  min-width: 1000px;
  overflow: hidden;
  height: 52px;
  z-index: 10;
`;

export const NavItem = styled.div`
  margin: 0px 25px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-bottom: ${(props) =>
    props.navId === props.active ? "2px solid #e6007e" : "none"};
  color: ${(props) => (props.navId === props.active ? "#e6007e" : "black")};

  &:hover {
    color: #e6007e;
  }
`;

export const MainContainer = styled.div`
  padding: 10px 20px;
  text-align: left;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 29px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;

export const MainLogo = styled.img`
  height: 20px;
`;
