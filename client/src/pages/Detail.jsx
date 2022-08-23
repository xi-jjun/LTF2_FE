import React, { useState } from "react";
import * as PlanCard from "../css/PlanCard";
import * as PhoneInfo from "../css/PhoneInfo";
import { ColorDot } from "../components/ColorDot";
import {
  Row,
  OrderBar,
  OrderItem,
  Price,
  DetailInfoContainer,
  PhoneDescription,
  SideBar,
  DiscountCard,
  SideLabel,
} from "./Detailcss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { LGButton } from "../components/Button";
import { plan } from "../DummyData";

export default function Detail() {
  const sampleData = {
    title: "갤럭시 Z Flip 4",
    model: "SM-F721N",
    description: "#최적의화면비, #가벼워진무게, #멀티태스킹",
    color: [
      { name: "보라 퍼플", hex: "purple" },
      { name: "핑크 골드", hex: "pink" },
      { name: "블루", hex: "blue" },
      { name: "그라파이트", hex: "black" },
    ],
  };

  const navArray = [
    { label: "예상 납부금액", link: "" },
    { label: "상품정보", link: "" },
    { label: "전문가 리뷰/구매후기", link: "" },
    { label: "상품 문의", link: "" },
    { label: "가입안내 및 유의사항", link: "" },
  ];

  const [active, setActive] = useState("예상 납부금액");
  const [activeColor, setActiveColor] = useState(sampleData.color[0]);

  const nowActive = (row) => {
    setActive(row.label);
  };

  const storageText = (storage) => {
    switch (storage) {
      case "256GB":
        return `자유롭게 쓸 수 있어요. 사진, 음악, 영화와 떨어질 수 없다면! 
      사진은 약 51,200장, 영화는 약 320편을 저장할 수 있어요.`;
      case "512GB":
        return `512`;
      default:
        return "";
    }
  };

  return (
    <div>
      <Row justify="center">
        <PhoneInfo.ImgContainer>
          <PhoneInfo.ImageMain activeColor={activeColor} />
          <Row justify="center">
            <PhoneInfo.ImageSub activeColor={activeColor} />
            <PhoneInfo.ImageSub activeColor={activeColor} />
            <PhoneInfo.ImageSub activeColor={activeColor} />
            <PhoneInfo.ImageSub activeColor={activeColor} />
          </Row>
        </PhoneInfo.ImgContainer>
        <PhoneInfo.Container>
          <div className="phone-info">
            <PhoneInfo.Info>
              <h1>{sampleData.title}</h1>
              <h4>{`(${sampleData.model})`}</h4>
            </PhoneInfo.Info>
            <PhoneInfo.Info>{sampleData.description}</PhoneInfo.Info>
            <PhoneInfo.Info>
              <h4 style={{ margin: "0 10px 0 0" }}>색상</h4>
              <p>{activeColor.name}</p>
            </PhoneInfo.Info>
            <PhoneInfo.Info>
              {sampleData.color.map((row) => (
                <ColorDot
                  key={row.hex}
                  hex={row.hex}
                  activeColor={activeColor}
                  onClick={() => setActiveColor(row)}
                />
              ))}
            </PhoneInfo.Info>
            <PhoneInfo.Info>저장공간</PhoneInfo.Info>
            <Row justify="left">
              <LGButton variant="outline-dark" size="lg" rec>
                256GB
              </LGButton>
            </Row>
            <PhoneInfo.Info>{storageText("256GB")}</PhoneInfo.Info>

            <PhoneInfo.Price>
              <h1>월 109,270원</h1>
              <p>(갤럭시워치5) 5G 다이렉트 65, 무약정 요금제 기준</p>
              <p>휴대폰 44,270 원</p>
              <p>통신료 65,000 원</p>
              <p>정상가 999,900 원</p>
            </PhoneInfo.Price>
            <PhoneInfo.Info>
              <Row justify="center">
                <LGButton variant="outline-dark" size="lg">
                  장바구니
                </LGButton>
                <LGButton variant="primary" size="lg">
                  온라인 주문
                </LGButton>
              </Row>
            </PhoneInfo.Info>
          </div>
        </PhoneInfo.Container>
      </Row>
      <OrderBar>
        {navArray.map((row) => {
          return (
            <OrderItem
              key={row.label}
              children={row.label}
              navId={row.label}
              active={active}
              onClick={() => nowActive(row)}
            />
          );
        })}
      </OrderBar>
      <Row justify="center">
        <DetailInfoContainer>
          <DetailInfo active={active} />
        </DetailInfoContainer>
        <SideBar>
          <h2>{sampleData.title}</h2>
          <p>{`${sampleData.color[0].name} | 256GB`}</p>
          <hr />
          <h4>최종 결제금액 계산</h4>
          <SideLabel>
            <h4>월 휴대폰 할부금</h4>
            <h4>59,900 원</h4>
          </SideLabel>
          <p>{`정상가 1,353,000 원`}</p>
          <p>{`실구매가 1,353,000 원`}</p>
          <p>{`할부 개월수 24개월`}</p>
          <p>{`할부수수료 (연 5.9%) 24개월`}</p>
          <hr />
          <h4>{`월 통신료 65,000 원`}</h4>
          <p>{`(갤럭시워치5) 5G 다이렉트 65 65,000 원`}</p>
          <hr />
          <h4>{`월 납부금액 124,900 원`}</h4>
          <LGButton variant="primary" size="lg">
            온라인 주문
          </LGButton>
          <LGButton variant="outline-dark" size="lg">
            장바구니
          </LGButton>
        </SideBar>
      </Row>
    </div>
  );
}

const DetailInfo = ({ active }) => {
  if (active === "예상 납부금액") {
    return (
      <div>
        <Price>
          <div className="label">배송방법</div>
          <div className="content">
            <p>배송비는 무료입니다.</p>
            <LGButton variant="outline-dark" size="lg" rec>
              우체국택배
            </LGButton>
            <LGButton variant="outline-dark" size="lg" rec>
              오늘 도착
            </LGButton>
            <li>
              평일 오후 4시까지 신청하면 다음 날 받을 수 있습니다. 도서, 산간
              지역은 2일 정도 걸립니다.
            </li>
            <li>주말 및 공휴일에는 배송 업무를 쉽니다.</li>
          </div>
        </Price>
        <Price>
          <div className="label">요금제</div>
          <div className="content">
            <p>추천 요금제</p>
            {plan.map((row) => (
              <PlanCard.Container key={row.name}>
                <PlanCard.Title>{row.name}</PlanCard.Title>
                <PlanCard.Price>{`${row.month_price.toLocaleString()}원`}</PlanCard.Price>
                <PlanCard.Description>
                  {`데이터 ${row.data}, 음성 ${row.voice}, ${
                    row.share_data ? "나눠쓰기 사용가능" : ""
                  }`}
                  <AddCircleOutlineIcon />
                </PlanCard.Description>
              </PlanCard.Container>
            ))}
          </div>
        </Price>
        <Price>
          <div className="label">
            할인유형
            <br />
            할부기간
            <p>할인유형과 할부기간을 선택해주세요.</p>
          </div>
          <div className="content">
            <Row justify="center">
              <DiscountCard left></DiscountCard>
              <DiscountCard></DiscountCard>
            </Row>
          </div>
        </Price>
      </div>
    );
  } else if (active === "상품정보") return <PhoneDescription />;
  else return <div></div>;
};
