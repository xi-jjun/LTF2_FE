import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Detail() {
  const sampleData = {
    title: "갤럭시 Z Flip 4",
    model: "SM-F721N",
    description: "#최적의화면비, #가벼워진무게, #멀티태스킹",
    color: ["보라 퍼플"],
  };

  const navArray = [
    { label: "모바일 기기", link: "" },
    { label: "모바일 요금제", link: "" },
    { label: "인터넷/IPTV", link: "" },
    { label: "마이페이지", link: "" },
    { label: "혜택", link: "" },
    { label: "고객지원", link: "" },
    { label: "유플일상", link: "" },
    { label: "유독", link: "" },
  ];

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
      <FirstRow>
        <MainImage />
        <PhoneDetail>
          <div className="phone-info">
            <div>
              <h1>{sampleData.title}</h1>
              <h4>{`(${sampleData.model})`}</h4>
            </div>
            <h4>{sampleData.description}</h4>
            <div>
              <h4>색상</h4>
              <p>{sampleData.color[0]}</p>
            </div>
            <div>
              <h4>색상</h4>
              <p>{sampleData.color[0]}</p>
            </div>
            <h4>저장공간</h4>
            <div>
              <Button variant="outlined">256GB</Button>
            </div>
            <p>{storageText("256GB")}</p>
          </div>
          <div className="phone-price">
            <h1>월 109,270원</h1>
            <p>(갤럭시워치5) 5G 다이렉트 65, 무약정 요금제 기준</p>
            <p>휴대폰 44,270 원</p>
            <p>통신료 65,000 원</p>
            <p>정상가 999,900 원</p>
          </div>
          <div>
            <Button variant="outlined">장바구니</Button>
            <Button variant="contained">온라인 주문</Button>
          </div>
        </PhoneDetail>
      </FirstRow>
      <OrderBar>
        {navArray.map((row) => {
          return <OrderItem key={row.label} children={row.label} />;
        })}
      </OrderBar>
      <div>
        <Price>
          <div className="label">배송방법</div>
          <div className="content">
            <p>배송비는 무료입니다.</p>
            <Button variant="outlined">우체국택배</Button>
            <Button variant="outlined">오늘 도착</Button>
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
          </div>
        </Price>
      </div>
    </div>
  );
}

const FirstRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const MainImage = styled.div`
  width: 700px;
  height: 200px;
  background-color: black;
  position: sticky;
  top: 0;
`;

const PhoneDetail = styled.div`
  width: 500px;
  padding: 50px 20px;

  h1,
  h2,
  h4,
  p {
    margin: 0;
  }

  .phone-info {
    h2,
    h4,
    p {
      display: inline-block;
    }

    h1 {
      margin: 0px 5px 0px 0px;
      display: inline-block;
    }

    Button {
      margin: 10px 0px;
      padding: 10px 80px;
    }
  }

  .phone-price {
    padding: 10px 30px;
    border-radius: 10px;
    background-color: lightgrey;
  }
`;

const OrderBar = styled.div`
  text-align: left;
  display: flex;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  width: 100%;
  min-width: 1000px;
  overflow: hidden;
`;

const OrderItem = styled.div`
  margin: 0px 25px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: large;

  &:hover {
    color: #e6007e;
  }
`;

const Price = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0px 0px 80px 0px;

  div {
    display: inline-block;
    box-sizing: border-box;
  }

  .label {
    width: 20%;
    font-weight: bold;
    font-size: large;
    vertical-align: top;
    padding: 15px 10px;
  }
  .content {
    width: 80%;
  }
`;
