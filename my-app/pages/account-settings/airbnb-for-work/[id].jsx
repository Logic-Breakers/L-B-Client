import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

// 계정 -> 출장
export default function AirbnbForWork() {
  return (
    <>
      <Title text={"에어비앤비 비즈니스 프로그램 - 계정 관리 - 에어비앤비"} />
      <Header />
      <AppBackPageBtn />
      <main className="h-screen bnb_sm:mt-[80px]">출장 페이지</main>
      <NavApp />
      <Footer />
    </>
  );
}
