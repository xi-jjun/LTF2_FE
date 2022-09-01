/* eslint-disable react-hooks/exhaustive-deps */
import { Row } from "../styles/gridStyle";
import { LGButton } from "./Button";
import * as DetailInfo from "../styles/detailInfoStyle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getPlansAll } from "../api/PlanAPI";
import { getPublicSupportByPhoneIdAndPlanId } from "../api/PublicSupportAPI";
import { arrToString, phoneInfoLabel } from "../util/transform";

export default function DetailInfomation({ active, setActive }) {
  // active 요소 변경 함수
  const nowActive = (key, value) => setActive({ ...active, [key]: value });
  const [more, setMore] = useState(false);
  const [planList, setPlanList] = useState([]);

  const getPlanList = async () => {
    const returnArr = await getPlansAll();
    return returnArr.PlanList;
  };

  const getSupportPrice = async (plan) => {
    const price = await getPublicSupportByPhoneIdAndPlanId({
      phone_id: active.phone.phoneId,
      plan_id: plan.planId,
    }).then((d) => {
      if (d.status === 404) {
        return 0;
      } else {
        return d.PublicSupportPrice;
      }
    });
    return price;
  };

  const changePlan = async (row) => {
    const value = await getSupportPrice(row);
    const discount = row.planType === "다이렉트" ? 0 : -1;
    setActive({ ...active, plan: row, discount, supportPrice: value || 0 });
  };

  // 현재 선택된 할부인지
  const thisInstallment = (month) =>
    active.installment === month ? "dark" : "outline-dark";

  // 할부 선택 버튼
  const InstallmentBtn = ({ month }) => (
    <LGButton
      variant={thisInstallment(month)}
      style={{ width: "24%", margin: "0.5% 0.5%" }}
      onClick={() => nowActive("installment", month)}
      children={month === 1 ? "카드/간편결제" : `${month}개월`}
    />
  );

  // 배송 선택 버튼
  const ShipBtn = ({ ship }) => (
    <LGButton
      variant={active.ship === ship ? "dark" : "outline-dark"}
      size="lg"
      rec
      style={{ margin: "0px 0.5%", width: "49%" }}
      onClick={() => nowActive("ship", ship)}
    >
      {ship}
    </LGButton>
  );

  const OptAgreeRadio = ({ month }) => (
    <FormControlLabel
      value={month}
      control={<Radio />}
      label={`${month}개월 할인`}
    />
  );

  // 공시지원금 할인 요금
  const support = active.supportPrice.toLocaleString();

  // 선택약정 할인 요금
  const optAgree = (month) =>
    (active.plan.monthPrice * 0.25 * month).toLocaleString();

  const installmentArr = more
    ? [1, 3, 6, 9, 10, 12, 24, 30, 36, 48]
    : [1, 12, 24, 36];

  const returnStr = (obj, str) => {
    switch (obj) {
      case "colorList":
        return arrToString(str);
      case "storage":
        return `${str.toLocaleString()} mAh`;
      default:
        return str;
    }
  };

  useEffect(async () => {
    const value = await getPlanList();
    setPlanList(
      value.filter((row) => row.telecomTech === active.phone.telecomTech)
    );
  }, []);

  if (active.nav === "예상 납부금액") {
    return (
      <DetailInfo.Container>
        <div>
          <DetailInfo.PriceRow>
            <div className="label">배송방법</div>
            <div className="content">
              <p>배송비는 무료입니다.</p>
              <Row justify="center">
                <ShipBtn ship="우체국 택배" />
                <ShipBtn ship="오늘 도착" />
              </Row>
              <li>
                평일 오후 4시까지 신청하면 다음 날 받을 수 있습니다. 도서, 산간
                지역은 2일 정도 걸립니다.
              </li>
              <li>주말 및 공휴일에는 배송 업무를 쉽니다.</li>
            </div>
          </DetailInfo.PriceRow>
          <DetailInfo.PriceRow>
            <div className="label">요금제</div>
            <div className="content">
              <p style={{ float: "left" }}>추천 요금제</p>
              <p
                style={{
                  float: "right",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                다른 요금제 선택 {">"}
              </p>
              {planList.slice(0, 3).map((row) => (
                <DetailInfo.PlanCard
                  key={row.planId}
                  now={active.plan.planId === row.planId}
                  onClick={() => changePlan(row)}
                >
                  <DetailInfo.PlanTitle>{row.name}</DetailInfo.PlanTitle>
                  <DetailInfo.PlanPrice>{`${row.monthPrice.toLocaleString()}원`}</DetailInfo.PlanPrice>
                  <DetailInfo.PlanDescription>
                    <div>
                      <p>{`데이터 ${row.data}, 음성 ${row.voice}${
                        row.shareData ? ", 나눠쓰기 사용가능" : ""
                      }`}</p>
                    </div>
                    <div className="icon">
                      <AddCircleOutlineIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          alert("클릭");
                        }}
                      />
                    </div>
                  </DetailInfo.PlanDescription>
                </DetailInfo.PlanCard>
              ))}
            </div>
          </DetailInfo.PriceRow>
          <DetailInfo.PriceRow>
            <div className="label">
              할인유형
              <br />
              할부기간
              <p className="des">
                할인유형과 할부기간을 <br />
                선택해주세요.
              </p>
            </div>
            <div className="content">
              <p>할인유형</p>
              {active.discount === 0 ? (
                <DetailInfo.NoContractDiv>
                  <div>
                    선택하신 요금제는 무약정 요금제로 공시지원금(휴대폰 가격
                    할인),
                    <br />
                    선택약정할인(통신료 25% 할인), 7% 추가요금 할인 및 가족 결합
                    할인이 제공되지 않습니다.
                  </div>
                </DetailInfo.NoContractDiv>
              ) : (
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <DetailInfo.DiscountCard
                    left
                    active={active.discount === -1}
                    onClick={() => nowActive("discount", -1)}
                  >
                    <p className="type">공시지원금</p>
                    <p className="type-description">휴대폰 가격 1회 할인</p>
                    <p className="type-support-price">
                      총 -<span>{support}</span>원
                    </p>
                  </DetailInfo.DiscountCard>
                  <DetailInfo.DiscountCard
                    disabled
                    active={active.discount > 11}
                  >
                    <p className="type">선택약정</p>
                    <p className="type-description">통신요금 25% 할인</p>
                    <DetailInfo.DiscountPrice>
                      <FormControl style={{ width: "40%" }}>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          value={active.discount}
                          onChange={(e) =>
                            nowActive("discount", e.target.value)
                          }
                        >
                          <OptAgreeRadio month={24} />
                          <OptAgreeRadio month={12} />
                        </RadioGroup>
                      </FormControl>
                      <div
                        style={{
                          width: "60%",
                          display: "inline-block",
                        }}
                      >
                        <p className="type-price" style={{ margin: "0" }}>
                          총 -<span>{optAgree(24)}</span>원
                        </p>
                        <p className="type-price" style={{ margin: "5px 0" }}>
                          총 -<span>{optAgree(12)}</span>원
                        </p>
                      </div>
                    </DetailInfo.DiscountPrice>
                  </DetailInfo.DiscountCard>
                </div>
              )}
              <p>할부기간</p>
              <Row justify="center">
                {installmentArr.map((row) => (
                  <InstallmentBtn month={row} key={row} />
                ))}
                <LGButton
                  style={{ width: "24%", margin: "0.5% 0.5%" }}
                  variant="primary"
                  children={more ? "접기" : "더 보기"}
                  onClick={() => setMore(!more)}
                />
              </Row>
            </div>
          </DetailInfo.PriceRow>
        </div>
      </DetailInfo.Container>
    );
  } else if (active.nav === "상품정보")
    return (
      <DetailInfo.Container
        style={{ display: "flex", flexDirection: "column" }}
      >
        {active.phone.phoneDesImgList.map((row) => (
          <DetailInfo.Spec key={row} src={row} alt="description-image" />
        ))}
        <table style={{ marginBottom: "100px" }}>
          <tbody>
            <tr>
              <DetailInfo.ImageCell
                children={
                  <img
                    src={active.color.phoneImgList[0]}
                    alt="phoneImg"
                    style={{ width: "270px", height: "270px" }}
                  />
                }
              />
              <DetailInfo.InfoCell>
                <table style={{ borderTop: "1px solid grey" }}>
                  <tbody>
                    {Object.keys(active.phone.phoneInfo)
                      .sort(
                        (a, b) => phoneInfoLabel(a).id - phoneInfoLabel(b).id
                      )
                      .filter((row) => phoneInfoLabel(row).name)
                      .map((row, i) => (
                        <DetailInfo.InfoTr key={row}>
                          <DetailInfo.HeaderCell
                            children={phoneInfoLabel(row).name}
                          />
                          <DetailInfo.SpecCell
                            children={returnStr(
                              row,
                              active.phone.phoneInfo[row]
                            )}
                          />
                        </DetailInfo.InfoTr>
                      ))}
                  </tbody>
                </table>
              </DetailInfo.InfoCell>
            </tr>
          </tbody>
        </table>
      </DetailInfo.Container>
    );
  else return <div style={{ width: "70%" }} />;
}
