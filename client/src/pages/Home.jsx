import React from "react";
import { Grid } from "@mui/material";
import * as Styles from "../styles/homeStyle";
import PhoneList from "../components/PhoneList";
import Filter from "../components/Filter";
import { PageContainer } from "../components/PageContainer";

export default function Home({ phones, modalShow, saveCart, propsList }) {
  return (
    <PageContainer>
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
            />
          </Grid>
        </Grid>
      </Styles.TotalLayout>
    </PageContainer>
  );
}
