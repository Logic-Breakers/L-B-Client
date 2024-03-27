import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

// 계정 -> 결제 및 대금 수령
export default function PaymentMethods() {
  return (
    <>
      <Title text={"결제 및 대금 수령 방법 - 계정 관리 - 에어비앤비"} />
      <Header />
      <AppBackPageBtn />
      <main className="h-screen bnb_sm:mt-[80px]">
        결제 및 대금 수령 페이지
      </main>
      <NavApp />
      <Footer />
    </>
  );
}
