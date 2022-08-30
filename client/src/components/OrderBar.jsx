import * as Bar from "../styles/barStyle";

export default function OrderBar({ active, setActive }) {
  const navArray = [
    { label: "예상 납부금액", link: "" },
    { label: "상품정보", link: "" },
    { label: "전문가 리뷰/구매후기", link: "" },
    { label: "상품 문의", link: "" },
    { label: "가입안내 및 유의사항", link: "" },
  ];

  const nowActive = (row) => setActive({ ...active, nav: row.label });

  return (
    <Bar.OrderContainer>
      {navArray.map((row) => {
        return (
          <Bar.OrderItem
            key={row.label}
            children={row.label}
            navId={row.label}
            active={active.nav}
            onClick={() => nowActive(row)}
          />
        );
      })}
    </Bar.OrderContainer>
  );
}
