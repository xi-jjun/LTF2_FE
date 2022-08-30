/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row } from "../styles/gridStyle";
import OrderBar from "../components/OrderBar";
import PhoneInfomation from "../components/PhoneInfomation";
import DetailInfomation from "../components/DetailInfomation";
import DetailSideBar from "../components/DetailSideBar";
import { useParams } from "react-router-dom";
import { getPhoneByPhoneId } from "../api/PhoneAPI";
import { getPlanByPlanId } from "../api/PlanAPI";
import { getPublicSupportByPhoneIdAndPlanId } from "../api/PublicSupportAPI";
import { defaultValue } from "../DummyData";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

export default function Detail({ saveCart, propsList }) {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [active, setActive] = useState({
    nav: "예상 납부금액",
    registration: "기기변경",
    phone: defaultValue.phone,
    plan: defaultValue.plan,
    color: defaultValue.phone.colorList[0],
    ship: "우체국 택배",
    installment: 24,
    supportPrice: 0,
    discount: 24,
    date: new Date(),
    error: false,
  });

  const actualPrice =
    active.phone.price - (active.discount === -1 ? active.supportPrice : 0);

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
    plan: active.plan.monthPrice * (active.discount > 11 ? 0.75 : 1),
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
      active.plan.monthPrice * (active.discount > 11 ? 0.75 : 1),
  };

  const handleData = async () => {
    const [phoneData, planData, supportPrice] = await Promise.all([
      getPhoneByPhoneId(id),
      getPlanByPlanId(1),
      getPublicSupportByPhoneIdAndPlanId({ phone_id: id, plan_id: 1 }),
    ]);
    if (phoneData.status === 404) {
      return "error";
    } else
      return {
        phone: phoneData.phoneDetail,
        color: phoneData.phoneDetail.colorList[0],
        plan: planData.Plan,
        supportPrice: supportPrice.PublicSupportPrice,
      };
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(async () => {
    if (loading) {
      const values = await handleData();
      if (values === "error") {
        setActive({ ...active, error: true });
      } else
        setActive({
          ...active,
          phone: values.phone,
          color: values.color,
          plan: values.plan,
          supportPrice: values.supportPrice,
        });
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    if (propsList.comparePhoneList.filter((row) => row.id).length) {
      propsList.setComparePhoneList([{}, {}, {}]);
    }
  }, [propsList.comparePhoneList]);

  return loading ? (
    <Loader />
  ) : active.error ? (
    <NotFound />
  ) : (
    <div>
      <PhoneInfomation
        active={active}
        setActive={setActive}
        priceInfo={priceInfo}
        saveCart={saveCart}
      />
      <OrderBar active={active} setActive={setActive} />
      <Row justify="center" body>
        <DetailInfomation active={active} setActive={setActive} />
        <DetailSideBar
          active={active}
          priceInfo={priceInfo}
          saveCart={saveCart}
        />
      </Row>
    </div>
  );
}
