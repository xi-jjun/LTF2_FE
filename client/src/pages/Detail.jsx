import React, { useEffect, useState } from "react";
import { Row } from "../styles/gridStyle";
import { PageContainer } from "../components/PageContainer";
import OrderBar from "../components/OrderBar";
import PhoneInfomation from "../components/PhoneInfomation";
import DetailInfomation from "../components/DetailInfomation";
import DetailSideBar from "../components/DetailSideBar";
import { plan, phone } from "../DummyData";

export default function Detail() {
  const [active, setActive] = useState({
    nav: "예상 납부금액",
    phone: phone[0],
    plan: plan[0],
    color: phone[0].colorList[0],
    ship: "우체국택배",
    installment: 24,
    supportPrice: 300000,
    discount: "공시지원금",
  });

  const actualPrice =
    active.phone.price -
    (active.discount === "공시지원금" ? active.supportPrice : 0);

  let priceInfo = {
    phone: Math.ceil(actualPrice / active.installment / 100) * 100,
    plan: active.plan.month_price * (active.discount === "선택약정" ? 0.75 : 1),
    total:
      (active.installment === 1
        ? 0
        : Math.ceil(actualPrice / active.installment / 100) * 100) +
      active.plan.month_price * (active.discount === "선택약정" ? 0.75 : 1),
  };

  useEffect(() => {
    setActive({
      nav: "예상 납부금액",
      phone: phone[0],
      plan: plan[0],
      color: phone[0].colorList[0],
      ship: "우체국택배",
      installment: 24,
      supportPrice: 300000,
      discount: "공시지원금",
    });
  }, []);

  return (
    <PageContainer>
      <PhoneInfomation
        active={active}
        setActive={setActive}
        priceInfo={priceInfo}
      />
      <OrderBar active={active} setActive={setActive} />
      <Row justify="center">
        <DetailInfomation active={active} setActive={setActive} />
        <DetailSideBar active={active} priceInfo={priceInfo} />
      </Row>
    </PageContainer>
  );
}
