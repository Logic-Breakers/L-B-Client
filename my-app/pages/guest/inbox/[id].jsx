import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import NavApp from "@/components/Header/Nav/NavApp";

export default function GuestInbox() {
  return (
    <>
      <Title text={"메시지 • 에어비앤비"} />
      <Header fixed />
      <NavApp />
    </>
  );
}
