import Link from "next/link";
import Nav from "./Nav/NavWeb";
import { useState } from "react";
import { useRouter } from "next/router";

import Logo from "./Logo/Logo";
import HeaderCenterTopBtn from "./CenterItem/Btn/HeaderCenterTopBtn";
import HeaderFilter from "./FilterItem/HeaderFilter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// (Web) 모든 페이지에 사용되는 헤더
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

    setDestination(false);
    setCheckIn(false);
    setCheckOut(false);
    setGuest(false);
    setDate(false);
  };
  const handleExperience = () => {
    setLodging(false);
    setExperience(true);

    setDestination(false);
    setCheckIn(false);
    setCheckOut(false);
    setGuest(false);
    setDate(false);
  };

  // 여행지
  const handleDestination = () => {
    setDestination(true);
    setCheckIn(false);
    setCheckOut(false);
    setGuest(false);
    setDate(false);
  };

  // 체크인
  const handleCheckIn = () => {
    setDestination(false);
    setCheckIn(true);
    setCheckOut(false);
    setGuest(false);
    setDate(false);
  };

  // 체크아웃
  const handleCheckOut = () => {
    setDestination(false);
    setCheckIn(false);
    setCheckOut(true);
    setGuest(false);
    setDate(false);
  };

  // 날짜
  const handleDate = () => {
    setDestination(false);
    setCheckIn(false);
    setCheckOut(false);
    setGuest(false);
    setDate(true);
  };

  // 예약자
  const handleGuest = () => {
    setDestination(false);
    setCheckIn(false);
    setCheckOut(false);
    setGuest(true);
    setDate(false);
  };

  return (
    <header
      className={`bnb_sm:hidden bg-[#fff] fixed top-0 left-0 w-full z-[100] duration-[0.1s] ${
        router.pathname === "/"
          ? null
          : "border-b-[1px] border-solid border-[#eeeeee]"
      }`}
    >
      <section className="bnb_xl:px-[80px] px-[40px]">
        <section className="flex flex-row justify-between items-center h-[80px]">
          {/* 헤더 왼쪽 로고 */}
          <Logo />

          {/* 메인 페이지 중간 아이템 : 숙소, 체험, 온라인 체험 */}
          {router.pathname === "/" ? (
            <section>
              <div className="flex flex-row">
                <div>
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
                </div>

                <Link href={"/experiences/online"}>
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
        </section>

        {/* 여행지, 체크인, 체크아웃, 여행자, 날짜 */}
        {router.pathname === "/" && (lodging || experience) ? (
          <form onSubmit={(event) => event.preventDefault()}>
            <section className="flex flex-row justify-center items-center w-full mb-6">
              <div
                className={`grid grid-cols-3 bnb_lg_xl:w-[850px] bnb_md:w-full h-fit border-gray-200 border-solid border-[1px] rounded-full ${
                  destination || checkIn || checkOut || guest || date
                    ? "bg-[#EBEBEB]"
                    : "bg-[#ffffff] shadow-cccc"
                }`}
              >
                {/* 여행지 */}
                <label
                  onClick={handleDestination}
                  htmlFor="destination"
                  className={`pl-8 pr-6 py-[10px] rounded-full cursor-pointer ${
                    destination ? "bg-white shadow-cc" : "hover:bg-[#DDDDDD]"
                  }`}
                >
                  <div>
                    <div className="text-[13px] pointer-events-none">
                      여행지
                    </div>
                    <input
                      id="destination"
                      type="search"
                      placeholder="여행지 검색"
                      className={`outline-none appearance-none text-sm w-full ${
                        destination
                          ? "bg-white placeholder:text-gray-400"
                          : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
                      } ${
                        checkIn || checkOut || guest || date
                          ? "bg-[#EBEBEB] placeholder:text-gray-600"
                          : "bg-[#ffffff]"
                      }`}
                    />
                  </div>
                </label>

                {/* 체크인 & 체크아웃 */}
                {lodging ? (
                  <div className="grid grid-cols-2">
                    {/* 체크인 */}
                    <div
                      onClick={handleCheckIn}
                      className={`px-6 py-[10px] rounded-full cursor-pointer ${
                        checkIn
                          ? "bg-white shadow-cc"
                          : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
                      } ${
                        destination || checkOut || guest || date
                          ? "bg-[#EBEBEB]"
                          : "bg-[#ffffff]"
                      }`}
                    >
                      <div className="text-[13px] pointer-events-none pb-[2px]">
                        체크인
                      </div>
                      <div
                        className={`outline-none appearance-none text-sm w-full ${
                          destination || checkOut || guest || date
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
                      className={`px-6 py-[10px] rounded-full cursor-pointer ${
                        checkOut
                          ? "bg-white shadow-cc"
                          : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
                      } ${
                        destination || checkIn || guest || date
                          ? "bg-[#EBEBEB]"
                          : "bg-[#ffffff]"
                      }`}
                    >
                      <div className="text-[13px] pointer-events-none pb-[2px]">
                        체크아웃
                      </div>
                      <div
                        className={`outline-none appearance-none text-sm ${
                          destination || checkIn || guest || date
                            ? "text-gray-600"
                            : "text-gray-500"
                        }`}
                      >
                        날짜 추가
                      </div>
                    </div>
                  </div>
                ) : null}

                {experience ? (
                  // 날짜
                  <div
                    onClick={handleDate}
                    className={`pl-6 pr-10 py-[10px] rounded-full cursor-pointer ${
                      date
                        ? "bg-white shadow-cc"
                        : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
                    } ${
                      destination || checkIn || checkOut || guest
                        ? "bg-[#EBEBEB]"
                        : "bg-[#ffffff]"
                    }`}
                  >
                    <div className="text-[13px] pointer-events-none pb-[2px]">
                      날짜
                    </div>
                    <div
                      className={`outline-none appearance-none text-sm ${
                        destination || checkIn || checkOut || guest
                          ? "text-gray-600"
                          : "text-gray-500"
                      }`}
                    >
                      날짜 추가
                    </div>
                  </div>
                ) : null}

                {/* 여행자 */}
                <div
                  onClick={handleGuest}
                  className={`pl-6 pr-2 py-[10px] rounded-full cursor-pointer flex flex-row justify-between ${
                    guest
                      ? "bg-white shadow-cc"
                      : "bg-[#EBEBEB] hover:bg-[#DDDDDD]"
                  } ${
                    destination || checkIn || checkOut || date
                      ? "bg-[#EBEBEB]"
                      : "bg-[#ffffff]"
                  }`}
                >
                  <div>
                    <div className="text-[13px] pointer-events-none pb-[2px]">
                      여행자
                    </div>
                    <div
                      className={`outline-none appearance-none text-sm ${
                        destination || checkIn || checkOut || date
                          ? "text-gray-600"
                          : "text-gray-500"
                      }`}
                    >
                      게스트 추가
                    </div>
                  </div>
                  <button className="flex flex-row items-center space-x-2 rounded-full px-3 py-[10px] bg-[#FE375C] hover:bg-[#DE1361] w-fit text-white">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="text-xl"
                    />
                  </button>
                </div>
              </div>
            </section>
          </form>
        ) : null}
      </section>

      {/* 메인페이지 헤더 밑의 필터 */}
      {router.pathname === "/" ? <HeaderFilter /> : null}
    </header>
  );
}
