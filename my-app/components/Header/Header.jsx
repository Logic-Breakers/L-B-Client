import Link from "next/link";
import Nav from "./Nav/NavWeb";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import HeaderCenterTopBtn from "./CenterItem/Btn/HeaderCenterTopBtn";

// 대부분 (계정관리, 위시리스트, 메시지, 여행 ...) 페이지에 사용되는 헤더
export default function Header() {
  const router = useRouter();

  // 숙소, 체험
  const [lodging, setLodging] = useState(true);
  const [experience, setExperience] = useState(false);

  // 여행지, 체크인, 체크아웃, 날짜, 여행자 버튼
  const [destination, setDestination] = useState(false);
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [date, setDate] = useState(false);
  const [guest, setGuest] = useState(false);

  const handleLodging = () => {
    setLodging(true);
    setExperience(false);
  };
  const handleExperience = () => {
    setLodging(false);
    setExperience(true);
  };

  const handleDestination = () => {
    // 숙소 on && 여행지 on
    if (lodging) {
      setDestination(true);
      setCheckIn(false);
      setCheckOut(false);
      setGuest(false);
    }

    // 체험 on && 여행지 on
    if (experience) {
      setDestination(true);
      setDate(false);
      setGuest(false);
    }
  };

  const handleCheckIn = () => {
    // 숙소 on && 체크인 on
    if (lodging) {
      setDestination(false);
      setCheckIn(true);
      setCheckOut(false);
      setGuest(false);
    }
  };
  const handleCheckOut = () => {
    // 숙소 on && 체크아웃 on
    if (lodging) {
      setDestination(false);
      setCheckIn(false);
      setCheckOut(true);
      setGuest(false);
    }
  };
  const handleGuest = () => {
    // 숙소 on && 예약자
    if (lodging) {
      setDestination(false);
      setCheckIn(false);
      setCheckOut(false);
      setGuest(true);
    }
  };

  return (
    <header className="bnb_sm:hidden bg-[#fff] border-b-[1px] border-solid border-[#eeeeee] bnb_xl:px-[80px] px-[40px] fixed top-0 left-0 w-[100%] z-[100] duration-[0.1s]">
      <section className="flex flex-row justify-between items-center h-[80px]">
        {/* 헤더 왼쪽 로고 */}
        <Link
          href={"/"}
          className="flex flex-row justify-center items-center gap-[4px] text-[var(--brand-color)] font-[600]"
        >
          <span className="text-[36px]">
            <FontAwesomeIcon icon={faAirbnb} />
          </span>
          <span className="hidden bnb_xl:block text-[24px] font-[600]">
            airbnb
          </span>
        </Link>

        {/* 메인 페이지 중간 아이템 */}
        {router.pathname === "/" ? (
          <section>
            <div className="space-x-1">
              <HeaderCenterTopBtn
                onClick={handleLodging}
                state={lodging}
                text={"숙소"}
              />

              <HeaderCenterTopBtn
                onClick={handleExperience}
                state={experience}
                text={"체험"}
              />

              <Link href={"/"}>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-full text-md text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                >
                  온라인 체험
                </button>
              </Link>
            </div>
          </section>
        ) : null}

        {/* 헤더 오른쪽 네비게이션 */}
        <Nav />

        {/* 메인페이지 헤더 중간 아이템 */}
      </section>
      {router.pathname === "/" && lodging ? (
        <section className="flex flex-row justify-center items-center w-full mb-6">
          <div
            className={`grid grid-cols-3 bnb_lg_xl:w-[850px] border-gray-200 border-solid border-[1px] rounded-full ${
              destination || checkIn || checkOut || guest
                ? "bg-[#EBEBEB]"
                : "bg-[#ffffff] shadow-cccc"
            }`}
          >
            {/* 여행지 */}
            <label
              onClick={handleDestination}
              htmlFor="destination"
              className={`px-8 py-3 rounded-full cursor-pointer ${
                destination ? "bg-white shadow-cc" : "hover:bg-[#DDDDDD]"
              }`}
            >
              <div>
                <div className="text-[13px] pointer-events-none">여행지</div>
                <input
                  id="destination"
                  type="search"
                  placeholder="여행지 검색"
                  className={`outline-none appearance-none text-sm ${
                    destination
                      ? "bg-white placeholder:text-gray-400"
                      : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
                  } ${
                    checkIn || checkOut || guest
                      ? "bg-[#EBEBEB] placeholder:text-gray-600"
                      : "bg-[#ffffff]"
                  }`}
                />
              </div>
            </label>

            {/* 체크인 & 체크아웃 */}
            <div className="grid grid-cols-2">
              {/* 체크인 */}
              <div
                onClick={handleCheckIn}
                className={`pl-6 pr-10 py-3 rounded-full cursor-pointer ${
                  checkIn
                    ? "bg-white shadow-cc"
                    : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
                } ${
                  destination || checkOut || guest
                    ? "bg-[#EBEBEB]"
                    : "bg-[#ffffff]"
                }`}
              >
                <div className="text-[13px] pointer-events-none pb-[2px]">
                  체크인
                </div>
                <div
                  className={`outline-none appearance-none text-sm ${
                    destination || checkOut || guest
                      ? "text-gray-600"
                      : "text-gray-500"
                  }`}
                >
                  날짜 추가
                </div>
              </div>
              {/* 체크아웃 */}
              <div
                onClick={handleCheckOut}
                className={`pl-6 pr-10 py-3 rounded-full cursor-pointer ${
                  checkOut
                    ? "bg-white shadow-cc"
                    : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
                } ${
                  destination || checkIn || guest
                    ? "bg-[#EBEBEB]"
                    : "bg-[#ffffff]"
                }`}
              >
                <div className="text-[13px] pointer-events-none pb-[2px]">
                  체크아웃
                </div>
                <div
                  className={`outline-none appearance-none text-sm ${
                    destination || checkIn || guest
                      ? "text-gray-600"
                      : "text-gray-500"
                  }`}
                >
                  날짜 추가
                </div>
              </div>
            </div>

            {/* 예약자 */}
            <div
              onClick={handleGuest}
              className={`pl-6 pr-10 py-3 rounded-full cursor-pointer ${
                guest ? "bg-white shadow-cc" : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
              } ${
                destination || checkIn || checkOut
                  ? "bg-[#EBEBEB]"
                  : "bg-[#ffffff]"
              }`}
            >
              <div className="text-[13px] pointer-events-none pb-[2px]">
                예약자
              </div>
              <div
                className={`outline-none appearance-none text-sm ${
                  destination || checkIn || checkOut
                    ? "text-gray-600"
                    : "text-gray-500"
                }`}
              >
                게스트 추가
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </header>
  );
}
