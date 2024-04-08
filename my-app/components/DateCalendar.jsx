import dayjs from "dayjs";
import { useState } from "react";
dayjs.locale("ko");

import ArrowBtn from "./Buttons/ArrowBtn";
import BlackBtn from "./Buttons/BlackBtn";

// signup.jsx > DateCalendar.jsx
export default function DateCalendar({
  birthDate,
  setBirthDate,
  showDateCalendarModal,
  setShowDateCalendarModal,
}) {
  // const [showDateCalendarModal, setShowDateCalendarModal] = useState(false);
  // const [birthDate, setBirthDate] = useState(new Date());

  // 연도 변환 모달
  const [showYearModal, setShowYearModal] = useState(false);

  // 현재 날짜를 가져옵니다.
  const currentDate = dayjs();
  const currentYear = currentDate.year();

  // 200년 전의 날짜를 계산합니다.
  const pastYear = currentDate.subtract(200, "year").year();

  // 현재 연도와 200년 전까지의 연도를 배열에 담습니다.
  const years = [];
  for (let year = currentYear; year >= pastYear; year--) {
    years.push(String(year));
  }

  // --
  // 요일
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 현재 날짜
  const [today, setToday] = useState(dayjs());

  // 그 날이 포함된 달의 마지막 날
  const daysInMonth = today.daysInMonth();

  // 이번달의 1일
  const firstDayOfMonth = dayjs(today).startOf("month").locale("ko");

  // 1일부터 끝날까지 배열에 순차적으로 넣음
  const dates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = dayjs(firstDayOfMonth).add(i - 1, "day");
    dates.push(date);
  }

  // 공백 날
  // firstDayOfMonth.day() // 0 ~ 6 (일 ~ 토)
  const emptyDates = new Array(firstDayOfMonth.day()).fill(null);

  // 1일의 요일 만큼 앞에 빈 공백 넣어준다.
  const calenderData = [...emptyDates, ...dates];

  // 이전 달
  const onClickPreMonth = () => {
    setToday(dayjs(today).subtract(1, "month"));
  };

  // 다음 달
  const onClickNextMonth = () => {
    setToday(dayjs(today).add(1, "month"));
  };

  // 초기화 (이번 달로 이동함)
  const onClickResetBtn = () => {
    setToday(dayjs());
    setBirthDate("");
  };

  // 연도 선택(변경)
  const onClickChangeYear = (year) => {
    setToday(dayjs(today).set("year", year));
    showYearModalBtn();
  };

  // 날짜 선택(변경) (= input 값 변경)
  const onClickChangeDate = (date) => {
    setBirthDate(date.format("YYYY-MM-DD"));
    showDateCalendarModalBtn();
  };

  // 연도 모달 on, off
  const showYearModalBtn = () => {
    setShowYearModal(!showYearModal);
  };

  // DateCalendar 모달 on, off
  const showDateCalendarModalBtn = () => {
    setShowDateCalendarModal(false);
  };

  return (
    <div>
      {/* Date Calendar */}
      <div className="absolute top-[-360px] right-0 z-[200]">
        <div
          className={`w-[330px] p-4 rounded-2xl shadow-xxx ${
            showDateCalendarModal && showYearModal ? "bg-gray-300" : "bg-[#fff]"
          }`}
        >
          <section className="w-full">
            <header>
              <div className="relative flex flex-row justify-center pb-[22px]">
                <div onClick={showYearModalBtn} className="cursor-pointer">
                  {today.format("YYYY년 M월")}
                </div>
                <div className="absolute left-4">
                  <ArrowBtn onClick={onClickPreMonth} direction={"Left"} />
                </div>
                <div className="absolute right-4">
                  <ArrowBtn onClick={onClickNextMonth} direction={"Right"} />
                </div>

                {/* 연도, 월 변경 모달 */}
                {showYearModal && (
                  <section className="absolute top-8 z-[201] bg-[#fff] border-[1px] w-full h-[280px] p-6 rounded-lg shadow-xxx ">
                    <ul className="w-full h-[200px] flex flex-row flex-wrap overflow-y-scroll scrollbar-hide">
                      {years.map((year, index) => (
                        <li
                          key={index}
                          onClick={() => onClickChangeYear(year)}
                          className={`w-[25%] h-[30px] flex flex-row justify-center items-center text-lg text-gray-600 rounded-full cursor-pointer
                        ${
                          year === today.format("YYYY")
                            ? "bg-black text-white"
                            : "hover:font-bold hover:bg-gray-200 hover:text-black "
                        }`}
                        >
                          {year}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-row justify-end pt-2">
                      <BlackBtn
                        type={"button"}
                        onClick={showYearModalBtn}
                        px={"4"}
                        py={"2"}
                        textSize={"sm"}
                        text={"닫기"}
                      />
                    </div>
                  </section>
                )}
              </div>

              {/* 요일 */}
              <ul className="flex flex-row justify-around pb-2">
                {dayOfTheWeek.map((el, index) => (
                  <li key={index} className="cursor-default">
                    {el}
                  </li>
                ))}
              </ul>
            </header>

            {/* 날짜 표시 */}
            <main>
              <ul className="flex flex-row flex-wrap">
                {calenderData.map((date, index) => (
                  <li
                    key={index}
                    className="w-[14.28%] aspect-square flex flex-row "
                  >
                    {date !== null ? (
                      <div
                        onClick={() => onClickChangeDate(date)}
                        className={`cursor-pointer w-full flex flex-row justify-center items-center rounded-full ${
                          date.format("YYYY-MM-DD") === birthDate
                            ? "bg-black text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {date.format("D")}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </main>
          </section>

          {/* 모달 하단 부분 */}
          <section className="flex flex-row justify-between items-center px-2">
            <button
              type="button"
              onClick={onClickResetBtn}
              className="text-blue-500 hover:underline"
            >
              초기화
            </button>
            <BlackBtn
              type={"button"}
              onClick={showDateCalendarModalBtn}
              px={"4"}
              py={"2"}
              textSize={"sm"}
              text={"닫기"}
            />
          </section>
        </div>
      </div>

      {/* DateCalendar 모달 바깥 부분 */}
      <div
        onClick={showDateCalendarModalBtn}
        className="fixed top-0 left-0 w-full h-full z-[199]"
      ></div>
    </div>
  );
}
