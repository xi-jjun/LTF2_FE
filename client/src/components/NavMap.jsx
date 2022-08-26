import * as Bar from "../styles/barStyle";

export default function NavMap({ nowHover }) {
  const mapData = [
    ["5G 휴대폰", "전체", "삼성", "Apple"],
    ["4G 휴대폰", "전체", "삼성", "Apple"],
    ["유심", "유심가입", "친구추천"],
    ["태블릿", "전체", "삼성", "Apple"],
    ["스마트워치", "전체", "삼성", "Apple"],
    ["노트북", "전체"],
    ["중고/자급제폰", "중고폰", "자급제폰"],
    [
      "액세서리",
      "전체",
      "U⁺굿즈",
      "스마트기기/기타",
      "음향/영상기기",
      "충전기기",
      "케이스/필름",
      "주변기기",
    ],
  ];
  return (
    <Bar.NavMap nowHover={nowHover !== ""}>
      {mapData.map((row, i) => (
        <Bar.NavMapCategory key={i}>
          <ul>
            {row.map((d, j) =>
              j === 0 ? <p children={d} /> : <li children={d} />
            )}
          </ul>
        </Bar.NavMapCategory>
      ))}
    </Bar.NavMap>
  );
}
