import { plan } from "../DummyData";
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

export default function DetailInfomation({ active, setActive }) {
  // active 요소 변경 함수
  const nowActive = (key, value) => setActive({ ...active, [key]: value });

  // 현재 선택된 할부인지
  const thisInstallment = (month) =>
    active.installment === month ? "primary" : "outline-dark";

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
      variant={active.ship === ship ? "primary" : "outline-dark"}
      size="lg"
      rec
      style={{ margin: "0px 0.5%", width: "49%" }}
      onClick={() => nowActive("ship", ship)}
    >
      {ship}
    </LGButton>
  );

  // 공시지원금 할인 요금
  const support = (active.supportPrice * 1.15).toLocaleString();

  // 선택약정 할인 요금
  const optAgree = (month) =>
    (active.plan.month_price * 0.25 * month).toLocaleString();

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
              <p style={{ display: "inline-block", float: "right" }}>
                추천 요금제
              </p>
              {plan.map((row) => (
                <DetailInfo.PlanCard
                  key={row.name}
                  onClick={() => setActive({ ...active, plan: row })}
                >
                  <DetailInfo.PlanTitle>{row.name}</DetailInfo.PlanTitle>
                  <DetailInfo.PlanPrice>{`${row.month_price.toLocaleString()}원`}</DetailInfo.PlanPrice>
                  <DetailInfo.PlanDescription>
                    <div>
                      <p>{`데이터 ${row.data}, 음성 ${row.voice}, ${
                        row.share_data ? "나눠쓰기 사용가능" : ""
                      }`}</p>
                    </div>
                    <div className="icon">
                      <AddCircleOutlineIcon />
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
              {active.discount === "무약정" ? (
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
                    active={active.discount === "공시지원금"}
                    onClick={() => nowActive("discount", "공시지원금")}
                  >
                    <p className="type">공시지원금</p>
                    <p className="type-description">휴대폰 가격 1회 할인</p>
                    <p className="type-price">
                      총 -<span>{support}</span>원
                    </p>
                  </DetailInfo.DiscountCard>
                  <DetailInfo.DiscountCard
                    disabled
                    active={active.discount.indexOf("선택약정") !== -1}
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
                          <FormControlLabel
                            value="선택약정24개월"
                            control={<Radio />}
                            label="24개월 할인"
                          />
                          <FormControlLabel
                            value="선택약정12개월"
                            control={<Radio />}
                            label="12개월 할인"
                          />
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
                <InstallmentBtn month={1} />
                <InstallmentBtn month={12} />
                <InstallmentBtn month={24} />
                <InstallmentBtn month={36} />
              </Row>
            </div>
          </DetailInfo.PriceRow>
        </div>
      </DetailInfo.Container>
    );
  } else if (active.nav === "상품정보")
    return <DetailInfo.Container children={<DetailInfo.Spec />} />;
  else return <div style={{ width: "70%" }} />;
}
