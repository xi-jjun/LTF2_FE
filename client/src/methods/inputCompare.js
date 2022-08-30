export function inputComparePhone(phone, propsList) {
  const defaultOpt = {
    registration: "기기변경",
    installment: "24개월",
    discount: "무약정",
    plan: "5G 다이렉트 65",
  };

  const returnPhoneArr = [...propsList.comparePhoneList];
  const returnDataArr = [...propsList.compareDataList];
  const compareArr = propsList.comparePhoneList.filter((row) => row.phoneId);
  if (
    propsList.comparePhoneList.findIndex(
      (row) => row.phoneId === phone.phoneId
    ) === -1 &&
    compareArr.length < 3
  ) {
    returnPhoneArr[compareArr.length] = phone;
    returnDataArr[compareArr.length] = defaultOpt;
    propsList.setComparePhoneList(returnPhoneArr);
    propsList.setCompareDataList(returnDataArr);
  } else {
    returnPhoneArr.splice(
      propsList.comparePhoneList.findIndex(
        (row) => row.phoneId === phone.phoneId
      ),
      1
    );
    returnDataArr.splice(
      propsList.comparePhoneList.findIndex(
        (row) => row.phoneId === phone.phoneId
      ),
      1
    );
    propsList.setComparePhoneList([...returnPhoneArr, {}]);
    propsList.setCompareDataList([...returnDataArr, {}]);
  }
}

export function inputCompareData(phone, propsList) {
  const defaultOpt = {
    registration: "기기변경",
    installment: 24,
    discount: "무약정",
    plan: "5G 다이렉트 65",
  };

  const returnPhoneArr = [...propsList.comparePhoneList];
  const returnDataArr = [...propsList.compareDataList];
  const compareArr = propsList.comparePhoneList.filter((row) => row.phoneId);
  if (
    propsList.comparePhoneList.findIndex(
      (row) => row.phoneId === phone.phoneId
    ) === -1 &&
    compareArr.length < 3
  ) {
    returnPhoneArr[compareArr.length] = phone;
    returnDataArr[compareArr.length] = defaultOpt;
    propsList.setComparePhoneList(returnPhoneArr);
  } else {
    returnPhoneArr.splice(
      propsList.comparePhoneList.findIndex(
        (row) => row.phoneId === phone.phoneId
      ),
      1
    );
    returnDataArr.splice(
      propsList.comparePhoneList.findIndex(
        (row) => row.phoneId === phone.phoneId
      ),
      1
    );
    propsList.setComparePhoneList([...returnPhoneArr, {}]);
    propsList.setCompareDataList([...returnDataArr, {}]);
  }
}
