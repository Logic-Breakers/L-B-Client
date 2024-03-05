import HeaderCategoryItem from "./HeaderCategoryItem";
import ScrollArrowBtn from "@/components/Buttons/ScrollArrowBtn";
import FilterBtn from "@/components/Header/Nav/FilterBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
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

// 메인페이지 헤더 하단에 있는 여러 카테고리들과 필터버튼
export default function HeaderCategory() {
  return (
    <section className="bnb_xl:px-[80px] px-[40px] border-t-[1px] border-solid border-[#eeeeee] pt-3 flex flex-row justify-between items-center space-x-4">
      {/* 카테고리 아이템들 */}
      <section className="overflow-x-scroll scrollbar-hide flex flex-row space-x-6">
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faFire} />}
          text={"인기 급상승"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faMountainSun} />}
          text={"국립공원"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faCow} />}
          text={"농장"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faWheatAwn} />}
          text={"한적한 시골"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faWarehouse} />}
          text={"통나무집"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faDoorClosed} />}
          text={"방"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faPersonSwimming} />}
          text={"해변 근처"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faVihara} />}
          text={"한옥"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faWaterLadder} />}
          text={"멋진 수영장"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faEye} />}
          text={"최고의 전망"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faBinoculars} />}
          text={"캠핑장"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faPersonSkiingNordic} />}
          text={"스키"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faFortAwesome} />}
          text={"캐슬"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faGhost} />}
          text={"기상천외한 숙소"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faHouseFloodWater} />}
          text={"해변 바로 앞"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faPalette} />}
          text={"창작 공간"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faBuromobelexperte} />}
          text={"속세를 벗어난 숙소"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faToriiGate} />}
          text={"료칸"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faArrowUpFromWaterPump} />}
          text={"호수근처"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faPaintbrush} />}
          text={"디자인"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faUmbrellaBeach} />}
          text={"열대 지역"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faDungeon} />}
          text={"동굴"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faIgloo} />}
          text={"북극"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faChampagneGlasses} />}
          text={"와인농장"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faFolderPlus} />}
          text={"신규"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faFan} />}
          text={"풍차"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faTreeCity} />}
          text={"트리하우스"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faMugHot} />}
          text={"B&B"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faPersonShelter} />}
          text={"돔하우스"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faSailboat} />}
          text={"보트"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faArchway} />}
          text={"키클라데스 주택"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faChessRook} />}
          text={"유서 깊은 주택"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faFlag} />}
          text={"세상의 꼭대기"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faCampground} />}
          text={"A자형 주택"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
          text={"저택"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faBellConcierge} />}
          text={"Luxe"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faWater} />}
          text={"호숫가"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faLifeRing} />}
          text={"섬"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          text={"상징적 도시"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faChildren} />}
          text={"키즈"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faVanShuttle} />}
          text={"캠핑카"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faPersonSnowboarding} />}
          text={"서핑"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faGolfBallTee} />}
          text={"골프장"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faStore} />}
          text={"복토 주택"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faUtensils} />}
          text={"전문가급 주방"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faTents} />}
          text={"유르트"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faSynagogue} />}
          text={"민수"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faPersonSkiing} />}
          text={"스키 타고 출입"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faHouseChimneyWindow} />}
          text={"카사 파르티쿨라르"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faCaravan} />}
          text={"마차"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faTrailer} />}
          text={"컨테이너하우스"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faMusic} />}
          text={"그랜드 피아노"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faTowerObservation} />}
          text={"타워"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faHatCowboy} />}
          text={"사막"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faShop} />}
          text={"헛간"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faShip} />}
          text={"하우스보트"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faWheelchairMove} />}
          text={"무장애"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"담무소"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faMosque} />}
          text={"리아드"}
        />
        <HeaderCategoryItem
          icon={<FontAwesomeIcon icon={faGopuram} />}
          text={"트룰로"}
        />
      </section>

      <div className="flex flex-row justify-between items-center space-x-8">
        {/* 오른쪽 화살표 버튼 */}
        <ScrollArrowBtn />

        {/* 필터 모달 버튼 */}
        <FilterBtn />
      </div>
    </section>
  );
}
