import * as detailInfo from "../styles/detailInfoStyle";
import { LGButton } from "./Button";
import * as Styles from "../styles/orderStyle";
export default function OrderPhoneInfo({ state }) {
  console.log(state);
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
        </Styles.PhoneOrderType>
        <Styles.PlanInfo>
          <Styles.PlanRow>
            <Styles.PlanTitle>휴대폰 가격</Styles.PlanTitle>
            <Styles.PlanMoney>
              월 {(state.phone.price / 12).toLocaleString()}원
            </Styles.PlanMoney>
          </Styles.PlanRow>
          <Styles.PlanRow>
            <Styles.PlanTitle>통신 가격</Styles.PlanTitle>
            <Styles.PlanMoney>
              월 {state.plan.monthPrice.toLocaleString()}원
            </Styles.PlanMoney>
          </Styles.PlanRow>
        </Styles.PlanInfo>
        <Styles.PlanTotalBox>
          <Styles.PlanInfo>
            <Styles.PlanRow>
              <Styles.PlanTotalTitle>월 납부금액</Styles.PlanTotalTitle>
              <Styles.PlanTotalPrice>
                {(
                  state.phone.price / 12 +
                  state.plan.monthPrice
                ).toLocaleString()}
                원
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
