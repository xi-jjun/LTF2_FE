import { Row } from "../styles/gridStyle";
import { LGButton } from "./Button";
import { ColorDot } from "./ColorDot";
import * as PhoneInfo from "../styles/phoneInfoStyle";

export default function PhoneInfomation({ active, setActive, priceInfo }) {
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
    <Row justify="center">
      <PhoneInfo.ImgContainer>
        <PhoneInfo.ImageMain color={active.color} />
        <Row justify="center">
          <PhoneInfo.ImageSub color={active.color} />
          <PhoneInfo.ImageSub color={active.color} />
          <PhoneInfo.ImageSub color={active.color} />
          <PhoneInfo.ImageSub color={active.color} />
        </Row>
      </PhoneInfo.ImgContainer>
      <PhoneInfo.Container>
        <div className="phone-info">
          <PhoneInfo.Info>
            <h1>{active.phone.titleName}</h1>
            <h4>{`(${active.phone.model})`}</h4>
          </PhoneInfo.Info>
          <PhoneInfo.Info>
            #최적의화면비, #가벼워진무게, #멀티태스킹
          </PhoneInfo.Info>
          <PhoneInfo.Info>
            <h4 style={{ margin: "0 10px 0 0" }}>색상</h4>
            <p>{active.color.name}</p>
          </PhoneInfo.Info>
          <PhoneInfo.Info>
            {active.phone.colorList.map((row) => (
              <ColorDot
                key={row.hexCode}
                hexCode={row.hexCode}
                color={active.color}
                onClick={() => setActive({ ...active, color: row })}
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
            <h1>월 {priceInfo.total.toLocaleString()}원</h1>
            <p>{active.plan.name}, 무약정 요금제 기준</p>
            <p>휴대폰 {priceInfo.phone.toLocaleString()} 원</p>
            <p>통신료 {priceInfo.plan.toLocaleString()} 원</p>
            <p>정상가 {active.phone.price.toLocaleString()} 원</p>
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
  );
}
