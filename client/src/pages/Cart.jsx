import React, { useEffect, useState } from "react";
import { PageContainer } from "../components/PageContainer";
import TitleSection from "../components/TitleSection";
import CartBar from "../components/CartBar";
import * as Styled from "../styles/cartStyle";
import CartProduct from "../components/CartProduct";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { LGButton } from "../components/Button";
import { useCookies } from "react-cookie";

export default function Cart({ cart, deleteCart }) {
  const [active, setActive] = useState({
    nav: "통신상품",
    item: "전체",
  });

  const onClickTab = (value) => {
    setActive({
      ...active,
      item: value,
    });
  };

  useEffect(() => {
    setActive({
      nav: "통신상품",
      item: "전체",
    });
  }, []);

  return (
    <PageContainer>
      <div style={{ margin: 0, padding: 0 }}>
        <TitleSection></TitleSection>
        <div style={{ textAlign: "center" }}>
          <CartBar active={active} setActive={setActive} />

          <div>
            {active.nav === "통신상품" && cart.data.length >= 1 ? (
              <div>
                <Styled.CartTabMenuUl>
                  <LGButton
                    variant={
                      active.item === "전체"
                        ? "outline-primary"
                        : "outline-dark"
                    }
                    children={`전체 (2)`}
                    onClick={() => onClickTab("전체")}
                    style={{ marginRight: 10 }}
                  />
                  <LGButton
                    variant={
                      active.item === "모바일기기"
                        ? "outline-primary"
                        : "outline-dark"
                    }
                    children={`모바일기기 (2)`}
                    onClick={() => onClickTab("모바일기기")}
                    style={{ marginRight: 10 }}
                  />
                  <LGButton
                    variant={
                      active.item === "모바일요금제"
                        ? "outline-primary"
                        : "outline-dark"
                    }
                    children={`모바일요금제 (0)`}
                    onClick={() => onClickTab("모바일요금제")}
                    style={{ marginRight: 10 }}
                  />
                  <LGButton
                    variant={
                      active.item === "인터넷/IPTV"
                        ? "outline-primary"
                        : "outline-dark"
                    }
                    children={`인터넷/IPTV (0)`}
                    onClick={() => onClickTab("인터넷/IPTV")}
                    style={{ marginRight: 10 }}
                  />
                </Styled.CartTabMenuUl>

                {active.item === "모바일기기" ||
                (active.item === "전체" && cart.data.length >= 1) ? (
                  <div style={{ marginTop: 40 }}>
                    <Styled.CartProductTbl>
                      <Styled.CartProductTblTitle>
                        <p style={{ fontSize: 24, fontWeight: 700 }}>
                          모바일기기
                          <Styled.CartProductEm> (2)</Styled.CartProductEm>
                        </p>
                      </Styled.CartProductTblTitle>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                        {cart.data.map((c) => (
                          <CartProduct
                            key={c.id}
                            data={c}
                            deleteCart={deleteCart}
                          ></CartProduct>
                        ))}
                      </ul>
                    </Styled.CartProductTbl>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div>
                <Styled.CartImgLayout>
                  <Styled.CartAlertImg />
                </Styled.CartImgLayout>

                <Styled.CartLayout>
                  <Styled.CartText>
                    장바구니에 담은 상품이 없습니다.
                  </Styled.CartText>
                </Styled.CartLayout>
                <Styled.MvMainBtnLayout>
                  <LGButton
                    size="lg"
                    variant="outline-dark"
                    children="메인 페이지로 이동"
                  />
                </Styled.MvMainBtnLayout>
              </div>
            )}

            <div style={{ marginTop: 80 }}>
              <Styled.CartNoticeDl>
                <Styled.CartNoticeDt>
                  <Styled.CartNoticeImg>
                    <ErrorOutlineIcon />
                  </Styled.CartNoticeImg>
                  이용안내
                </Styled.CartNoticeDt>
                <dd>
                  <ul>
                    <Styled.CartNoticeLi>
                      장바구니 저장된 상품은 최대 90일까지 보관 가능합니다.
                    </Styled.CartNoticeLi>
                    <Styled.CartNoticeLi>
                      장바구니 저장된 상품의 지원금 및 정상가 등의 금액이 변경될
                      경우, 페이지 접근 시 최신 금액으로 자동 업데이트됩니다.
                    </Styled.CartNoticeLi>
                    <Styled.CartNoticeLi>
                      장바구니 저장된 상품은 지원금 및 정책 변경의 사유로
                      수정/삭제될 수 있습니다.
                    </Styled.CartNoticeLi>
                  </ul>
                </dd>
              </Styled.CartNoticeDl>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
