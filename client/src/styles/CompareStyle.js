import styled from "styled-components";

export const PopUp = styled.div`
  width: 1440px;
  height: ${(props) => {
    if (props.show === "remain") {
      return "62px";
    } else if (props.show === "none") {
      return "0px";
    } else return "202px";
  }};
  visibility: ${(props) => (props.show === "none" ? "hidden" : "visible")}
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 20%) 0 -3px 10px;
  border-radius: 10px;
  background: #ffffff;
  position: fixed;
  z-index: 99;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  transition: all 0.5s ease-in-out;
`;

export const PopUpTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 62px;
  border-radius: 10px 10px 0px 0px;
  background: #000000;
  position: absolute;
  padding: 0px 30px;
  top: 0;
  color: #ffffff;
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
  }
  KeyboardArrowDownIcon {
    margin-left: auto;
    float: right;
    cursor: pointer;
  }
`;

export const PopUpContent = styled.div`
  width: 100%;
  background: #ffffff;
  position: absolute;
  bottom: ${(props) => (props.show ? "0px" : "-120px")};
  display: flex;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  height: ${(props) => (props.show ? "140px" : "0px")};
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

export const PopUpPhone = styled.div`
  width: 400px;
  height: 70%;
  border: 2px dashed lightgrey;
  border-radius: 10px;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpPhoneImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 0px 20px;
`;

export const PopUpPhoneInfo = styled.div`
  width: 250px;
  height: 80px;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p,
  h2 {
    margin: 2px 0px;
  }
`;

export const PopUpBtnGroup = styled.div`
  height: 70%;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin: 5px 0px;
  }
`;

export const PopUpCloseBtn = styled.div`
  margin-left: auto;
  float: right;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PopUpDeleteBtn = styled.div`
  position: relative;
  cursor: pointer;
  right: 10px;
  top: -25px;

  &:hover {
    color: grey;
  }
`;

export const ModalPhoneBox = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalPhoneImg = styled.img`
  width: 150px;
  height: 150px;
`;

export const ModalPhoneText = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  text-align: center;
  padding: 20px;

  p {
    font-size: larger;
    margin: 0;
  }

  h2 {
    margin: 5px;
  }
`;

export const ModalPhoneFooter = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
`;

export const CartBtn = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  width: 35px;
  height: 35px;
  border: 1px solid #680039;
  border-radius: 100%;
  background-color: #ffffff;
  background: url(https://image.lguplus.com/static/pc-static/common/images/indv-biz/base/sprites-mb-dev.svg)
    6px -40px no-repeat;
`;
