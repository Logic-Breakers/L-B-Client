import dayjs from "dayjs";
import { useState } from "react";
dayjs.locale("ko");

import ArrowBtn from "../Buttons/ArrowBtn";
import BlackBtn from "../Buttons/BlackBtn";

// signup.jsx > RegisterDateCalendar.jsx
export default function RegisterDateCalendar({
  inputValue,
  setInputValue,
  showDateCalendarModal,
  setShowDateCalendarModal,
  showDateCalendarModalBtn,
}) {
  // 요일
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 현재 날짜
  const [today, setToday] = useState(dayjs());

  // 해당 달의 전체일수를 구함
  const daysInMonth = today.daysInMonth();

  // 선택한 달의 1일에 대한 정보
  const firstDayOfMonth = dayjs(today).startOf("month").locale("ko");

  // 1일부터 마지막 날까지 배열에 순차적으로 넣음
  const dates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = dayjs(firstDayOfMonth).add(i - 1, "day");
    dates.push(date);
  }

  // 공백 날
  // firstDayOfMonth.day() // 0 ~ 6 (일 ~ 토)
  const emptyDates = new Array(firstDayOfMonth.day()).fill(null);

  // 1일의 요일 만큼 앞에 빈 공백 넣어준다.
  const calendarData = [...emptyDates, ...dates];

  // 이전 달
  const onClickPastMonth = () => {
    setToday(dayjs(today).subtract(1, "month"));
  };

  // 다음 달
  const onClickNextMonth = () => {
    setToday(dayjs(today).add(1, "month"));
  };

  // 초기화 (이번 달로 이동함)
  const onClickResetBtn = () => {
    setToday(dayjs());
    setInputValue("");
  };

  // 날짜 선택(변경) (= input 값 변경)
  const onClickChangeDate = (date) => {
    setInputValue(date.format("YYYY-MM-DD"));
    showDateCalendarModalBtn();
  };

  return (
    <div>
      {/* Date Calendar */}
      <div className="absolute z-[200]">
        <div className="w-[330px] p-4 rounded-2xl shadow-xxx bg-[#fff]">
          <section className="w-full">
            {/* 달력의 헤더 */}
            <header>
              <div className="relative flex flex-row justify-center pb-[22px]">
                {/* 연도, 월 표시 */}
                <div>{today.format("YYYY년 M월")}</div>
                {/* 이전 달로 변경 */}
                <div className="absolute left-4">
                  <ArrowBtn onClick={onClickPastMonth} direction={"Left"} />
                </div>
                {/* 다음 달로 변경 */}
                <div className="absolute right-4">
                  <ArrowBtn onClick={onClickNextMonth} direction={"Right"} />
                </div>
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
                {calendarData.map((date, index) => (
                  <li
                    key={index}
                    className="w-[14.28%] aspect-square flex flex-row "
                  >
                    {date !== null ? (
                      <div
                        onClick={() => onClickChangeDate(date)}
                        className={`cursor-pointer w-full flex flex-row justify-center items-center rounded-full ${
                          date.format("YYYY-MM-DD") === inputValue
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
            {/* 초기화 버튼 */}
            <button
              type="button"
              onClick={onClickResetBtn}
              className="text-blue-500 hover:underline"
            >
              초기화
            </button>

            {/* 켈린더 모달 전체 닫기 버튼 */}
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

      {/* 달력 모달 바깥 부분 */}
      <div
        onClick={showDateCalendarModalBtn}
        className="fixed top-0 left-0 w-full h-full z-[199]"
      ></div>
    </div>
  );
}
