import HeaderFilterItem from "./HeaderFilterItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSliders } from "@fortawesome/free-solid-svg-icons";

import {
  faFire,
  faMountainSun,
  faCow,
  faWheatAwn,
  faWarehouse,
  // 방
  faUmbrellaBeach,
  // 한옥
  faPersonSwimming,
  faEye,
  faTents,
  // 스키
  faChessRook,
  // 기상천외한 숙소
  faHouseFloodWater,
  faPalette,
  // 속세를 벗어난 숙소
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderFilter() {
  return (
    <section className="bnb_xl:px-[80px] px-[40px] border-t-[1px] border-solid border-[#eeeeee] pt-3 flex flex-row justify-between items-center">
      {/* 카테고리 아이템들 */}
      <section className="w-[84%] overflow-x-scroll scrollbar-hide flex flex-row space-x-6">
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
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"방"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faUmbrellaBeach} />}
          text={"해변 근처"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"한옥"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faPersonSwimming} />}
          text={"멋진 수영장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faEye} />}
          text={"최고의 전망"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faTents} />}
          text={"캠핑장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"스키"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faChessRook} />}
          text={"캐슬"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
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
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"속세를 벗어난 숙소"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"료칸"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"호수근처"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"디자인"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"열대 지역"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"동굴"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"북극"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"와인농장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"신규"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"풍차"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"트리하우스"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"B&B"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"돔하우스"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"보트"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"키클라데스 주택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"유서 깊은 주택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"세상의 꼭대기"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"A자형 주택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"저택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"Luxe"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"호숫가"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"섬"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"상징적 도시"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"키즈"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"캠핑카"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"서핑"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"골프장"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"복토 주택"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"전문가급 주방"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"유르트"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"민수"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"스키 타고 출입"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"카사 파르티쿨라르"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"마차"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"컨테이너하우스"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"그랜드 피아노"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"타워"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"사막"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"헛간"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"하우스보트"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"무장애"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"담무소"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"리아드"}
        />
        <HeaderFilterItem
          icon={<FontAwesomeIcon icon={faHouse} />}
          text={"트룰로"}
        />
      </section>

      {/* 오른쪽 화살표 버튼 */}
      <div className="flex flex-row justify-between items-center space-x-8">
        <button
          type="button"
          className="w-[27px] h-[27px] rounded-full border-solid border-[1px] border-gray-300 hover:scale-[1.05] hover:shadow-cc duration-[0.1s] "
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>

        {/* 필터 모달 버튼 */}
        <button
          type="button"
          className="h-[48px] rounded-xl border border-gray-300 hover:scale-[1.05] hover:shadow-cc duration-[0.1s] flex flex-row items-center space-x-2 px-4 "
        >
          <div>
            <FontAwesomeIcon icon={faSliders} />
          </div>
          <div className="text-sm">필터</div>
        </button>
      </div>
    </section>
  );
}
