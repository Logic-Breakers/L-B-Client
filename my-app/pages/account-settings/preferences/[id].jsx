import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

// 계정 -> 글로벌 환경 설정
export default function Preferences() {
  return (
    <>
      <Title text={"글로벌 환경 설정 - 계정 관리 - 에어비앤비"} />
      <Header />
      <AppBackPageBtn />
      <main className="h-screen bnb_sm:mt-[80px]">글로벌 환경 설정 페이지</main>
      <NavApp />
      <Footer />
    </>
  );
}
