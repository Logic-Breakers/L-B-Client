import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import NavApp from "@/components/Header/Nav/NavApp";
import Footer from "@/components/Footer/Footer";

export default function ExperiencesOnline() {
  return (
    <>
      <Title text={"온라인 체험 • 에어비앤비"} />
      <Header />
      <AppBackPageBtn />
      <main className="h-screen bnb_sm:mt-[80px]">온라인 체험 페이지</main>
      <NavApp />
      <Footer />
    </>
  );
}
