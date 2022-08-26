import { parsePhoneNumber } from "react-phone-number-input";

export const validator = (values, fieldName) => {
    let errors = {};
    switch (fieldName) {
      case "userId":
        validateUserID(values.userId, errors);
        break;
      case "phone":
        validatePhoneNumber(values.phone, errors);
        break;
      default:
    }
    return errors;
  };

function validatePhoneNumber(phone, errors) {
    let result = true;
    const phoneObject = parsePhoneNumber(phone);
    if (!phoneObject) {
      errors.phone = "번호를 다시 확인해주세요.";
      result = false;
    }
    return result;
  }

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
        userType === "외국인" ? re = /^(\d{6})-?(\d{5}[7-9]\d{1})$/:
        re = /(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/;
        result = re.test(String(userId));
        if (!result) errors.userId = "바르지 않은 형식입니다.";
    }
    return result;
}