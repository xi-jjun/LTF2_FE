import { getPlanByPlanId } from "../api/PlanAPI";
import { getPublicSupportByPhoneIdAndPlanId } from "../api/PublicSupportAPI";

export async function inputComparePhone(phone, plan, propsList) {
  const defaultOpt = async () => {
    const supportPrice = await getPublicSupportByPhoneIdAndPlanId({
      phone_id: phone.phoneId,
      plan_id: plan.planId,
    }).then((data) => data);
    return {
      registration: "기기변경",
      installment: 24,
      discount: -1,
      supportPrice: supportPrice.PublicSupportPrice,
      plan: plan,
    };
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
    returnDataArr[compareArr.length] = await defaultOpt();
    propsList.setCompareDataList(returnDataArr);
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

export function clearCompareData(propsList) {
  propsList.setComparePhoneList([{}, {}, {}]);
  propsList.setCompareDataList([{}, {}, {}]);
}
