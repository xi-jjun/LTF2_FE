import * as detailInfo from "../styles/detailInfoStyle";
import { LGButton } from "./Button";
import * as Styles from "../styles/orderStyle";
import { priceCalc } from "../util/priceCalc";
import { useState } from "react";
import { discountType } from "../util/transform";
export default function OrderPhoneInfo({ state }) {
  const [pay, setPay] = useState(
    priceCalc(
      state.phone,
      state.plan,
      state.supportPrice,
      state.discount,
      state.installment
    )
  );
  return (
    <detailInfo.SideBarContainer>
      <Styles.PhoneImg src={state.color.phoneImgList[0]} />
      <Styles.PhoneName>{state.phone.titleName}</Styles.PhoneName>
      <Styles.PhoneOrderInfoLayout>
        <Styles.PhoneInfoType>
          <Styles.PhoneStorage>
            {state.phone.phoneInfo.memory} GB
          </Styles.PhoneStorage>
          <Styles.PhoneColor>{state.color.name}</Styles.PhoneColor>
        </Styles.PhoneInfoType>
        <Styles.PhoneOrderType>
          <Styles.PhoneType>{state.registration}</Styles.PhoneType>
          <Styles.PhoneType>{state.plan.name}</Styles.PhoneType>
          <Styles.PhoneType>{discountType(state.discount)}</Styles.PhoneType>
        </Styles.PhoneOrderType>
        <Styles.PlanInfo>
          <Styles.PlanRow>
            <Styles.PlanTitle>휴대폰 가격</Styles.PlanTitle>
            <Styles.PlanMoney>
              월 {pay.phone.toLocaleString()}원
            </Styles.PlanMoney>
          </Styles.PlanRow>
          <Styles.PlanRow>
            <Styles.PlanTitle>통신 가격</Styles.PlanTitle>
            <Styles.PlanMoney>
              월 {pay.plan.toLocaleString()}원
            </Styles.PlanMoney>
          </Styles.PlanRow>
        </Styles.PlanInfo>
        <Styles.PlanTotalBox>
          <Styles.PlanInfo>
            <Styles.PlanRow>
              <Styles.PlanTotalTitle>월 납부금액</Styles.PlanTotalTitle>
              <Styles.PlanTotalPrice>
                {pay.total.toLocaleString()}원
              </Styles.PlanTotalPrice>
            </Styles.PlanRow>
            <Styles.PlanRow>
              <Styles.PlanMoney style={{ fontSize: "12px", color: "#666" }}>
                부가세 포함금액
              </Styles.PlanMoney>
            </Styles.PlanRow>
          </Styles.PlanInfo>
        </Styles.PlanTotalBox>
      </Styles.PhoneOrderInfoLayout>
    </detailInfo.SideBarContainer>
  );
}
