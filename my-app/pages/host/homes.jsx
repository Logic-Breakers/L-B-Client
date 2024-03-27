import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavApp from "@/components/Header/Nav/NavApp";

export default function HostHomes() {
  return (
    <>
      <Title text={"에어비앤비 숙소 호스트가 되어보세요"} />
      <Header />
      <main className="h-screen">당신의 공간을 에어비앤비하세요 페이지</main>
      <NavApp />
      <Footer />
    </>
  );
}
