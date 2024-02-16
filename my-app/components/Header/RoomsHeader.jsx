import Logo from "./Logo/Logo";
import RoomsHeaderBtn from "../Buttons/RoomsHeaderBtn";

// Rooms 페이지에서 스크롤 내리면 나타나는 헤더
export default function RoomsHeader({ scrollRef }) {
  return (
    <header
      className={`bnb_sm:hidden bnb_xl:px-[80px] px-[40px] bg-[#fff] fixed top-0 left-0 w-full z-[100] duration-[0.1s] border-b-[1px] border-solid border-[#eeeeee] 
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
    </header>
  );
}
