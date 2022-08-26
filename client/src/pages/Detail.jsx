import React, { useEffect, useState } from "react";
import { Row } from "../styles/gridStyle";
import { PageContainer } from "../components/PageContainer";
import OrderBar from "../components/OrderBar";
import PhoneInfomation from "../components/PhoneInfomation";
import DetailInfomation from "../components/DetailInfomation";
import DetailSideBar from "../components/DetailSideBar";
import { plan, phone } from "../DummyData";

export default function Detail({ saveCart }) {
  const [active, setActive] = useState({
    nav: "예상 납부금액",
    phone: phone[0],
    plan: plan[0],
    color: phone[0].colorList[0],
    ship: "우체국택배",
    installment: 24,
    supportPrice: 108000,
    discount: "공시지원금",
  });

  const actualPrice =
    active.phone.price -
    (active.discount === "공시지원금" ? active.supportPrice * 1.15 : 0);

  const monthFee = 0.059 / 12;

  let priceInfo = {
    phone:
      active.installment === 1
        ? actualPrice
        : Math.round(
            (actualPrice *
              monthFee *
              Math.pow(1 + monthFee, active.installment)) /
              (Math.pow(1 + monthFee, active.installment) - 1) /
              10
          ) * 10,
    plan:
      active.plan.month_price *
      (active.discount.indexOf("선택약정") !== -1 ? 0.75 : 1),
    installmentFee:
      active.installment === 1
        ? 0
        : Math.round(
            (((actualPrice *
              monthFee *
              Math.pow(1 + monthFee, active.installment)) /
              (Math.pow(1 + monthFee, active.installment) - 1)) *
              active.installment -
              actualPrice) /
              10
          ) * 10,
    total:
      (active.installment === 1
        ? 0
        : Math.ceil(actualPrice / active.installment / 100) * 100) +
      active.plan.month_price *
        (active.discount.indexOf("선택약정") !== -1 ? 0.75 : 1),
  };

  useEffect(() => {
    setActive({
      nav: "예상 납부금액",
      phone: phone[0],
      plan: plan[0],
      color: phone[0].colorList[0],
      ship: "우체국택배",
      installment: 24,
      supportPrice: 108000,
      discount: "선택약정24",
    });
  }, []);

  return (
    <PageContainer>
      <PhoneInfomation
        active={active}
        setActive={setActive}
        priceInfo={priceInfo}
        saveCart={saveCart}
      />
      <OrderBar active={active} setActive={setActive} />
      <Row justify="center">
        <DetailInfomation active={active} setActive={setActive} />
        <DetailSideBar
          active={active}
          priceInfo={priceInfo}
          saveCart={saveCart}
        />
      </Row>
    </PageContainer>
  );
}
