import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAirbnb, // 에어비앤비(전체)
  faFortAwesome, // 캐슬
  faBuromobelexperte, // 속세를 벗어난 숙소
} from "@fortawesome/free-brands-svg-icons";

import {
  faFire, // 인기 급상승
  faMountainSun, // 국립공원
  faCow, // 농장
  faWheatAwn, // 한적한 시골
  faWarehouse, // 통나무집
  faDoorClosed, // 방
  faPersonSwimming, // 해변 근처
  faVihara, // 한옥
  faWaterLadder, // 멋진 수영장
  faEye, // 최고의 전망
  faBinoculars, // 캠핑장
  faPersonSkiingNordic, // 스키
  faGhost, // 기상천외한 숙소
  faHouseFloodWater, // 해변 바로 앞
  faPalette, // 창작 공간
  faToriiGate, // 료칸
  faArrowUpFromWaterPump, // 호수근처
  faPaintbrush, // 디자인
  faUmbrellaBeach, // 열대 지역
  faDungeon, // 동굴
  faIgloo, // 북극
  faChampagneGlasses, // 와인농장
  faFolderPlus, // 신규
  faFan, // 풍차
  faTreeCity, // 트리하우스
  faMugHot, // B&B
  faPersonShelter, // 돔하우스
  faSailboat, // 보트
  faArchway, // 키클라데스 주택
  faChessRook, // 유서 깊은 주택
  faFlag, // 세상의 꼭대기
  faCampground, // A자형 주택
  faPlaceOfWorship, // 저택
  faBellConcierge, // Luxe
  faWater, // 호숫가
  faLifeRing, // 섬
  faBuildingColumns, // 상징적 도시
  faChildren, // 키즈
  faVanShuttle, // 캠핑카
  faPersonSnowboarding, // 서핑
  faGolfBallTee, // 골프장
  faStore, // 복토 주택
  faUtensils, // 전문가급 주방
  faTents, // 유르트
  faSynagogue, // 민수
  faPersonSkiing, // 스키 타고 출입
  faHouseChimneyWindow, // 카사 파르티쿨라르
  faCaravan, // 마차
  faTrailer, // 컨테이너하우스
  faMusic, // 그랜드 피아노
  faTowerObservation, // 타워
  faHatCowboy, // 사막
  faShop, // 헛간
  faShip, // 하우스보트
  faWheelchairMove, // 무장애
  faHouse, // 담무소
  faMosque, // 리아드
  faGopuram, // 트룰로
} from "@fortawesome/free-solid-svg-icons";

const HeaderCategoryItemData = [
  {
    text: "전체보기",
    icon: <FontAwesomeIcon icon={faAirbnb} />,
  },
  {
    text: "인기 급상승",
    icon: <FontAwesomeIcon icon={faFire} />,
  },
  {
    text: "국립공원",
    icon: <FontAwesomeIcon icon={faMountainSun} />,
  },
  {
    text: "농장",
    icon: <FontAwesomeIcon icon={faCow} />,
  },
  {
    text: "한적한 시골",
    icon: <FontAwesomeIcon icon={faWheatAwn} />,
  },
  {
    text: "통나무집",
    icon: <FontAwesomeIcon icon={faWarehouse} />,
  },
  {
    text: "방",
    icon: <FontAwesomeIcon icon={faDoorClosed} />,
  },
  {
    text: "해변 근처",
    icon: <FontAwesomeIcon icon={faPersonSwimming} />,
  },
  {
    text: "한옥",
    icon: <FontAwesomeIcon icon={faVihara} />,
  },
  {
    text: "멋진 수영장",
    icon: <FontAwesomeIcon icon={faWaterLadder} />,
  },
  {
    text: "최고의 전망",
    icon: <FontAwesomeIcon icon={faEye} />,
  },
  {
    text: "캠핑장",
    icon: <FontAwesomeIcon icon={faBinoculars} />,
  },
  {
    text: "스키",
    icon: <FontAwesomeIcon icon={faPersonSkiingNordic} />,
  },
  {
    text: "캐슬",
    icon: <FontAwesomeIcon icon={faFortAwesome} />,
  },
  {
    text: "기상천외한 숙소",
    icon: <FontAwesomeIcon icon={faGhost} />,
  },
  {
    text: "해변 바로 앞",
    icon: <FontAwesomeIcon icon={faHouseFloodWater} />,
  },
  {
    text: "창작 공간",
    icon: <FontAwesomeIcon icon={faPalette} />,
  },
  {
    text: "속세를 벗어난 숙소",
    icon: <FontAwesomeIcon icon={faBuromobelexperte} />,
  },
  {
    text: "료칸",
    icon: <FontAwesomeIcon icon={faToriiGate} />,
  },
  {
    text: "호수근처",
    icon: <FontAwesomeIcon icon={faArrowUpFromWaterPump} />,
  },
  {
    text: "디자인",
    icon: <FontAwesomeIcon icon={faPaintbrush} />,
  },
  {
    text: "열대 지역",
    icon: <FontAwesomeIcon icon={faUmbrellaBeach} />,
  },
  {
    text: "동굴",
    icon: <FontAwesomeIcon icon={faDungeon} />,
  },
  {
    text: "북극",
    icon: <FontAwesomeIcon icon={faIgloo} />,
  },
  {
    text: "와인농장",
    icon: <FontAwesomeIcon icon={faChampagneGlasses} />,
  },
  {
    text: "신규",
    icon: <FontAwesomeIcon icon={faFolderPlus} />,
  },
  {
    text: "풍차",
    icon: <FontAwesomeIcon icon={faFan} />,
  },
  {
    text: "트리하우스",
    icon: <FontAwesomeIcon icon={faTreeCity} />,
  },
  {
    text: "B&B",
    icon: <FontAwesomeIcon icon={faMugHot} />,
  },
  {
    text: "돔하우스",
    icon: <FontAwesomeIcon icon={faPersonShelter} />,
  },
  {
    text: "보트",
    icon: <FontAwesomeIcon icon={faSailboat} />,
  },
  {
    text: "키클라데스 주택",
    icon: <FontAwesomeIcon icon={faArchway} />,
  },
  {
    text: "유서 깊은 주택",
    icon: <FontAwesomeIcon icon={faChessRook} />,
  },
  {
    text: "세상의 꼭대기",
    icon: <FontAwesomeIcon icon={faFlag} />,
  },
  {
    text: "A자형 주택",
    icon: <FontAwesomeIcon icon={faCampground} />,
  },
  {
    text: "저택",
    icon: <FontAwesomeIcon icon={faPlaceOfWorship} />,
  },
  {
    text: "Luxe",
    icon: <FontAwesomeIcon icon={faBellConcierge} />,
  },
  {
    text: "호숫가",
    icon: <FontAwesomeIcon icon={faWater} />,
  },
  {
    text: "섬",
    icon: <FontAwesomeIcon icon={faLifeRing} />,
  },
  {
    text: "상징적 도시",
    icon: <FontAwesomeIcon icon={faBuildingColumns} />,
  },
  {
    text: "키즈",
    icon: <FontAwesomeIcon icon={faChildren} />,
  },
  {
    text: "캠핑카",
    icon: <FontAwesomeIcon icon={faVanShuttle} />,
  },
  {
    text: "서핑",
    icon: <FontAwesomeIcon icon={faPersonSnowboarding} />,
  },
  {
    text: "골프장",
    icon: <FontAwesomeIcon icon={faGolfBallTee} />,
  },
  {
    text: "복토 주택",
    icon: <FontAwesomeIcon icon={faStore} />,
  },
  {
    text: "전문가급 주방",
    icon: <FontAwesomeIcon icon={faUtensils} />,
  },
  {
    text: "유르트",
    icon: <FontAwesomeIcon icon={faTents} />,
  },
  {
    text: "민수",
    icon: <FontAwesomeIcon icon={faSynagogue} />,
  },
  {
    text: "스키 타고 출입",
    icon: <FontAwesomeIcon icon={faPersonSkiing} />,
  },
  {
    text: "카사 파르티쿨라르",
    icon: <FontAwesomeIcon icon={faHouseChimneyWindow} />,
  },
  {
    text: "마차",
    icon: <FontAwesomeIcon icon={faCaravan} />,
  },
  {
    text: "컨테이너하우스",
    icon: <FontAwesomeIcon icon={faTrailer} />,
  },
  {
    text: "그랜드 피아노",
    icon: <FontAwesomeIcon icon={faMusic} />,
  },
  {
    text: "타워",
    icon: <FontAwesomeIcon icon={faTowerObservation} />,
  },
  {
    text: "사막",
    icon: <FontAwesomeIcon icon={faHatCowboy} />,
  },
  {
    text: "헛간",
    icon: <FontAwesomeIcon icon={faShop} />,
  },
  {
    text: "하우스보트",
    icon: <FontAwesomeIcon icon={faShip} />,
  },
  {
    text: "무장애",
    icon: <FontAwesomeIcon icon={faWheelchairMove} />,
  },
  {
    text: "담무소",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    text: "리아드",
    icon: <FontAwesomeIcon icon={faMosque} />,
  },
  {
    text: "트룰로",
    icon: <FontAwesomeIcon icon={faGopuram} />,
  },
];

export default HeaderCategoryItemData;
