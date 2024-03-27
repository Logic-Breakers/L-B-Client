import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import NavApp from "@/components/Header/Nav/NavApp";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";

export default function GuestInbox() {
  return (
    <>
      <Title text={"메시지 • 에어비앤비"} />
      <Header />
      <AppBackPageBtn />
      <main className="h-screen bnb_sm:mt-[80px]">메시지 페이지</main>
      <NavApp />
    </>
  );
}
