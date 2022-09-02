/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import * as Styles from "../styles/homeStyle";
import PhoneList from "../components/PhoneList";
import Filter from "../components/Filter";
import { PageContainer } from "../components/PageContainer";
import PlanModal from "../components/PlanModal";
import { LGButton } from "../components/Button";
import { filtering } from "../util/filtering";
import useFilter from "../util/useFilter";

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

  const [filterOpt, setFilterOpt] = useState({ planId: 1, disCountType: -1 });
  const [defaultValue, setDefaultValue] = useState("전체");
  const handleFilterOpt = (key, value) =>
    setFilterOpt({ ...filterOpt, [key]: value });

  const techArr = ["5G", "LTE"];
  const companyArr = ["삼성", "애플", "기타"];

  const notFoundCondition =
    techArr.indexOf(tech) === -1 ||
    (companyArr.indexOf(company) === -1 && company !== undefined);

  const handleModal = () =>
    setModalShow((prev) => ({ ...prev, plan: !prev.plan }));

  const phoneList = phones.filter((row) => row.telecomTech === tech);
  const planList = plans.filter((row) => row.telecomTech === tech);

  useEffect(() => {
    handleFilterOpt("planId", tech === "5G" ? 1 : 17);
    if (notFoundCondition) {
      goToNotFound();
    }
  }, []);
  ///////////////////////////////////////////

  const [filter, setFilter] = useState({
    plan: "전체",
    disCountType: "전체",
    manufacturingCompany: "전체",
    storage: "전체",
    memory: "전체",
  });

  const callback = (key, data) => {
    const { id, value } = data;
    switch (key) {
      case "plan":
        setFilterOpt(() => ({ ...filterOpt, planId: id }));
        setDefaultValue(value);
        break;
      case "disCountType":
        setFilterOpt(() => ({ ...filterOpt, disCountType: id }));
        break;
      default:
        break;
    }
  };
  const { handleChange, state, list } = useFilter({
    initState: filter,
    callback: callback,
    filterModule: filtering,
  });

  return (
    <PageContainer>
      <PlanModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        nowPlanId={filterOpt.planId}
        handleFilterOpt={handleFilterOpt}
        setDefaultValue={setDefaultValue}
        plans={planList}
      />
      <Styles.TotalLayout>
        <Styles.FilterTitle>{tech} 휴대폰</Styles.FilterTitle>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Filter
              handleModal={handleModal}
              phones={phones}
              defaultValue={defaultValue}
              tech={tech}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item md={9}>
            <PhoneList
              phones={list.length === 0 ? phoneList : list}
              modalShow={modalShow}
              saveCart={saveCart}
              propsList={propsList}
              filterOpt={filterOpt}
              planList={planList}
            />
          </Grid>
        </Grid>
      </Styles.TotalLayout>
    </PageContainer>
  );
}
