import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

// 호스트 추천 페이지
export default function Refer() {
  return (
    <>
      <Title text={"호스트 추천 - 에어비앤비"} />
      <Header />
      <AppBackPageBtn />
      <main className="h-screen bnb_sm:mt-[80px]">호스트 추천 페이지</main>
      <NavApp />
      <Footer />
    </>
  );
}
