import React from "react";
import { useNavigate } from "react-router-dom";
import { inputComparePhone } from "../util/inputCompare";
import * as Styles from "../styles/phoneStyle";
import { LGButton } from "./Button";
import { priceCalc1 } from "../util/priceCalc";
import { useState } from "react";
import { useEffect } from "react";

export default function Phone({
  phone,
  modalShow,
  saveCart,
  propsList,
  filterOpt,
}) {
  const navigate = useNavigate();

  const [priceInfo, setPriceInfo] = useState({
    phone: 0,
    plan: 0,
    total: 0,
  });

  useEffect(() => {
    priceCalc1(phone.phoneId, filterOpt.planId, -1, 24, setPriceInfo);
  }, [filterOpt]);

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
          {priceInfo.planName}
        </Styles.SubTitle>
      </Styles.CardHeader>
      <Styles.CardBody>
        <Styles.PlanLayout>
          <Styles.PhoneMoney>
            {/* 월 핸드폰 납부 금액 */}
            {`휴대폰 월 ${priceInfo.phone.toLocaleString()}원`}
          </Styles.PhoneMoney>
          <Styles.PlanMoney>
            {/* 월 요금 납부 금액 */}
            {`통신료 월 ${priceInfo.plan.toLocaleString()}원`}
          </Styles.PlanMoney>
          <Styles.TotalMoney>
            {/* 월 총 납부 금액 */}
            {`월 ${priceInfo.total.toLocaleString()}원`}
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
              inputComparePhone(phone, filterOpt.planId, propsList)
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
