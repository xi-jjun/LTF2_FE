import * as detailInfo from "../styles/detailInfoStyle";
import { LGButton } from "./Button";
import * as Styles from '../styles/orderStyle'
export default function OrderPhoneInfo({ phone }) {
  return (
    <detailInfo.SideBarContainer>
      <Styles.PhoneImg src="https://image.lguplus.com/common/images/hphn/product/SM-A235N/imge_cut/ushop_SM-A235N_01_A.jpg"/>
      <Styles.PhoneName>갤럭시 A23</Styles.PhoneName>
      <Styles.PhoneOrderInfoLayout>
        <Styles.PhoneInfoType>
            <Styles.PhoneStorage>128 GB</Styles.PhoneStorage>
            <Styles.PhoneColor>블랙</Styles.PhoneColor>
        </Styles.PhoneInfoType>
        <Styles.PhoneOrderType>
            <Styles.PhoneType>기기변경</Styles.PhoneType>
            <Styles.PhoneType>LTE 다이렉트 45</Styles.PhoneType>
        </Styles.PhoneOrderType>
        <Styles.PlanInfo>
            <Styles.PlanRow>
                <Styles.PlanTitle>휴대폰 가격</Styles.PlanTitle>
                <Styles.PlanMoney>월 16,550원</Styles.PlanMoney>
            </Styles.PlanRow>
            <Styles.PlanRow>
                <Styles.PlanTitle>통신 가격</Styles.PlanTitle>
                <Styles.PlanMoney>월 45,000원</Styles.PlanMoney>
            </Styles.PlanRow>
        </Styles.PlanInfo>
        <Styles.PlanTotalBox>
            <Styles.PlanInfo>
                <Styles.PlanRow>
                    <Styles.PlanTotalTitle>월 납부금액</Styles.PlanTotalTitle>
                    <Styles.PlanTotalPrice>61,550원</Styles.PlanTotalPrice>
                </Styles.PlanRow>
                <Styles.PlanRow>
                    <Styles.PlanMoney style={{fontSize: "12px",color:"#666"}}>부가세 포함금액</Styles.PlanMoney>
                </Styles.PlanRow>
            </Styles.PlanInfo>
        </Styles.PlanTotalBox>
      </Styles.PhoneOrderInfoLayout>
    </detailInfo.SideBarContainer>
  );
}
