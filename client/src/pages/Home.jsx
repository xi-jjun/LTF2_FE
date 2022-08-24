import React from "react";
import { Grid } from "@mui/material";
import * as Styles from "../styles/homeStyle";
import PhoneList from "../components/PhoneList";
import Filter from "../components/Filter";

export default function Home({ phones }) {
  return (
    <Styles.TotalLayout>
      <Styles.FilterTitle>5G 휴대폰</Styles.FilterTitle>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <Filter />
        </Grid>
        <Grid item md={9}>
          <PhoneList phones={phones} />
        </Grid>
      </Grid>
    </Styles.TotalLayout>
  );
}
