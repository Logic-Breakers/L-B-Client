import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";

// 나중에 파일명을 동적으로 변환해야할 듯 (유저 id값마다 보여줘야하기에...)
export default function UserInfo() {
  return (
    <>
      <Title text={"게스트 프로필 - 에어비앤비"} />
      <AppBackPageBtn />
      <Header />
      <main className="h-screen bnb_sm:mt-[80px]">프로필 페이지</main>
      <NavApp />
      <Footer />
    </>
  );
}
