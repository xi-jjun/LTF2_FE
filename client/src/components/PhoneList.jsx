import { Grid } from "@mui/material";
import React from "react";
import Phone from "./Phone";
import * as Styles from "../styles/phoneListStyle";

export default function PhoneList({
  phones,
  modalShow,
  saveCart,
  propsList,
  filterOpt,
  planList,
  sortBy,
  setSortBy,
  search,
}) {
  const phonesArray = search ? [...phones].slice(0, 4) : [...phones];
  return (
    <>
      <Styles.InfoArea>
        <Styles.Total>전체 {phones.length} 개</Styles.Total>
        <Styles.InfoBox>
          <Styles.Select onChange={(e) => setSortBy(e.target.value)}>
            <Styles.Option value="" children="주간 판매량 많은 순" />
            <Styles.Option value="orderDesc" children="누적 판매량 많은 순" />
            <Styles.Option value="actualAsc" children="실 구매가 낮은 순" />
            <Styles.Option value="actualDesc" children="실 구매가 높은 순" />
            <Styles.Option value="priceAsc" children="정상가 낮은 순" />
            <Styles.Option value="priceDesc" children="정상가 높은 순" />
          </Styles.Select>
        </Styles.InfoBox>
      </Styles.InfoArea>
      <Grid container justify="center" spacing={2}>
        {phonesArray.map((phone) => (
          <Grid key={phone.phoneId} item xs={12} sm={6} md={4} lg={3}>
            <Phone
              phone={phone}
              modalShow={modalShow}
              saveCart={saveCart}
              propsList={propsList}
              filterOpt={filterOpt}
              planList={planList}
              search
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
