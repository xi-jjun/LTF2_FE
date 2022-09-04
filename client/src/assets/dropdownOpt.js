export const dropdownOpt = (extra) => ({
  registration: [
    { value: "번호이동", label: "번호이동" },
    { value: "기기변경", label: "기기변경" },
    { value: "신규가입", label: "신규가입" },
  ],
  installment: [
    { value: 1, label: "완납결제" },
    { value: 3, label: "3개월" },
    { value: 6, label: "6개월" },
    { value: 9, label: "9개월" },
    { value: 10, label: "10개월" },
    { value: 12, label: "12개월" },
    { value: 24, label: "24개월" },
    { value: 30, label: "30개월" },
    { value: 36, label: "36개월" },
    { value: 48, label: "48개월" },
  ],
  discount:
    extra === "다이렉트"
      ? [{ value: 0, label: "무약정" }]
      : [
          { value: -1, label: "공시지원금" },
          { value: 24, label: "선택약정24개월" },
          { value: 12, label: "선택약정12개월" },
        ],
  telecomTech: [
    { value: "5G", label: "5G" },
    { value: "LTE", label: "LTE" },
  ],
  manufacturingCompany: [
    { value: "전체", label: "전체" },
    { value: "삼성", label: "삼성" },
    { value: "애플", label: "애플" },
    { value: "기타", label: "기타" },
  ],
});
