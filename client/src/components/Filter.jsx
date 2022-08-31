import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import * as Styles from "../styles/filterStyle";
import * as OptionData from "../assets/filterOptions";

export default function Filter({ handleChange }) {
  const data = OptionData["default"]["5G"];
  const Label = ({ text }) => {
    return <Styles.OptionText>{text}</Styles.OptionText>;
  };

  const Options = (rows) => {
    return rows.map((row, idx) => {
      if (idx === 0)
        return (
          <FormControlLabel
            key={idx}
            value={idx}
            control={<Radio />}
            label={<Label text={row} />}
          />
        );
      return (
        <FormControlLabel
          key={idx}
          value={idx}
          control={<Radio />}
          label={<Label text={row} />}
        />
      );
    });
  };

  return (
    <>
      {Object.keys(data).map((key, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Styles.OptionTitle>{key}</Styles.OptionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="0"
                  name="radio-buttons-group"
                >
                  {Options(data[key])}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
