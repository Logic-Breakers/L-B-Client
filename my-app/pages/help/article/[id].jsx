import Header from "@/components/Header/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

export default function Article() {
  return (
    <>
      <Title text={"이웃 민원 지원 서비스 - 에어비앤비 도움말 센터"} />
      <Header />
      <main className="h-screen">help article page</main>
      <NavApp />
      <Footer />
    </>
  );
}
