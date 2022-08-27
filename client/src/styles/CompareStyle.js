import styled from "styled-components";

export const CompareDiv = styled.div`
  width: 1440px;
  height: ${(props) => {
    if (props.show === "remain") {
      return "62px";
    } else if (props.show === "none") {
      return "0px";
    } else return "202px";
  }};
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 20%) 0 -3px 10px;
  background: #ffffff;
  position: fixed;
  z-index: 99;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: ${(props) => (props.show === "none" ? "none" : "block")};
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

export const CompareContent = styled.div`
  width: 100%;
  height: 140px;
  background: #ffffff;
  position: absolute;
  bottom: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ComparePhone = styled.div`
  width: 400px;
  height: 70%;
  border: 2px dashed lightgrey;
  border-radius: 10px;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ComparePhoneImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 0px 10px;
`;

export const ComparePhoneInfo = styled.div`
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

export const CompareBtnGroup = styled.div`
  height: 70%;
  margin: 0px 10px;
  // border: 2px dashed lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin: 5px 0px;
  }
`;

export const CloseBtn = styled.div`
  margin-left: auto;
  float: right;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;
