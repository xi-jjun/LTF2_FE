import { parsePhoneNumber } from "react-phone-number-input";

export const validator = (state, fieldName) => {
    const {userType,userId,userName,userPhone} = state
    let errors = {};
    switch (fieldName) {
      case "userId":
        validateUserID(userType, userId, errors);
        break;
      case "userName":
        validateName(userName,errors);
        break;
      case "userPhone":
        validatePhoneNumber(userPhone, errors);
        break;
      default:
    }
    return errors;
  };

export const check = (data,value) =>{
    return data === value
  }
// ******************************
function validatePhoneNumber(phone, errors) {
    let result = true;
    const phoneObject = parsePhoneNumber(phone);
    if (!phoneObject || phone.length < 11) {
      errors.userPhone = "번호를 다시 확인해주세요.";
      result = false;
    }
    return result;
  }
// ******************************
function validateUserID(userType,userId, errors) {
    let result = true;
    if (!userId) {
        errors.userId = "주민등록번호를 입력해 주세요.";
        result = false;
    } else if (userId.length != 13) {
        errors.userId = "주민등록번호를 올바르게 입력해 주세요.";
        result = false;
    } else {
        let re;
        userType === "외국인" ? re = /^(\d{6})?(\d{5}[7-9]\d{1})$/:
        re = /(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))[1-4][0-9]{6}$/;
        result = re.test(String(userId));
        if (!result) errors.userId = "바르지 않은 형식입니다.";
    }
    return result;
}
// ******************************
function validateName(name, errors) {
  let result = true;
  if (name.length === 0) {
    errors.userName = "이름을 입력해주세요.";
    result = false;
  } 
  return result;
}

// ******************************
function validateEmail(email, errors) {
  let result = true;

  if (!email) {
    errors.email = "이메일을 입력해주세요";
    result = false;
  } else {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    if (!result) errors.email = "잘못된 이메일 양식 입니다.";
  }
  return result;
}

