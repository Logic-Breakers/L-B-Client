import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

// 계정 -> 전문 호스팅 도구
export default function ProfessionalHosting() {
  return (
    <>
      <Title text={"전문 호스팅 - 계정 관리 - 에어비앤비"} />
      <Header />
      <AppBackPageBtn />
      <main className="h-screen bnb_sm:mt-[80px]">전문 호스팅 도구 페이지</main>
      <NavApp />
      <Footer />
    </>
  );
}
