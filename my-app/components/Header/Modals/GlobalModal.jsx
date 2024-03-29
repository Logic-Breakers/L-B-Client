import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faCheck } from "@fortawesome/free-solid-svg-icons";

import GlobalModalData from "../../Datas/GlobalModalData";
import CloseModalBtn from "@/components/Buttons/CloseModalBtn";

// 지구본 버튼을 누르면 나타나는 모달
export default function GlobalModal({ closeGlobalModal, showGlobalModal }) {
  // 언어와 지역 & 통화
  const [showLanguageAndLocal, setShowLanguageAndLocal] = useState(true);
  const [showExchange, setShowExchange] = useState(false);

  // 번역 버튼 on & off
  const [autoTranslation, setAutoTranslation] = useState(true);

  // {
  //   country: "대한민국",
  //   country_kor: "한국",
  //   language: "한국어",
  //   currency_unit_eng: "KRW",
  //   currency_unit_kor: "원",
  //   currency_symbol: "₩",
  // },

  const [language, setLanguage] = useState("한국어");
  const [country, setCountry] = useState("대한민국");
  const [exchange, Exchange] = useState("KRW");

  const handleLanguageAndLocal = () => {
    setShowLanguageAndLocal(true);
    setShowExchange(false);
  };

  const handleExchange = () => {
    setShowLanguageAndLocal(false);
    setShowExchange(true);
  };

  const handleAutoTranslation = () => {
    setAutoTranslation(!autoTranslation);
  };

  const onClickLanguage = (event) => {
    // setCountry(el.country);
    // setLanguage(el.language);
    console.log(event);
  };

  return (
    <div>
      {/* 모달 내용 */}
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col justify-start items-start fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[1032px] w-[90%] h-[90%] bg-[var(--modal-inner-bg)] rounded-lg z-[1000] px-[24px]"
      >
        <header className="w-full">
          <div className="mt-[20px] ml-[-8px]">
            <CloseModalBtn onClick={closeGlobalModal} />
          </div>
          <div className="mt-[20px] flex flex-row gap-[20px] border-b-[1px] border-[#DDDDDD] border-solid">
            <button
              onClick={handleLanguageAndLocal}
              className={`p-[16px] ml-[-16px] ${
                showLanguageAndLocal
                  ? "decoration-slice underline underline-offset-[20px] text-black font-semibold"
                  : "text-[#717171]"
              }`}
            >
              언어와 지역
            </button>
            <button
              onClick={handleExchange}
              className={`p-[16px] ml-[-16px] ${
                showExchange
                  ? "decoration-slice underline underline-offset-[20px] text-black font-semibold"
                  : "text-[#717171]"
              }`}
            >
              통화
            </button>
          </div>
        </header>
        <main className="w-full py-[30px] overflow-y-scroll scrollbar-hide">
          {/* 글로벌 모달 ON + 언어와 지역 버튼 ON 인 경우 */}
          {showGlobalModal && showLanguageAndLocal && (
            <section>
              <section className="relative flex flex-col justify-center text-[16px] bg-[#F7F7F7] rounded-lg w-[360px] h-[80px] p-[16px]">
                <div className="mb-[8px] flex flex-row items-center gap-[8px]">
                  <span>번역</span>
                  <FontAwesomeIcon icon={faLanguage} className="text-[20px]" />
                </div>
                <div className="text-[14px] text-[#737373]">
                  설명과 후기가 한국어로 자동 번역됩니다.
                </div>
                <div className="absolute right-5">
                  {autoTranslation && (
                    <button
                      type="button"
                      onClick={handleAutoTranslation}
                      className="flex flex-row justify-end items-center w-[50px] h-[32px] py-[1px] border-[1px] border-black bg-black rounded-[20px]"
                    >
                      <div className="flex flex-row justify-center items-center border-[1px] border-solid border-black rounded-[50%] text-[12px] h-[30px] w-[30px] bg-[#fff]">
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                    </button>
                  )}
                  {!autoTranslation && (
                    <button
                      type="button"
                      onClick={handleAutoTranslation}
                      className="flex flex-row items-center w-[50px] h-[32px] py-[1px] border-[1px] border-[#B0B0B0] bg-[#B0B0B0] rounded-[20px]"
                    >
                      <div className="border-[1px] border-solid border-[#B0B0B0] rounded-[50%] h-[30px] w-[30px] bg-[#fff]"></div>
                    </button>
                  )}
                </div>
              </section>

              {/* <section>
                <h3 className="text-[22px] mt-[30px] mb-[20px] font-semibold">
                  추천 언어 및 지역
                </h3>
                <ul className="grid gap-[10px] bnb_xl:grid-cols-5 bnb_lg:grid-cols-4 bnb_md:grid-cols-3">
                  {GlobalModalData.map((el, index) => (
                    <li
                      key={index}
                      className="flex flex-col flex-grow justify-center hover:bg-[#F7F7F7] rounded-lg cursor-pointer h-[56px] px-[13px] py-[10px]"
                    >
                      <div className="text-[14px]">{el.language}</div>
                      <div className="text-[14px] text-[#737373]">
                        {el.country}
                      </div>
                    </li>
                  ))}
                </ul>
              </section> */}

              <section>
                <h3 className="text-[22px] mt-[30px] mb-[20px] font-semibold">
                  언어와 지역을 선택하세요
                </h3>
                <ul className="grid gap-[10px] bnb_xl:grid-cols-5 bnb_lg:grid-cols-4 bnb_md:grid-cols-3">
                  {GlobalModalData.map((el, index) => (
                    <li
                      key={index}
                      onClick={onClickLanguage}
                      className="flex flex-col flex-grow justify-center hover:bg-[#F7F7F7] rounded-lg cursor-pointer h-[56px] px-[13px] py-[10px] active:scale-[0.95] duration-[0.1s]"
                    >
                      <div className="text-[14px]">{el.language}</div>
                      <div className="text-[14px] text-[#737373]">
                        {el.country}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          )}

          {/* 글로벌 모달 ON + 통화 버튼 ON 인 경우 */}
          {showGlobalModal && showExchange && (
            <section>
              <h3 className="text-[22px] mb-[20px] font-semibold">
                통화를 선택하세요
              </h3>
              <ul className="grid gap-[10px] bnb_xl:grid-cols-5 bnb_lg:grid-cols-4 bnb_md:grid-cols-3">
                {GlobalModalData.map((el, index) => (
                  <li
                    key={index}
                    className="flex flex-col flex-grow justify-center hover:bg-[#F7F7F7] rounded-lg cursor-pointer h-[56px] px-[13px] py-[10px]"
                  >
                    <div className="text-[14px]">
                      <span className="mr-[4px]">{el.country_kor}</span>
                      <span>{el.currency_unit_kor}</span>
                    </div>
                    <div className="text-[14px] text-[#737373]">
                      <span>
                        {`${el.currency_unit_eng} - ${el.currency_symbol}`}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </form>

      {/* 모달 바깥 부분 */}
      <div
        onClick={closeGlobalModal}
        className="fixed top-0 left-0 w-full h-full z-[101]
        bg-[var(--modal-outside-bg)]"
      ></div>
    </div>
  );
}
