import { useNavigate } from "react-router-dom";
import * as Bar from "../styles/barStyle";

export default function NavMap({ nowHover }) {
  const navigate = useNavigate();

  const mapData = [
    [
      { name: "5G 휴대폰", link: "/phone/telecom-tech/5G" },
      { name: "전체", link: "/phone/telecom-tech/5G" },
      { name: "삼성", link: "/phone/telecom-tech/5G/삼성" },
      { name: "애플", link: "/phone/telecom-tech/5G/애플" },
    ],
    [
      { name: "4G 휴대폰", link: "/phone/telecom-tech/4G" },
      { name: "전체", link: "/phone/telecom-tech/4G" },
      { name: "삼성", link: "/phone/telecom-tech/4G/삼성" },
      { name: "애플", link: "/phone/telecom-tech/4G/애플" },
    ],
    [
      { name: "유심", link: "" },
      { name: "유심가입", link: "" },
      { name: "친구추천", link: "" },
    ],
    [
      { name: "태블릿", link: "" },
      { name: "전체", link: "" },
      { name: "삼성", link: "" },
      { name: "애플", link: "" },
    ],
    [
      { name: "스마트워치", link: "" },
      { name: "전체", link: "" },
      { name: "삼성", link: "" },
      { name: "애플", link: "" },
    ],
    [
      { name: "노트북", link: "" },
      { name: "전체", link: "" },
    ],
    [
      { name: "중고/자급제폰", link: "" },
      { name: "전체", link: "" },
      { name: "삼성", link: "" },
      { name: "애플", link: "" },
    ],
    [
      { name: "액세서리", link: "" },
      { name: "전체", link: "" },
      { name: "U⁺굿즈", link: "" },
      { name: "스마트기기/기타", link: "" },
      { name: "음향/영상기기", link: "" },
      { name: "충전기기", link: "" },
      { name: "케이스/필름", link: "" },
      { name: "주변기기", link: "" },
    ],
  ];

  const onClick = (d) => {
    if (d.link !== "") {
      navigate(d.link);
    }
  };

  return (
    <Bar.NavMap nowHover={nowHover !== ""}>
      {mapData.map((row, i) => (
        <Bar.NavMapCategory key={i}>
          <ul>
            {row.map((d, j) =>
              j === 0 ? (
                <p children={d.name} onClick={() => onClick(d)} key={d.name} />
              ) : (
                <li children={d.name} onClick={() => onClick(d)} key={d.name} />
              )
            )}
          </ul>
        </Bar.NavMapCategory>
      ))}
    </Bar.NavMap>
  );
}
