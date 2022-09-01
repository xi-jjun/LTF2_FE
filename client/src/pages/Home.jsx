/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Grid } from "@mui/material";
import * as Styles from "../styles/homeStyle";
import PhoneList from "../components/PhoneList";
import Filter from "../components/Filter";
import { PageContainer } from "../components/PageContainer";
import PlanModal from "../components/PlanModal";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { LGButton } from "../components/Button";

export default function Home({
  phones,
  plans,
  modalShow,
  setModalShow,
  saveCart,
  propsList,
}) {
  const navigate = useNavigate();
  const goToNotFound = () => navigate("/notfound");

  const { tech, company } = useParams();

  const [filterOpt, setFilterOpt] = useState({ planId: 1 });

  const handleFilterOpt = (key, value) =>
    setFilterOpt({ ...filterOpt, [key]: value });

  const techArr = ["5G", "LTE"];
  const companyArr = ["삼성", "애플", "기타"];

  const notFoundCondition =
    techArr.indexOf(tech) === -1 ||
    (companyArr.indexOf(company) === -1 && company !== undefined);

  const handleModal = () =>
    setModalShow((prev) => ({ ...prev, plan: !prev.plan }));

  const planList = plans.filter((row) => row.telecomTech === tech);

  useEffect(() => {
    handleFilterOpt("planId", tech === "5G" ? 1 : 17);
    if (notFoundCondition) {
      goToNotFound();
    }
  }, []);

  return (
    <PageContainer>
      <LGButton
        onClick={handleModal}
        children={"요금제 모달 열기 (임시)"}
        rec
        size="sm"
        variant="light"
      />
      <PlanModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        nowPlanId={filterOpt.planId}
        handleFilterOpt={handleFilterOpt}
        plans={planList}
      />
      <Styles.TotalLayout>
        <Styles.FilterTitle>5G 휴대폰</Styles.FilterTitle>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Filter />
          </Grid>
          <Grid item md={9}>
            <PhoneList
              phones={phones}
              modalShow={modalShow}
              saveCart={saveCart}
              propsList={propsList}
              filterOpt={filterOpt}
            />
          </Grid>
        </Grid>
      </Styles.TotalLayout>
    </PageContainer>
  );
}