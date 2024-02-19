import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import CloseModalBtn from "@/components/Buttons/CloseModalBtn";

// 지구본 버튼을 누르면 나타나는 모달
export default function FilterModal({ closeFilterModal, showFilterModal }) {
  return (
    <div>
      {/* 모달 내용 */}
      <section className="flex flex-col justify-start items-start fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[780px] w-[90%] h-[90%] bg-[var(--modal-inner-bg)] rounded-lg z-[1000]">
        <header className="flex flex-row items-center w-full h-[63px] border-b-[1px] border-solid border-[#DDDDDD] relative">
          <div className="px-[24px]">
            <CloseModalBtn onClick={closeFilterModal} />
          </div>

          <h3 className="absolute left-[50%] text-[16px] font-semibold">
            필터
          </h3>
        </header>

        <main className="w-full px-6 divide-y-[1px]">
          <section className="py-6">
            <h1 className="font-medium text-[22px] pb-2">숙소 유형</h1>
            <div>
              <div className="text-sm text-gray-600">
                방, 집 전체 등 원하는 숙소 유형을 검색해보세요.
              </div>
              <div className="pt-6 px-10 flex flex-row justify-center items-center">
                <button
                  type="button"
                  className="w-1/3 h-16 border-solid border-[1px] border-[#DDDDDD] rounded-l-xl font-medium hover:border-black"
                >
                  모든 유형
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

          <section className="py-8">
            <h1 className="font-medium text-[22px] pb-2">가격 범위</h1>
            <div>
              <div className="text-sm text-gray-600">
                1박 요금(수수료 및 세금 포함)
              </div>

              {/* 여기서부터 계속 만들면 됌 */}
            </div>
          </section>
        </main>

        <footer></footer>
      </section>

      {/* 모달 밖 (어두운 배경) */}
      <div
        onClick={closeFilterModal}
        className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)]"
      ></div>
    </div>
  );
}
