import { useState } from "react";
import BlackBtn from "@/components/Buttons/BlackBtn";
import CloseModalBtn from "@/components/Buttons/CloseModalBtn";
import FilterModalPropertyTypeBtn from "@/components/Buttons/FilterModalPropertyTypeBtn";
import FilterModalNumberBtn from "@/components/Buttons/FilterModalNumberBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBuilding,
  faTent,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";

// 필터 버튼을 누르면 나타나는 모달
export default function FilterModal({ closeFilterModal, showFilterModal }) {
  const [typePlace, setTypePlace] = useState(["공간_전체", "방", "집_전체"]);

  const handleTypePlace = (event) => {
    const typePlaceValue = event.target.innerText;
    const typePlaceUnderbarValue = event.target.innerText.replaceAll(" ", "_");
    console.log(typePlaceValue);
    console.log("value_1 : ", typePlace);
    setTypePlace(typePlaceUnderbarValue);
    console.log("value_2 : ", typePlace);
    console.log("aa : ", event.target.value);
    console.log("typePlace : ", typePlace);

    console.log(event);
  };

  const onClickAllOff = () => {
    console.log("필터 모달에서 전체 해제 버튼 누름");
  };

  const submitFilter = () => {
    console.log("필터 모달에서 숙소보기 버튼 누름");
  };

  return (
    <div>
      {/* 모달 내용 */}
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col justify-start items-start fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[780px] w-[90%] h-[90%] bg-[var(--modal-inner-bg)] rounded-lg z-[1000]"
      >
        {/* 헤더 */}
        <header className="fixed w-full bg-[#fff] rounded-t-lg">
          <div className="flex flex-row items-center w-full h-[63px] border-b-[1px] border-solid border-[#DDDDDD] relative">
            <div className="px-[24px]">
              <CloseModalBtn onClick={closeFilterModal} />
            </div>

            <h3 className="absolute left-[50%] text-[16px] font-semibold">
              필터
            </h3>
          </div>
        </header>

        <main className="w-full mt-14 mb-20 px-6 divide-y-[1px] overflow-y-scroll">
          {/* 숙소유형 */}
          <section className="py-6">
            <h1 className="font-medium text-[22px] pb-2">숙소 유형</h1>
            <div>
              <div className="text-sm text-gray-600">
                방, 집 전체 등 원하는 숙소 유형을 검색해보세요.
              </div>
              <div className="pt-6 px-10 flex flex-row justify-center items-center">
                <button
                  type="button"
                  onClick={handleTypePlace}
                  value={typePlace}
                  className={`w-1/3 h-16 border-solid border-[1px] border-[#DDDDDD] rounded-l-xl font-medium hover:border-black`}
                >
                  공간 전체
                </button>
                <button
                  type="button"
                  className="w-1/3 h-16 border-solid border-[1px] border-[#DDDDDD] hover:border-black"
                >
                  방
                </button>
                <button
                  type="button"
                  className="w-1/3 h-16 border-solid border-[1px] border-[#DDDDDD] rounded-r-xl hover:border-black"
                >
                  집 전체
                </button>
              </div>
            </div>
          </section>

          {/* 가격 범위 */}
          <section className="py-8">
            <h1 className="font-medium text-[22px] pb-2">가격 범위</h1>
            <div>
              <div className="text-sm text-gray-600 mb-4">
                1박 요금(수수료 및 세금 포함)
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <label htmlFor="lowPrice" className="relative w-[46%]">
                  <div className="absolute text-[12px] text-gray-500 top-2 left-3">
                    최저
                  </div>
                  <div className="w-full text-gray-600">
                    <div className="absolute top-6 left-3">₩</div>
                    <input
                      id="lowPrice"
                      type="number"
                      className="w-full cursor-default border-solid border-[1px] border-[#B0B0B0] rounded-lg pt-[23px] pl-8 pr-3 pb-[6px] "
                    />
                  </div>
                </label>
                <div className=" border-solid border-b-[1px] border-[#B0B0B0] w-4" />
                <label htmlFor="highPrice" className="relative w-[46%]">
                  <div className="absolute text-[12px] text-gray-500 top-2 left-3">
                    최고
                  </div>
                  <div className="w-full text-gray-600">
                    <div className="absolute top-6 left-3">₩</div>
                    <input
                      id="highPrice"
                      type="number"
                      className="w-full cursor-default border-solid border-[1px] border-[#B0B0B0] rounded-lg pt-[23px] pl-8 pr-3 pb-[6px] "
                    />
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* 침실과 침대 */}
          <section className="py-8">
            <h1 className="font-medium text-[22px] pb-2">침실과 침대</h1>
            <div>
              <div className="text-gray-600 pt-7 pb-5">침실</div>
              <div className="flex flex-row space-x-2">
                <FilterModalNumberBtn text={"상관없음"} />
                <FilterModalNumberBtn text={"1"} />
                <FilterModalNumberBtn text={"2"} />
                <FilterModalNumberBtn text={"3"} />
                <FilterModalNumberBtn text={"4"} />
                <FilterModalNumberBtn text={"5"} />
                <FilterModalNumberBtn text={"6"} />
                <FilterModalNumberBtn text={"7"} />
                <FilterModalNumberBtn text={"8+"} />
              </div>
            </div>
            <div>
              <div className="text-gray-600 pt-7 pb-5">침대</div>
              <div className="flex flex-row space-x-2">
                <FilterModalNumberBtn text={"상관없음"} />
                <FilterModalNumberBtn text={"1"} />
                <FilterModalNumberBtn text={"2"} />
                <FilterModalNumberBtn text={"3"} />
                <FilterModalNumberBtn text={"4"} />
                <FilterModalNumberBtn text={"5"} />
                <FilterModalNumberBtn text={"6"} />
                <FilterModalNumberBtn text={"7"} />
                <FilterModalNumberBtn text={"8+"} />
              </div>
            </div>
            <div>
              <div className="text-gray-600 pt-7 pb-5">욕실</div>
              <div className="flex flex-row space-x-2">
                <FilterModalNumberBtn text={"상관없음"} />
                <FilterModalNumberBtn text={"1"} />
                <FilterModalNumberBtn text={"2"} />
                <FilterModalNumberBtn text={"3"} />
                <FilterModalNumberBtn text={"4"} />
                <FilterModalNumberBtn text={"5"} />
                <FilterModalNumberBtn text={"6"} />
                <FilterModalNumberBtn text={"7"} />
                <FilterModalNumberBtn text={"8+"} />
              </div>
            </div>
          </section>

          {/* 건물 유형 */}
          <section className="py-8">
            <h1 className="font-medium text-[22px] pb-6">건물 유형</h1>
            <div className="grid grid-cols-4 gap-x-2">
              <FilterModalPropertyTypeBtn
                icon={<FontAwesomeIcon icon={faHouse} />}
                text={"단독 또는 다세대 주택"}
              />
              <FilterModalPropertyTypeBtn
                icon={<FontAwesomeIcon icon={faBuilding} />}
                text={"아파트"}
              />
              <FilterModalPropertyTypeBtn
                icon={<FontAwesomeIcon icon={faTent} />}
                text={"게스트용 별채"}
              />
              <FilterModalPropertyTypeBtn
                icon={<FontAwesomeIcon icon={faHotel} />}
                text={"호텔"}
              />
            </div>
          </section>
        </main>

        <footer className="fixed bottom-0 w-full h-[80px] px-6 flex flex-row justify-between items-center bg-[#fff] rounded-b-lg border-t-[1px] border-solid border-[#DDDDDD] ">
          <button
            onClick={onClickAllOff}
            className="hover:bg-gray-100 rounded-lg ml-[-12px] px-4 py-2 active:scale-95 duration-[0.1s] "
          >
            전체 해제
          </button>

          <BlackBtn type={"submit"} onClick={submitFilter} text={"숙소 보기"} />
        </footer>
      </form>

      {/* 모달 바깥 부분 */}
      <div
        onClick={closeFilterModal}
        className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)]"
      ></div>
    </div>
  );
}
