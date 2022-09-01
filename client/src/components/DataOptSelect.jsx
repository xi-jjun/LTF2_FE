/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { getPhonesByTelecomTech } from "../api/PhoneAPI";
import { getPlansByTelecomTech } from "../api/PlanAPI";

export default function DataOptSelect({ label, value, handleChange, extra }) {
  const style = {
    minWidth: 120,
    margin: "10px 0px",
    fontFamily: "Noto Sans KR",
  };

  const [list, setList] = useState([]);

  const getPlanData = async () => {
    const values = await getPlansByTelecomTech(extra)
      .then((d) => (d.status === 400 ? [] : d.PlanList))
      .catch((e) => console.log(e.message));
    return values;
  };

  const getPhoneData = async () => {
    const values = await getPhonesByTelecomTech(extra[0])
      .then((d) => (d.status === 400 ? [] : d.phoneList))
      .catch((e) => console.log(e.message));
    return values;
  };

  const arr = () => {
    switch (label) {
      case "가입유형":
        return [
          { value: "번호이동", label: "번호이동" },
          { value: "기기변경", label: "기기변경" },
          { value: "신규가입", label: "신규가입" },
        ];
      case "할부":
        return [
          { value: 1, label: "완납결제" },
          { value: 3, label: "3개월" },
          { value: 6, label: "6개월" },
          { value: 9, label: "9개월" },
          { value: 10, label: "10개월" },
          { value: 12, label: "12개월" },
          { value: 24, label: "24개월" },
          { value: 30, label: "30개월" },
          { value: 36, label: "36개월" },
          { value: 48, label: "48개월" },
        ];
      case "할인유형":
        return extra === "다이렉트"
          ? [{ value: 0, label: "무약정" }]
          : [
              { value: -1, label: "공시지원금" },
              { value: 24, label: "선택약정24개월" },
              { value: 12, label: "선택약정12개월" },
            ];
      case "통신":
        return [
          { value: "5G", label: "5G" },
          { value: "LTE", label: "LTE" },
        ];
      case "제조사":
        return [
          { value: "전체", label: "전체" },
          { value: "삼성", label: "삼성" },
          { value: "애플", label: "애플" },
          { value: "기타", label: "기타" },
        ];
      case "기기명":
        return list
          .filter((row) =>
            extra[1] !== "전체"
              ? row.manufacturingCompany === (extra[1] || "")
              : true
          )
          .map((row) => ({
            label: row.titleName,
            value: row.phoneId,
          }));
      default:
        return list;
    }
  };

  useEffect(async () => {
    if (label === "요금제") {
      const values = await getPlanData();
      setList(
        values.map((row) => ({
          label: row.name,
          value: row.planId,
        }))
      );
    } else if (label === "기기명") {
      const values = await getPhoneData();
      setList(values);
    }
  }, []);

  return (
    <Box sx={style}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {arr().map((row, i) => {
            return (
              <MenuItem key={row.value} value={row.value}>
                {row.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
