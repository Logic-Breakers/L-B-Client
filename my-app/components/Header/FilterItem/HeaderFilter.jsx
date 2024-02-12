import HeaderFilterItem from "./HeaderFilterItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSliders } from "@fortawesome/free-solid-svg-icons";

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

export default function HeaderFilter() {
  return (
    <section className="bnb_xl:px-[80px] px-[40px] border-t-[1px] border-solid border-[#eeeeee] pt-3 flex flex-row justify-between items-center space-x-4">
      {/* 카테고리 아이템들 */}
      <section className="overflow-x-scroll scrollbar-hide flex flex-row space-x-6">
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faFire} />}
          text={"인기 급상승"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faMountainSun} />}
          text={"국립공원"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faCow} />}
          text={"농장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faWheatAwn} />}
          text={"한적한 시골"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faWarehouse} />}
          text={"통나무집"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faDoorClosed} />}
          text={"방"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPersonSwimming} />}
          text={"해변 근처"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faVihara} />}
          text={"한옥"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faWaterLadder} />}
          text={"멋진 수영장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faEye} />}
          text={"최고의 전망"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faBinoculars} />}
          text={"캠핑장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPersonSkiingNordic} />}
          text={"스키"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faFortAwesome} />}
          text={"캐슬"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faGhost} />}
          text={"기상천외한 숙소"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouseFloodWater} />}
          text={"해변 바로 앞"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPalette} />}
          text={"창작 공간"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faBuromobelexperte} />}
          text={"속세를 벗어난 숙소"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faToriiGate} />}
          text={"료칸"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faArrowUpFromWaterPump} />}
          text={"호수근처"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPaintbrush} />}
          text={"디자인"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faUmbrellaBeach} />}
          text={"열대 지역"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faDungeon} />}
          text={"동굴"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faIgloo} />}
          text={"북극"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faChampagneGlasses} />}
          text={"와인농장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faFolderPlus} />}
          text={"신규"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faFan} />}
          text={"풍차"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faTreeCity} />}
          text={"트리하우스"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faMugHot} />}
          text={"B&B"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPersonShelter} />}
          text={"돔하우스"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faSailboat} />}
          text={"보트"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faArchway} />}
          text={"키클라데스 주택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faChessRook} />}
          text={"유서 깊은 주택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faFlag} />}
          text={"세상의 꼭대기"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faCampground} />}
          text={"A자형 주택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPlaceOfWorship} />}
          text={"저택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faBellConcierge} />}
          text={"Luxe"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faWater} />}
          text={"호숫가"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faLifeRing} />}
          text={"섬"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          text={"상징적 도시"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faChildren} />}
          text={"키즈"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faVanShuttle} />}
          text={"캠핑카"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPersonSnowboarding} />}
          text={"서핑"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faGolfBallTee} />}
          text={"골프장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faStore} />}
          text={"복토 주택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faUtensils} />}
          text={"전문가급 주방"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faTents} />}
          text={"유르트"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faSynagogue} />}
          text={"민수"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPersonSkiing} />}
          text={"스키 타고 출입"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouseChimneyWindow} />}
          text={"카사 파르티쿨라르"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faCaravan} />}
          text={"마차"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faTrailer} />}
          text={"컨테이너하우스"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faMusic} />}
          text={"그랜드 피아노"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faTowerObservation} />}
          text={"타워"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHatCowboy} />}
          text={"사막"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faShop} />}
          text={"헛간"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faShip} />}
          text={"하우스보트"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faWheelchairMove} />}
          text={"무장애"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"담무소"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faMosque} />}
          text={"리아드"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faGopuram} />}
          text={"트룰로"}
        />
      </section>

      {/* 오른쪽 화살표 버튼 */}
      <div className="flex flex-row justify-between items-center space-x-8">
        <button
          type="button"
          className="w-[27px] h-[27px] rounded-full border-solid border-[1px] border-gray-300 hover:scale-[1.05] hover:shadow-cc active:scale-100 duration-[0.1s] "
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>

        {/* 필터 모달 버튼 */}
        <button
          type="button"
          className="w-fit h-[48px] rounded-xl border border-gray-300 hover:scale-[1.05] hover:shadow-cc active:scale-100 duration-[0.1s] flex flex-row items-center space-x-2 px-4 "
        >
          <div>
            <FontAwesomeIcon icon={faSliders} />
          </div>
          <div className="text-sm w-[25px]">필터</div>
        </button>
      </div>
    </section>
  );
}
