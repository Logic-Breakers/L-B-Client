import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

// 계정 -> 추천 크레딧 및 쿠폰
export default function Invite() {
  return (
    <>
      <Title text={"에어비앤비 쿠폰 코드: 친구를 초대하세요"} />
      <Header />
      <AppBackPageBtn />
      <main className="h-screen bnb_sm:mt-[80px]">
        추천 크레딧 및 쿠폰 페이지
      </main>
      <NavApp />
      <Footer />
    </>
  );
}
