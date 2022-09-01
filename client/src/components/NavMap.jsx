import { useNavigate } from "react-router-dom";
import * as Bar from "../styles/barStyle";

export default function NavMap({ nowHover }) {
  const navigate = useNavigate();

  const phoneMapData = [
    [
      { name: "5G 휴대폰", link: "/phone/5G" },
      { name: "전체", link: "/phone/5G" },
      { name: "삼성", link: "/phone/5G/삼성" },
      { name: "애플", link: "/phone/5G/애플" },
    ],
    [
      { name: "4G 휴대폰", link: "/phone/LTE" },
      { name: "전체", link: "/phone/LTE" },
      { name: "삼성", link: "/phone/LTE/삼성" },
      { name: "애플", link: "/phone/LTE/애플" },
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

  const planMapData = [
    [
      { name: "요금제", link: "" },
      { name: "5G", link: "" },
      { name: "LTE", link: "" },
      { name: "태블릿 및 스마트기기", link: "" },
      { name: "U⁺투게더 결합", link: "" },
    ],
    [
      { name: "카테고리팩", link: "" },
      { name: "5G", link: "" },
      { name: "LTE", link: "" },
    ],
    [
      { name: "다이렉트", link: "" },
      { name: "5G", link: "" },
      { name: "LTE", link: "" },
    ],
    [
      { name: "부가서비스", link: "" },
      { name: "전체", link: "" },
      { name: "5G", link: "" },
      { name: "데이터", link: "" },
      { name: "뮤직/영상", link: "" },
      { name: "통화/메시지", link: "" },
      { name: "생활편의", link: "" },
      { name: "안심/안전", link: "" },
    ],
    [
      { name: "해외로밍", link: "" },
      { name: "메인", link: "" },
      { name: "요금제 신청", link: "" },
      { name: "무료 부가서비스 신청", link: "" },
      { name: "국가별 음성/문자 요금", link: "" },
      { name: "이용방법 안내", link: "" },
      { name: "로밍센터 안내", link: "" },
      { name: "공지사항", link: "" },
      { name: "자주하는 질문", link: "" },
    ],
  ];

  const internetMapData = [
    [
      { name: "결합상품", link: "" },
      { name: "요금제", link: "" },
    ],
    [
      { name: "인터넷", link: "" },
      { name: "요금제", link: "" },
      { name: "부가서비스", link: "" },
    ],
    [
      { name: "IPTV", link: "" },
      { name: "요금제", link: "" },
      { name: "채널안내", link: "" },
      { name: "주요 서비스", link: "" },
      { name: "부가 서비스", link: "" },
      { name: "공지사항", link: "" },
    ],
    [
      { name: "스마트홈", link: "" },
      { name: "요금제", link: "" },
      { name: "스마트홈 기기", link: "" },
      { name: "스마트홈 소개", link: "" },
    ],
    [
      { name: "전화서비스", link: "" },
      { name: "요금제", link: "" },
      { name: "인터넷전화 부가서비스", link: "" },
      { name: "인터넷전화 기기", link: "" },
      { name: "수신자 부담전화", link: "" },
      { name: "국제전화 002", link: "" },
    ],
    [
      { name: "가입사은품", link: "" },
      { name: "전체", link: "" },
      { name: "상품권", link: "" },
      { name: "TV", link: "" },
      { name: "수신자 부담전화", link: "" },
      { name: "컴퓨터/주변기기", link: "" },
      { name: "주방/생활가전", link: "" },
      { name: "에어케어/에어컨", link: "" },
      { name: "키즈/펫용품", link: "" },
    ],
    [
      { name: "소상공인상품", link: "" },
      { name: "매장/사무실 인터넷", link: "" },
      { name: "매장/사무실 인터넷전화", link: "" },
      { name: "매장/사무실 지능형 CCTV", link: "" },
      { name: "매장/사무실 IPTV", link: "" },
      { name: "매장/사무실 패키지 상품", link: "" },
      { name: "소상공인상품 혜택", link: "" },
    ],
  ];

  const myPageMapData = [
    [{ name: "청구요금 및 납부", link: "" }],
    [
      { name: "가입정보", link: "" },
      { name: "내 가입정보 조회/변경", link: "" },
      { name: "요금제 조회/변경", link: "" },
      { name: "부가서비스 조회/변경", link: "" },
      { name: "서비스 일시정지/해제", link: "" },
      { name: "서비스 해지", link: "" },
      { name: "회원정보", link: "" },
    ],
    [
      { name: "주문관리", link: "" },
      { name: "가입신청 내역", link: "" },
      { name: "액세서리 주문내역", link: "" },
      { name: "사전예약 내역", link: "" },
      { name: "최근 본 상품", link: "" },
    ],
    [
      { name: "사용현황", link: "" },
      { name: "사용내역 조회", link: "" },
      { name: "휴대폰 소액결제", link: "" },
      { name: "해외로밍 사용량/요금조회", link: "" },
      { name: "자녀 요금조회", link: "" },
      { name: "시외전화 및 부가전화", link: "" },
    ],
    [
      { name: "데이터관리", link: "" },
      { name: "참 쉬운 가족 데이터", link: "" },
      { name: "데이터 주고받기", link: "" },
      { name: "데이터 2배 쿠폰", link: "" },
      { name: "데이터 2GB 쿠폰", link: "" },
      { name: "가족사랑 데이터", link: "" },
      { name: "링(홀) 요금제", link: "" },
    ],
    [
      { name: "활동관리", link: "" },
      { name: "1:1 문의내역", link: "" },
      { name: "상품 문의내역", link: "" },
      { name: "구매후기", link: "" },
      { name: "입고알림", link: "" },
    ],
    [
      { name: "멤버십", link: "" },
      { name: "멤버십 이용내역", link: "" },
      { name: "멤버십 변경내역", link: "" },
    ],
    [
      { name: "ez포인트", link: "" },
      { name: "ez포인트 안내", link: "" },
      { name: "ez포인트 조회", link: "" },
      { name: "ez포인트 사용", link: "" },
    ],
  ];

  const benefitMapData = [
    [
      { name: "이벤트", link: "" },
      { name: "진행중 이벤트", link: "" },
      { name: "선호번호 신청 이벤트", link: "" },
      { name: "당첨자 발표", link: "" },
    ],
    [
      { name: "멤버십", link: "" },
      { name: "멤버십 안내", link: "" },
      { name: "멤버십 혜택", link: "" },
      { name: "Thank U⁺", link: "" },
      { name: "공지사항", link: "" },
    ],
    [
      { name: "U⁺혜택", link: "" },
      { name: "온라인 구매 혜택", link: "" },
      { name: "장기고객 혜택", link: "" },
      { name: "중고폰 가격 보장", link: "" },
      { name: "중고폰 보상 신청", link: "" },
      { name: "요금 할인 혜택", link: "" },
    ],
    [
      { name: "결합할인 혜택", link: "" },
      { name: "결합할인 상품", link: "" },
    ],
    [
      { name: "제휴혜택", link: "" },
      { name: "제휴카드 할인", link: "" },
      { name: "포인트 할인", link: "" },
      { name: "제휴사 혜택", link: "" },
    ],
  ];

  const supportMapData = [
    [{ name: "매장안내", link: "" }],
    [
      { name: "온라인문의", link: "" },
      { name: "자주하는 질문", link: "" },
      { name: "1:1 문의", link: "" },
      { name: "칭찬합니다", link: "" },
      { name: "설치가능 지역조회", link: "" },
      { name: "통화품질 개선요청", link: "" },
      { name: "위치정보제공이력 열람신청", link: "" },
    ],
    [
      { name: "자가진단", link: "" },
      { name: "홈상품 설치장소 변경신청", link: "" },
      { name: "홈상품 간편 진단", link: "" },
      { name: "스스로 해결 가이드", link: "" },
      { name: "인터넷 속도 측정", link: "" },
      { name: "넷플릭스 서비스 조회", link: "" },
    ],
    [
      { name: "서비스 이용안내", link: "" },
      { name: "공지사항", link: "" },
      { name: "이용가이드", link: "" },
      { name: "필요 서류 안내", link: "" },
      { name: "이용자 피해 예방 가이드", link: "" },
      { name: "고객센터/ARS 안내", link: "" },
      { name: "국번관리", link: "" },
    ],
    [
      { name: "휴대폰 분실/파손", link: "" },
      { name: "분실 접수/해제", link: "" },
      { name: "분실폰 위치 찾기", link: "" },
      { name: "파손접수 및 수리", link: "" },
      { name: "임대폰 대여", link: "" },
      { name: "보험 보상받기", link: "" },
      { name: "기기 변경하기", link: "" },
    ],
  ];

  const mapDataArr = {
    "모바일 기기": phoneMapData,
    "모바일 요금제": planMapData,
    "인터넷/IPTV": internetMapData,
    마이페이지: myPageMapData,
    혜택: benefitMapData,
    고객지원: supportMapData,
  };

  const nowMapData = mapDataArr[nowHover] ?? [];

  const onClick = (d) => {
    if (d.link !== "") {
      navigate(d.link);
    }
  };

  return (
    <Bar.NavMap nowHover={nowHover !== ""}>
      {nowMapData.map((row, i) => (
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