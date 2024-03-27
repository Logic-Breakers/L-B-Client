import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

export default function Help() {
  return (
    <>
      <Title text={"고객서비스 - 에어비앤비 도움말 센터"} />
      <Header />
      <main className="h-screen">도움말 센터 페이지</main>
      <NavApp />
      <Footer />
    </>
  );
}
