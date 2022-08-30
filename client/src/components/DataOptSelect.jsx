import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";

export default function DataOptSelect({
  label,
  value,
  handleChange,
  opt,
  getKey,
}) {
  const style = {
    minWidth: 120,
    margin: "10px 0px",
    fontFamily: "Noto Sans KR",
  };

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
          {getKey
            ? opt.map((row, i) => {
                return (
                  <MenuItem key={row[getKey]} value={row}>
                    {row[getKey]}
                  </MenuItem>
                );
              })
            : opt.map((row, i) => {
                return (
                  <MenuItem key={row} value={row}>
                    {row}
                  </MenuItem>
                );
              })}
        </Select>
      </FormControl>
    </Box>
  );
}
