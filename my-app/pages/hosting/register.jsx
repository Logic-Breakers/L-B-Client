import Link from "next/link";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import HeaderBasic from "@/components/Header/HeaderBasic";
import NavApp from "@/components/Header/Nav/NavApp";

export default function Register() {
  return (
    <>
      <Title text={"호스트 알림판 - Aribnb"} />
      <HeaderBasic />
      <main className="flex flex-row justify-center items-center w-full bnb_sm:mb-[60px]">
        <div className="w-[100%] min-h-[100vh] bnb_md_xl:pt-[80px] bnb_xl:px-[80px] bnb_md_lg:px-[40px] bnb_sm:px-[24px]">
          <section className="flex flex-row justify-between items-center">
            <h1 className="text-[32px] font-[500] mt-[36px]">
              ○○ 님, 반갑습니다!
            </h1>
            <Link href="/hosting/register">
              <button className="border-black border-solid border-[1px] px-4 py-1 rounded-md text-md hover:bg-[#F7F7F7]">
                숙소 등록하기
              </button>
            </Link>
          </section>
          <section></section>
        </div>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}
