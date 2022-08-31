import React from "react";
import { useNavigate } from "react-router-dom";
import { defaultValue } from "../DummyData";
import { inputComparePhone } from "../methods/inputCompare";
import * as Styles from "../styles/phoneStyle";
import { LGButton } from "./Button";

export default function Phone({ phone, modalShow, saveCart, propsList }) {
  const navigate = useNavigate();

  const compareDisabled =
    propsList.comparePhoneList.filter((row) => row.phoneId).length === 3;

  return (
    <Styles.CardLayout>
      <Styles.CardHeader onClick={() => navigate(`/detail/${phone.phoneId}`)}>
        <Styles.ImageLayout>
          <Styles.Image src={phone.previewImg} />
          <Styles.ColorList>
            {phone.colorList.map((color, idx) => (
              <Styles.Color
                key={idx}
                title={color.name}
                background={color.hexCode}
              />
            ))}
          </Styles.ColorList>
        </Styles.ImageLayout>
        <Styles.Title>{phone.titleName}</Styles.Title>
        <Styles.SubTitle>
          {/* 대표 요금제 이름 */}
          5G 다이렉트 65
        </Styles.SubTitle>
      </Styles.CardHeader>
      <Styles.CardBody>
        <Styles.PlanLayout>
          <Styles.PhoneMoney>
            {/* 월 핸드폰 납부 금액 */}
            휴대폰 월65,260원
          </Styles.PhoneMoney>
          <Styles.PlanMoney>
            {/* 월 요금 납부 금액 */}
            통신료 월65,000원
          </Styles.PlanMoney>
          <Styles.TotalMoney>
            {/* 월 총 납부 금액 */}월 130,260원
          </Styles.TotalMoney>
        </Styles.PlanLayout>
      </Styles.CardBody>
      <Styles.CardFooter>
        <Styles.OrderNumber>
          {/* 총 구매자 */}
          구매 {phone.orderCount}명
        </Styles.OrderNumber>
        <Styles.CompareButton>
          <LGButton
            variant={
              propsList.comparePhoneList.findIndex(
                (row) => row.phoneId === phone.phoneId
              ) === -1
                ? "light"
                : "dark"
            }
            size="sm"
            disabled={
              propsList.comparePhoneList.findIndex(
                (row) => row.phoneId === phone.phoneId
              ) === -1 && compareDisabled
            }
            onClick={() =>
              inputComparePhone(phone, defaultValue.plan, propsList)
            }
          >
            비교하기
          </LGButton>
          <Styles.CartButton />
        </Styles.CompareButton>
      </Styles.CardFooter>
    </Styles.CardLayout>
  );
}
