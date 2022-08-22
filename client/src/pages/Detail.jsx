import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Detail() {
  return (
    <Grid container justify="center" spacing={4}>
      <MainImage />
    </Grid>
  );
}

const MainImage = styled.div`
  width: 500px;
  heigth: 500px;
  border: 1px solid black;
`;
