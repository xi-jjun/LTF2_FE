import React, { useState } from "react";
import * as Styled from "../styles/cartStyle";
import { LGButton } from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function CartProduct({ data, deleteCart }) {
  const [over, setOver] = useState(false);
  const navigate = useNavigate();

  const onDelBtnClick = () => {
    deleteCart(data.id);
  };

    const mvDetailPage = () => {
      const idList = {
        "planId": data.info.shoppingBasket.planId,
        "colorId": data.info.shoppingBasket.colorId
      }
      navigate(`/detail/${data.info.shoppingBasket.phoneId}`, {state: idList});

    }

  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  const actualPrice =
    data.info.shoppingBasket.phonePrice -
    (data.discount === -1 ? data.info.shoppingBasket.supportPrice : 0);
  const monthFee = 0.059 / 12;
  const monthPhonePrice =
    data.installment === 1
      ? actualPrice
      : Math.round(
          (actualPrice * monthFee * Math.pow(1 + monthFee, data.installment)) /
            (Math.pow(1 + monthFee, data.installment) - 1) /
            100
        ) * 100;
  const pricePerMonth =
    (data.installment === 1 ? 0 : monthPhonePrice) +
    data.info.shoppingBasket.planMonthPrice * (data.discount > 11 ? 0.75 : 1);

  return (
    <li style={{ borderTop: "1px solid #ddd" }}>
      <Styled.CartProductContainer>
        <Styled.CartProductContainerPThumb>
          <a
            href="#!"
            style={{ display: "block", cursor: "pointer" }}
            onClick={mvDetailPage}
          >
            <Styled.CartProductContainerPThumbImg
              src={data.info.shoppingBasket.phoneImgList[0]}
              alt=""
            />
          </a>
        </Styled.CartProductContainerPThumb>
        <Styled.CartProductContainerPProduct>
          <div>
            <Styled.CartProductContainerPProductData>
              {new Date(data.date).toLocaleDateString() +
                new Date(data.date).toLocaleTimeString() +
                " (" +
                WEEKDAY[new Date(data.date).getDay()] +
                ")"}
            </Styled.CartProductContainerPProductData>
            <Styled.CartProductContainerPProductTit>
              <a
                href="#!"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  verticalAlign: "middle",
                  cursor: "pointer",
                }}
                onClick={mvDetailPage}
              >
                {data.info.shoppingBasket.titleName}
              </a>
              <span style={{ marginLeft: 8 }}></span>
            </Styled.CartProductContainerPProductTit>
            <Styled.CartProductContainerPProductDesc>
              {data.info.shoppingBasket.planName}
              <span style={{ fontSize: 14 }}></span>
            </Styled.CartProductContainerPProductDesc>
            <div style={{ margin: 0, marginBottom: 6 }}>
              <Styled.OptionItemSpan>
                {data.info.shoppingBasket.colorName}
              </Styled.OptionItemSpan>
              <Styled.OptionItemLine />
              <Styled.OptionItemSpan>
                {data.info.shoppingBasket.memory}GB
              </Styled.OptionItemSpan>
              <Styled.OptionItemLine />

              {data.installment > 0 ? (
                <Styled.OptionItemSpan>
                  {data.installment}개월 할부
                </Styled.OptionItemSpan>
              ) : (
                <Styled.OptionItemSpan>일시불</Styled.OptionItemSpan>
              )}
              <Styled.OptionItemLine/>
              <Styled.OptionItemSpan>{data.ship}</Styled.OptionItemSpan>
            </div>
          </div>
        </Styled.CartProductContainerPProduct>
        <Styled.PDetailGroup>
          {
            data.discount > 0 ?
            <Styled.PDetailGroupItemInfo>
              선택약정 {data.discount}개월
            </Styled.PDetailGroupItemInfo>
            :
              data.discount === -1 ?  
              <Styled.PDetailGroupItemInfo>공시지원금</Styled.PDetailGroupItemInfo>
              :
              <Styled.PDetailGroupItemInfo>무약정</Styled.PDetailGroupItemInfo>
          }
            <Styled.PDetailGroupItemInfoLine/>
            <Styled.PDetailGroupItemInfo>
              {data.registration}
            </Styled.PDetailGroupItemInfo>
            <Styled.PDetailGroupItemInfoLine/>
            <Styled.PDetailGroupItemInfoDiv>
              <p style={{margin:0}}>월 예상 납부 금액</p>
              {
                data.discount > 1 ?
                <Styled.PDetailProductPrice>{pricePerMonth.toLocaleString()}원</Styled.PDetailProductPrice>
                :
                <Styled.PDetailProductPrice>{data.info.shoppingBasket.planMonthPrice.toLocaleString()}원</Styled.PDetailProductPrice>
              }
            </Styled.PDetailGroupItemInfoDiv>
          
          </Styled.PDetailGroup>
          <div>
            <div style={{position: "relative"}}
            onMouseEnter={() => {setOver(true)}}
            onMouseLeave={() => {setOver(false)}}>
                <LGButton variant="primary" size="lg" onClick={mvDetailPage}>
                    가입하기
                    <Styled.IsBlind>메뉴더보기</Styled.IsBlind>
                </LGButton>
              <Styled.COverflowMenu over={over}>
                <Styled.COverflowMenuLi><Styled.COverflowMenua href="#!" onClick={mvDetailPage}>온라인 주문</Styled.COverflowMenua></Styled.COverflowMenuLi>
                <Styled.COverflowMenuLi><Styled.COverflowMenua href="#!">전화 주문</Styled.COverflowMenua></Styled.COverflowMenuLi>
                <Styled.COverflowMenuLi><Styled.COverflowMenua href="#!">채팅 상담</Styled.COverflowMenua></Styled.COverflowMenuLi>
                <Styled.COverflowMenuLi><Styled.COverflowMenua href="#!">매장 방문 예약</Styled.COverflowMenua></Styled.COverflowMenuLi>
              </Styled.COverflowMenu>
            </div>
            <LGButton style={{marginTop:10}} variant="light" size="lg">
              비교하기
            </LGButton>
          </div>
        <Styled.ProductContainerBtnDel onClick={onDelBtnClick}>
          <Styled.IsBlind>상품삭제</Styled.IsBlind>
        </Styled.ProductContainerBtnDel>
      </Styled.CartProductContainer>
    </li>
  );
}