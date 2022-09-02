/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row } from "../styles/gridStyle";
import OrderBar from "../components/OrderBar";
import PhoneInfomation from "../components/PhoneInfomation";
import DetailInfomation from "../components/DetailInfomation";
import DetailSideBar from "../components/DetailSideBar";
import { useParams } from "react-router-dom";
import { getPhoneByPhoneId } from "../api/PhoneAPI";
import { getPlanByPlanId, getPlansByTelecomTech } from "../api/PlanAPI";
import { getPublicSupportByPhoneIdAndPlanId } from "../api/PublicSupportAPI";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import { priceCalc } from "../util/priceCalc";
import { deleteAll } from "../util/inputCompare";
import PlanModal from "../components/PlanModal";

export default function Detail({
  modalShow,
  setModalShow,
  saveCart,
  propsList,
}) {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [planList, setPlanList] = useState([]);

  const [active, setActive] = useState({
    nav: "예상 납부금액",
    registration: "기기변경",
    phone: {},
    plan: {},
    color: {},
    ship: "우체국 택배",
    installment: 24,
    supportPrice: 0,
    discount: 24,
    date: new Date(),
    error: false,
  });

  const [priceInfo, setPriceInfo] = useState({});

  const handleData = async (planId) => {
    const [phoneData, planData, planList, supportPrice] =
      await getPhoneByPhoneId(id).then(async (d) => {
        if (d.status === 404) {
          return ["error", "error", "error"];
        } else {
          const searchPlanId = d.phoneDetail.telecomTech === "5G" ? 1 : 17;
          return await Promise.all([
            d,
            getPlanByPlanId(planId || searchPlanId),
            getPlansByTelecomTech(d.phoneDetail.telecomTech),
            getPublicSupportByPhoneIdAndPlanId({
              phone_id: id,
              plan_id: planId || searchPlanId,
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
        planList: planList.PlanList,
        supportPrice: supportPrice,
      };
  };

  const handleFilterOpt = async (key, value) => {
    const isEconomic = (plan, supportPrice) => {
      return plan.monthPrice * 0.25 * 24 > supportPrice ? 24 : -1;
    };

    const values = await handleData(value);
    if (values === "error") {
      setActive({ ...active, error: true });
    } else {
      setActive({
        ...active,
        plan: values.plan,
        supportPrice: values.supportPrice,
        discount:
          planList.find((row) => row.planId === value).planType === "다이렉트"
            ? 0
            : isEconomic(values.plan, values.supportPrice),
      });
    }
  };

  const handleModal = () =>
    setModalShow((prev) => ({ ...prev, plan: !prev.plan }));

  useEffect(() => {
    deleteAll(propsList);
  }, []);

  useEffect(() => {
    if (active.phone) {
      setPriceInfo(
        priceCalc(
          active.phone,
          active.plan,
          active.supportPrice,
          active.discount,
          active.installment
        )
      );
    }
  }, [active.phone]);

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
      setPlanList(values.planList);
      setLoading(false);
    }
  }, [loading]);

  return loading ? (
    <Loader />
  ) : active.error ? (
    <NotFound />
  ) : (
    <div>
      <PlanModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        nowPlanId={active.plan.planId}
        handleFilterOpt={handleFilterOpt}
        plans={planList}
      />
      <PhoneInfomation
        active={active}
        setActive={setActive}
        priceInfo={priceInfo}
        saveCart={saveCart}
      />
      <OrderBar active={active} setActive={setActive} />
      <Row justify="center" body>
        <DetailInfomation
          active={active}
          setActive={setActive}
          planList={planList}
          handleModal={handleModal}
          handleFilterOpt={handleFilterOpt}
        />
        <DetailSideBar
          active={active}
          priceInfo={priceInfo}
          saveCart={saveCart}
        />
      </Row>
    </div>
  );
}
