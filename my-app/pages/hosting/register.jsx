import Link from "next/link";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import HeaderBasic from "@/components/Header/HeaderBasic";
import NavApp from "@/components/Header/Nav/NavApp";

export default function Register() {
  return (
    <>
      <Title text={"호스팅 시작하기 - Aribnb"} />
      <HeaderBasic />
      <main className="flex flex-row justify-center w-full min-h-screen mt-[40px]">
        <div className="w-full bnb_md_xl:pt-[80px] bnb_lg_xl:px-[80px] bnb_md:px-[40px] bnb_sm:px-[24px]">
          <h1 className="text-[32px] font-[500]">호스팅 시작하기</h1>
          <section></section>
        </div>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}

// 숙소 등록시 입력해야 하는 데이터
// {
//   "info" : "숙소 설명",
//   "charge" : 200000,
//   "beds" : 1,
//   "bedrooms" : 1,
//   "bathrooms" : 1,
//   "propertyType" : "HOTEL",
//   "country" : "대한민국",
//   "guest" : 2,
//   "star" : 4.1,
//   "address" : "제주특별자치도 제주시 중앙로 3221",
//   "guestFavourite" : true,
//   "placeType" : "ROOM"
//  }

// 종류
// 게스트가 사용할 숙소 유형 (공간 전체, 방, 다인실)
// 주소 (숙소 위치)
// 숙소 기본정보 (게스트, 침실, 침대, 욕실)
// 숙소 편의시설 ()
// 숙소 사진 (에어비앤비에서는 최소 5장)
// 숙소 이름
// 숙소 설명
// 요금 (1박당)
