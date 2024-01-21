import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import HeaderBasic from "@/components/Header/HeaderBasic";
import NavApp from "@/components/Header/Nav/NavApp";

export default function Hosting() {
  return (
    <>
      <Title text={"호스트 알림판 - Aribnb"} />
      <HeaderBasic />
      <main className="flex flex-row justify-center items-center w-full bnb_sm:mb-[60px]">
        <div className="w-[100%] min-h-[100vh] bnb_md_xl:pt-[80px] bnb_xl:px-[80px] bnb_md_lg:px-[40px] bnb_sm:px-[24px]">
          <h1 className="text-[32px] font-[500] mt-[36px]">호스팅</h1>
          <section></section>
        </div>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}
