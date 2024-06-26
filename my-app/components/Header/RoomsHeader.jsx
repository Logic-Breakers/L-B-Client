import Logo from "./Logo/Logo";
import RoomsHeaderBtn from "../Buttons/RoomsHeaderBtn";
import RedBtn from "../Buttons/RedBtn";

// Rooms 페이지에서 스크롤 내리면 나타나는 헤더
// 부모(rooms.jsx)으로부터 받은 props인 scrollRef를 RoomsHeaderBtn으로 넘겨준다.
export default function RoomsHeader({ scrollRef, isRoomsHeaderShow }) {
  return (
    <header
      className={`bnb_sm:hidden bnb_xl:px-[80px] px-[40px] bg-[#fff] fixed top-0 left-0 w-full z-[100] duration-[0.1s] border-b-[1px] border-solid border-[#eeeeee] flex flex-row justify-between items-center ${
        isRoomsHeaderShow ? "block" : "hidden"
      }`}
    >
      <section className="flex flex-row items-center h-[80px] space-x-10">
        {/* 헤더 왼쪽 로고 */}
        <Logo />

        <div className="flex flex-row space-x-6">
          <RoomsHeaderBtn text={"사진"} scrollRef={scrollRef} />
          <RoomsHeaderBtn text={"편의시설"} scrollRef={scrollRef} />
          <RoomsHeaderBtn text={"후기"} scrollRef={scrollRef} />
          <RoomsHeaderBtn text={"위치"} scrollRef={scrollRef} />
        </div>
      </section>

      <section className="flex flex-row items-center space-x-4">
        <div>
          <div>
            <span className="mr-1 font-semibold text-gray-500 line-through">
              <span>₩404,148</span>
            </span>
            <span>
              <span className="font-semibold">₩88,000</span>
              <span className="text-[13px]"> /박</span>
            </span>
          </div>

          <div className="text-[12px]">
            <span className="font-semibold">★4.0</span>
            <span className="mx-[2px]">∙</span>
            <span className="text-gray-500">
              <span>후기 19개</span>
            </span>
          </div>
        </div>

        <div className="w-[148px]">
          <RedBtn
            type={"button"}
            text={"예약하기"}
            width={"full"}
            textSize={"md"}
          />
        </div>
      </section>
    </header>
  );
}
