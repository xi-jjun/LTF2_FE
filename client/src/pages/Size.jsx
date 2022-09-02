import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";
import * as Styles from "../styles/sizeStyle";

const numbers = [13, 14, 15, 16, 17];
const ImgUrl =
  "//assets.piliapp.com/s3pxy/actual-size/iphone-13/default-front.png";

function Size() {
  const [inch, setInch] = useState(15);
  const [size, setSize] = useState({
    zoom: -0.093 * inch + 2.878,
    height: 146.7,
    width: 72.396,
  });

  const handleChange = (e) => {
    setInch(() => Number(e.target.value));

    const z = -0.093 * e.target.value + 2.878;
    console.log(e.target.value);
    console.log(z);
    setSize((prev) => ({ ...prev, zoom: z }));
  };

  const SelectInch = () => {
    return (
      <RadioGroup row defaultValue={inch} onChange={handleChange}>
        {numbers.map((num) => (
          <FormControlLabel
            value={num}
            control={
              <Radio
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
        <Styles.Img src={ImgUrl} zoom={size.zoom} height={size.height} />
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
