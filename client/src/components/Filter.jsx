import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import * as Styles from "../styles/filterStyle";
import * as OptionData from "../assets/filterOptions";

export default function Filter({ phones, handleChange }) {
  const data = OptionData["default"]["5G"];

  const Options = (rows) => {
    return rows.map((row, idx) => {
      return (
        <FormControlLabel
          key={idx}
          value={idx === 0 ? "전체" : row}
          control={<Radio />}
          label={<Styles.OptionText>{row}</Styles.OptionText>}
        />
      );
    });
  };

  return (
    <>
      {Object.keys(data).map((k, i) => {
        /*
            k = 요금제, 할인유형, 제조사...
        */
        return (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Styles.OptionTitle>{k}</Styles.OptionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <RadioGroup
                  defaultValue={"전체"}
                  name={data[k].name}
                  onChange={(e) => handleChange(e, phones)}
                >
                  {Options(data[k].values)}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
