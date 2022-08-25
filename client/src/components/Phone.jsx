import React from "react";
import * as Styles from "../styles/phoneStyle";
import { LGButton } from "./Button";

export default function Phone({ phone }) {
  return (
    <Styles.CardLayout>
      <Styles.CardHeader>
        <Styles.ImageLayout>
          <Styles.Image src={phone.image_link} />
          <Styles.ColorList>
            {phone.product_colors.map((color, idx) => (
              <Styles.Color
                key={idx}
                title={color.color_name}
                background={color.hex_value}
              />
            ))}
          </Styles.ColorList>
        </Styles.ImageLayout>
        <Styles.Title>{phone.name}</Styles.Title>
        <Styles.SubTitle>
          {/* 대표 요금제 이름 */}
          (갤럭시 워치5) 5G 다이렉트 65
        </Styles.SubTitle>
      </Styles.CardHeader>
      <Styles.CardBody>
        <Styles.PlanLayout>
          <Styles.PhoneMoney>
            {/* 월 핸드폰 납부 금액 */}
            휴대폰 월65,260원
          </Styles.PhoneMoney>
          <Styles.PlanMoney>
            {/* 월 요금 납부 금액 */}
            통신료 월65,000원
          </Styles.PlanMoney>
          <Styles.TotalMoney>
            {/* 월 총 납부 금액 */}월 130,260원
          </Styles.TotalMoney>
        </Styles.PlanLayout>
      </Styles.CardBody>
      <Styles.CardFooter>
        <Styles.OrderNumber>
          {/* 총 구매자 */}
          구매 1,234명
        </Styles.OrderNumber>
        <Styles.CompareButton>
          <LGButton variant="light" size="sm">
            비교하기
          </LGButton>
          <Styles.CartButton/>
        </Styles.CompareButton>
      </Styles.CardFooter>
    </Styles.CardLayout>
  );
}
