import Link from "next/link";
import HeaderBasic from "@/components/Header/HeaderBasic";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import SearchBtn from "@/components/Buttons/tripsPage/SerachBtn";
import NavApp from "@/components/Header/Nav/NavApp";

export default function Trips() {
  return (
    <>
      <Title text={"여행 목록 - 에어비앤비"} />
      <HeaderBasic />
      <main className="flex flex-row justify-center w-full h-[100vh]">
        <div className="w-[100%] bnb_xl:px-[80px] bnb_md_lg:px-[40px] bnb_sm:px-[24px] bnb_md_xl:mt-[70px]">
          <div>
            <h1 className="font-[500] text-[32px] pt-[36px] pb-[24px]">여행</h1>
            <div className="border-y-[1px] border-solid border-[#cccccc] pt-[32px] pb-[48px]">
              <h2 className="text-[20px] font-[500] mb-[8px]">
                아직 예약된 여행이 없습니다!
              </h2>
              <div className="text-[16px] mb-[16px] text-[var(--menu-gray-color)]">
                여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.
              </div>
              <Link href={"/"}>
                <SearchBtn />
              </Link>
            </div>
            <div className="pt-[24px] pb-[36px] flex flex-row gap-[4px] text-[14px]">
              <span className="text-[var(--menu-gray-color)]">
                예약 내역을 찾으실 수 없나요?
              </span>
              <Link href={"/help"}>
                <span className="font-[500] underline decoration-solid">
                  도움말 센터 방문하기
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <NavApp />
      <Footer />
    </>
  );
}
