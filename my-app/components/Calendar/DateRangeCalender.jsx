import dayjs from "dayjs";
import { useState, useEffect } from "react";
dayjs.locale("ko");

import ArrowBtn from "../Buttons/ArrowBtn";
import BlackBtn from "../Buttons/BlackBtn";

export default function DateRangeCalender() {
  const [onCheckIn, setOnCheckIn] = useState(false);
  const [onCheckOut, setOnCheckOut] = useState(false);

  // 요일
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 현재 날짜
  const [today, setToday] = useState(dayjs());

  // input value
  const [inputValue, setInputValue] = useState(new Date());

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
  const emptyDates = new Array(firstDayOfMonth.day()).fill(null);
  // firstDayOfMonth.day() // 0 ~ 6 (일 ~ 토)

  // 1일의 요일 만큼 앞에 빈 공백 넣어준다.
  const calenderList = [...emptyDates, ...dates];

  // 이전 달
  const onClickPreMonth = () => {
    setToday(dayjs(today).subtract(1, "month"));
    setInputValue("");
  };

  // 이번 달
  const onClickPresentMonth = () => {
    setToday(dayjs());
    setInputValue("");
  };

  // 다음 달
  const onClickNextMonth = () => {
    setToday(dayjs(today).add(1, "month"));
    setInputValue("");
  };

  const onChangeInputHandle = (el) => {
    console.log(el);
    setInputValue(el.format("YYYY-MM-DD"));
  };

  // CheckIn 버튼 핸들러
  const handleOnCheckInBtn = () => {
    setOnCheckIn(!onCheckIn);
    setOnCheckOut(false);
  };

  // CheckOut 버튼 핸들러
  const handleOnCheckOutBtn = () => {
    setOnCheckIn(false);
    setOnCheckOut(!onCheckOut);
  };

  // 모달 닫기 버튼 핸들러
  const onClickCloseBtn = () => {
    setOnCheckIn(false);
    setOnCheckOut(false);
  };

  useEffect(() => {
    // // input의 값을 선택하면
    // if (inputValue) {
    //   // dayjs에 해당 날짜로 입력한다.
    //   setToday(dayjs(inputValue));
    // }
  }, []);

  return (
    <div>
      <div>{today.format("YYYY-MM-DD")}</div>

      <h1>{today.format("M")}월</h1>
      <h3>이번달 일수 : {daysInMonth}일</h3>

      <div className="w-[660px] pt-7 pb-4 px-8 bg-[#fff] rounded-2xl shadow-xxx">
        <section className="flex flex-row justify-between pb-4">
          <section>
            <div className="font-bold text-xl">4박</div>
            <div className="text-gray-500 pt-2">
              2024년 4월 1일 - 2024년 4월 5일
            </div>
          </section>
          <section className="flex flex-row">
            <label
              htmlFor="checkIn"
              className={`w-[146px] rounded-lg duration-[0.1s] ${
                onCheckIn
                  ? "border-black border-[2px]"
                  : "border-gray-400 border-[1px]"
              }`}
            >
              <div className="mt-[10px] mb-[6px] mx-3">
                <div className="text-[11px] font-bold pointer-events-none">
                  체크인
                </div>
                <input
                  id="checkIn"
                  readOnly
                  type="date"
                  onClick={handleOnCheckInBtn}
                  value={inputValue}
                  className="text-sm focus:outline-none"
                />
              </div>
            </label>
            <label
              htmlFor="checkOut"
              className={`w-[146px] rounded-lg duration-[0.1s] ${
                onCheckOut
                  ? "border-black border-[2px]"
                  : "border-gray-400 border-[1px]"
              }`}
            >
              <div className="mt-[10px] mb-[6px] mx-3">
                <div className="text-[11px] font-bold pointer-events-none">
                  체크아웃
                </div>
                <input
                  id="checkOut"
                  readOnly
                  type="date"
                  onClick={handleOnCheckOutBtn}
                  value={inputValue}
                  className="text-sm focus:outline-none"
                />
              </div>
            </label>
          </section>
        </section>

        <section className=" border-black border-[1px] w-full flex flex-row ">
          {/* 켈린더 왼쪽 */}
          <section className="w-1/2 border-red-400 border-[1px] py-[22px]">
            <header className="">
              <div className="relative flex flex-row justify-center pb-[22px]">
                <div>{today.format("YYYY년 M월")}</div>
                <div className="absolute left-4">
                  <ArrowBtn onClick={onClickPreMonth} direction={"Left"} />
                </div>
              </div>
              <ul className="flex flex-row justify-around">
                {dayOfTheWeek.map((el, index) => (
                  <li key={index} className="cursor-default">
                    {el}
                  </li>
                ))}
              </ul>
            </header>
            <main>
              <ul className="flex flex-row flex-wrap">
                {/* 날짜를 표시하는 셀 생성 */}
                {calenderList.map((el, index) => (
                  <li key={index} className="w-[14.28%] flex flex-row ">
                    {/* 날짜 텍스트 */}
                    {el !== null ? (
                      <div
                        onClick={() => onChangeInputHandle(el)}
                        className="cursor-pointer w-full text-center hover:bg-gray-200 py-2"
                      >
                        {el.format("D")}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </main>
          </section>
        </section>

        <section className="flex flex-row justify-end items-center gap-x-4">
          <button
            type="button"
            onClick={onClickPresentMonth}
            className="text-blue-500 hover:underline"
          >
            오늘
          </button>
          <BlackBtn
            type={"button"}
            onClick={onClickCloseBtn}
            px={"4"}
            py={"2"}
            textSize={"sm"}
            text={"닫기"}
          />
        </section>
      </div>
    </div>
  );
}
