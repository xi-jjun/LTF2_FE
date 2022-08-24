import { plan } from "../DummyData";
import { Row } from "../styles/gridStyle";
import { LGButton } from "./Button";
import * as DetailInfo from "../styles/detailInfoStyle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function DetailInfomation({ active, setActive }) {
  const nowActive = (key, value) => setActive({ ...active, [key]: value });

  if (active.nav === "예상 납부금액") {
    return (
      <DetailInfo.Container>
        <div>
          <DetailInfo.PriceRow>
            <div className="label">배송방법</div>
            <div className="content">
              <p>배송비는 무료입니다.</p>
              <LGButton
                variant={
                  active.ship === "우체국택배" ? "primary" : "outline-dark"
                }
                size="lg"
                rec
                onClick={() => nowActive("ship", "우체국택배")}
              >
                우체국택배
              </LGButton>
              <LGButton
                variant={
                  active.ship === "오늘 도착" ? "primary" : "outline-dark"
                }
                size="lg"
                rec
                onClick={() => nowActive("ship", "오늘 도착")}
              >
                오늘 도착
              </LGButton>
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
              <p>추천 요금제</p>
              {plan.map((row) => (
                <DetailInfo.PlanCard
                  key={row.name}
                  onClick={() => setActive({ ...active, plan: row })}
                >
                  <DetailInfo.PlanTitle>{row.name}</DetailInfo.PlanTitle>
                  <DetailInfo.PlanPrice>{`${row.month_price.toLocaleString()}원`}</DetailInfo.PlanPrice>
                  <DetailInfo.PlanDescription>
                    {`데이터 ${row.data}, 음성 ${row.voice}, ${
                      row.share_data ? "나눠쓰기 사용가능" : ""
                    }`}
                    <AddCircleOutlineIcon />
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
              <p>할인유형과 할부기간을 선택해주세요.</p>
            </div>
            <div className="content">
              <p>할인유형</p>
              <Row justify="center">
                <DetailInfo.DiscountCard left />
                <DetailInfo.DiscountCard />
              </Row>
              <p>할부기간</p>
              <Row justify="center">
                <LGButton
                  variant={
                    active.installment === 1 ? "primary" : "outline-dark"
                  }
                  onClick={() => nowActive("installment", 1)}
                >
                  카드/간편결제
                </LGButton>
                <LGButton
                  variant={
                    active.installment === 12 ? "primary" : "outline-dark"
                  }
                  onClick={() => nowActive("installment", 12)}
                >
                  12개월
                </LGButton>
                <LGButton
                  variant={
                    active.installment === 24 ? "primary" : "outline-dark"
                  }
                  onClick={() => nowActive("installment", 24)}
                >
                  24개월
                </LGButton>
                <LGButton
                  variant={
                    active.installment === 36 ? "primary" : "outline-dark"
                  }
                  onClick={() => nowActive("installment", 36)}
                >
                  36개월
                </LGButton>
              </Row>
            </div>
          </DetailInfo.PriceRow>
        </div>
      </DetailInfo.Container>
    );
  } else if (active.nav === "상품정보")
    return <DetailInfo.Container children={<DetailInfo.Spec />} />;
  else return <div />;
}
