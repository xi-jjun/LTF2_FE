import React, { useState } from "react";
import * as Styled from "../styles/cartStyle";
import { LGButton } from "../components/Button";

export default function CartProduct() {
    const [over, setOver] = useState(false)

    return (
        <li style={{borderTop : "1px solid #ddd"}}>
        <Styled.CartProductContainer>
          <Styled.CartProductContainerPThumb>
            <a style={{display:"block"}} href="">
              <Styled.CartProductContainerPThumbImg src="https://image.lguplus.com/static/pc-contents/images/prdv/20220729-094006-249-ebTNQ9k6.jpg" alt="" />
            </a>
          </Styled.CartProductContainerPThumb>
          <Styled.CartProductContainerPProduct>
            <div>
              <Styled.CartProductContainerPProductData>2022년 8월 24일 (수)</Styled.CartProductContainerPProductData>
              <Styled.CartProductContainerPProductTit>
                <a style={{textDecoration: "none", color: "inherit", verticalAlign: "middle"}} href="">갤럭시 A33 5G</a>
                <span style={{marginLeft: 8}}></span>
                </Styled.CartProductContainerPProductTit>
              <Styled.CartProductContainerPProductDesc>
                5G 심플+<span style={{fontSize: 14}}></span>
              </Styled.CartProductContainerPProductDesc>
              <p style={{margin: 0, marginBottom:6}}>
                <Styled.OptionItemSpan>어썸블루</Styled.OptionItemSpan><Styled.OptionItemLine></Styled.OptionItemLine>
                <Styled.OptionItemSpan>128GB</Styled.OptionItemSpan><Styled.OptionItemLine></Styled.OptionItemLine>
                <Styled.OptionItemSpan>24개월 할부</Styled.OptionItemSpan>
              </p>
              <Styled.ProductNotice>
              온라인 주문을 하시려면 추가 정보가 필요합니다. <br />
              상품페이지에서 요금제, 사은품 등 선택을 완료해 주세요.
              </Styled.ProductNotice>
            </div>
          </Styled.CartProductContainerPProduct>
          <Styled.PDetailGroup>
            <Styled.PDetailGroupItemInfo>
              선택약정24개월
            </Styled.PDetailGroupItemInfo>
            <Styled.PDetailGroupItemInfoLine></Styled.PDetailGroupItemInfoLine>
            <Styled.PDetailGroupItemInfo>
              기기변경
            </Styled.PDetailGroupItemInfo>
            <Styled.PDetailGroupItemInfoLine></Styled.PDetailGroupItemInfoLine>
            <Styled.PDetailGroupItemInfoDiv>
              <p style={{margin:0}}>월 예상 납부 금액</p>
              <Styled.PDetailProductPrice>67,860원</Styled.PDetailProductPrice>
            </Styled.PDetailGroupItemInfoDiv>
          </Styled.PDetailGroup>
          <div>
            <div style={{position: "relative"}}
            onMouseEnter={() => {setOver(true)}}
            onMouseLeave={() => {setOver(false)}}>
                <LGButton variant="primary" size="lg">
                    가입하기
                    <Styled.IsBlind>메뉴더보기</Styled.IsBlind>
                </LGButton>
              <Styled.COverflowMenu over={over}>
                <Styled.COverflowMenuLi><Styled.COverflowMenua href="">온라인 주문</Styled.COverflowMenua></Styled.COverflowMenuLi>
                <Styled.COverflowMenuLi><Styled.COverflowMenua href="">전화 주문</Styled.COverflowMenua></Styled.COverflowMenuLi>
                <Styled.COverflowMenuLi><Styled.COverflowMenua href="">채팅 상담</Styled.COverflowMenua></Styled.COverflowMenuLi>
                <Styled.COverflowMenuLi><Styled.COverflowMenua href="">매장 방문 예약</Styled.COverflowMenua></Styled.COverflowMenuLi>
              </Styled.COverflowMenu>
            </div>
            <LGButton style={{marginTop:10}} variant="light" size="lg">
              비교하기
            </LGButton>
          </div>
          <Styled.ProductContainerBtnDel>
            <Styled.IsBlind>상품삭제</Styled.IsBlind>
          </Styled.ProductContainerBtnDel>
        </Styled.CartProductContainer>
      </li>
    );
}