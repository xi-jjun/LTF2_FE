/* eslint-disable react-hooks/exhaustive-deps */
import * as Compare from "../styles/CompareStyle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import { LGButton } from "./Button";

export default function ComparedPopup({ compareList, setCompareList }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // if (compareList.length === 0 && show) {
    //   setShow(false);
    // } else if (compareList.length !== 0 && !show) {
    //   setShow(true);
    // }
  }, [compareList]);

  const togglePopup = () => setShow(!show);

  const toggle = () => {
    switch (true) {
      case !show && compareList.length !== 0: {
        return "remain";
      }
      case !show && compareList.length === 0: {
        return "none";
      }
      default:
        return "show";
    }
  };

  return (
    <Compare.CompareDiv show={toggle()}>
      <Compare.CompareTitle>
        <h3>비교하기 ({compareList.length})</h3>

        <Compare.CloseBtn
          children={show ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          onClick={togglePopup}
        />
      </Compare.CompareTitle>
      <Compare.CompareContent show={show}>
        <Compare.ComparePhone>
          <Compare.ComparePhoneImg src="https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png" />
          <Compare.ComparePhoneInfo>
            <p>Maybelline Fit Me Bronzer</p>
            <h2>130,260원</h2>
          </Compare.ComparePhoneInfo>
        </Compare.ComparePhone>
        <Compare.ComparePhone>
          <Compare.ComparePhoneImg src="https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png" />
          <Compare.ComparePhoneInfo>
            <p>Maybelline Fit Me Bronzer</p>
            <h2>130,260원</h2>
          </Compare.ComparePhoneInfo>
        </Compare.ComparePhone>
        <Compare.ComparePhone>
          <Compare.ComparePhoneImg src="https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png" />
          <Compare.ComparePhoneInfo>
            <p>Maybelline Fit Me Bronzer</p>
            <h2>130,260원</h2>
          </Compare.ComparePhoneInfo>
        </Compare.ComparePhone>
        <Compare.CompareBtnGroup>
          <LGButton children="비교하기" />
          <LGButton variant="outline-dark" children="전체삭제" />
        </Compare.CompareBtnGroup>
      </Compare.CompareContent>
    </Compare.CompareDiv>
  );
}
