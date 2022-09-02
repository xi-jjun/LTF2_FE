import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";
import * as Styles from "../styles/sizeStyle";
function Size() {
  const [inch, setInch] = useState(15);
  const numbers = [13, 14, 15, 16, 17];
  const handleChange = (event) => {
    setInch(event.target.value);
  };
  const controlProps = (item) => ({
    checked: inch === item,
    onChange: handleChange,
    value: item,
    name: "inch-radio-button",
    inputProps: { "aria-label": item },
  });
  const SelectInch = () => {
    return (
      <RadioGroup row defaultValue={inch} name="inch-radio-button">
        {numbers.map((num) => (
          <FormControlLabel
            value={num}
            control={
              <Radio
                {...controlProps(num)}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            }
            label={`${num} 인치`}
          />
        ))}
      </RadioGroup>
    );
  };
  return (
    <Styles.SizeLayout>
      <Styles.ImgBox>
        <img
          src="//assets.piliapp.com/s3pxy/actual-size/iphone-13/default-front.png"
          style={{ zoom: "1.471", height: "146.7mm" }}
        />
      </Styles.ImgBox>
      <Styles.SizeBox>
        <Styles.RecommendInch>{`고객님의 화면은 ${inch} inch 인가요? `}</Styles.RecommendInch>
        <p>(정확하지 않다면, 아래의 화면 크기를 선택해주세요!)</p>
        <Styles.ButtonBox>{SelectInch()}</Styles.ButtonBox>
      </Styles.SizeBox>
    </Styles.SizeLayout>
  );
}

export default Size;
