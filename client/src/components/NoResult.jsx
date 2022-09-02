import * as Styled from "../styles/cartStyle";
import { LGButton } from "./Button";

export default function NoResult() {
  return (
    <div>
      <Styled.CartImgLayout>
        <Styled.CartAlertImg />
      </Styled.CartImgLayout>

      <Styled.CartLayout>
        <Styled.CartText>
          설정한 조건과 일치하는 상품이 없습니다.
        </Styled.CartText>
      </Styled.CartLayout>
      <Styled.MvMainBtnLayout>
        <LGButton size="lg" children="필터 초기화" />
      </Styled.MvMainBtnLayout>
    </div>
  );
}
