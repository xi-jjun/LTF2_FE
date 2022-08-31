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
import { priceCalc } from "../methods/priceCalc";
import { deleteAll } from "../methods/inputCompare";

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

  let priceInfo = priceCalc(
    active.phone,
    active.plan,
    active.supportPrice,
    active.discount,
    active.installment
  );

  const handleData = async () => {
    const [phoneData, planData, supportPrice] = await getPhoneByPhoneId(
      id
    ).then(async (d) => {
      if (d.status === 404) {
        return ["error", "error", "error"];
      } else {
        const searchPlanId = d.phoneDetail.telecomTech === "5G" ? 1 : 17;
        return await Promise.all([
          d,
          getPlanByPlanId(searchPlanId),
          getPublicSupportByPhoneIdAndPlanId({
            phone_id: id,
            plan_id: searchPlanId,
          }).then((d) => {
            if (d.status === 404) {
              return 0;
            } else {
              return d.PublicSupportPrice;
            }
          }),
        ]);
      }
    });
    if (phoneData === "error") {
      return "error";
    } else
      return {
        phone: phoneData.phoneDetail,
        color: phoneData.phoneDetail.colorList[0],
        plan: planData.Plan,
        supportPrice: supportPrice,
      };
  };

  useEffect(() => {
    setLoading(true);
    deleteAll(propsList);
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
