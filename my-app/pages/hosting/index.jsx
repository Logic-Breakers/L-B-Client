import Link from "next/link";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import HeaderBasic from "@/components/Header/HeaderBasic";
import NavApp from "@/components/Header/Nav/NavApp";
import HostingReservationItem from "@/components/Hosting/HostingReservationItem";
import HostingPresentHostingItem from "@/components/Hosting/HostingPresentHostingItem";
import HostingReviewItem from "@/components/Hosting/HostingReviewItem";

import { useState } from "react";

export default function Hosting() {
  const [reservation, setReservation] = useState(true);
  const [hosting, setHosting] = useState(false);
  const [review, setReview] = useState(false);

  const handleReservationBtn = () => {
    setReservation(true);
    setHosting(false);
    setReview(false);
  };
  const handleHostingBtn = () => {
    setReservation(false);
    setHosting(true);
    setReview(false);
  };
  const handleReviewBtn = () => {
    setReservation(false);
    setHosting(false);
    setReview(true);
  };

  return (
    <>
      <Title text={"호스트 알림판 - Aribnb"} />
      <HeaderBasic />
      <main className="flex flex-row justify-center w-full mt-[40px]">
        <div className="w-full bnb_md_xl:pt-[80px] bnb_lg_xl:px-[80px] bnb_md:px-[40px] bnb_sm:px-[24px]">
          <section className="flex flex-row justify-between items-center">
            {/* 나중에 서버로부터 유저 이름 가져오기 */}
            <h1 className="text-[32px] font-[500]">○○ 님, 반갑습니다!</h1>
            <Link href="/hosting/register">
              <button
                type="button"
                className="border-black border-solid border-[1px] px-4 py-1 rounded-md text-md hover:bg-[#F7F7F7]"
              >
                숙소 등록하기
              </button>
            </Link>
          </section>
          <section className="pt-10">
            <h2 className="text-2xl font-medium">숙소</h2>
            {/* 등록된 숙소를 누르면 해당 숙소 세부정보 사이트로 이동하도록 구현하기 */}
            <div className="mt-8 mb-6 grid gap-8 bnb_sm:grid-cols-1 bnb_md:grid-cols-2 bnb_lg:grid-cols-3 bnb_xl:grid-cols-4">
              <div>
                <div className="bg-gray-300 aspect-square rounded-md mb-2" />
                <div className="font-semibold">숙소 이름1</div>
                <div className="text-gray-600">등록일 : 2024년 1월 1일</div>
              </div>
              <div>
                <div className="bg-gray-300 aspect-square rounded-md mb-2" />
                <div className="font-semibold">숙소 이름2</div>
                <div className="text-gray-600">등록일 : 2024년 1월 2일</div>
              </div>
              <div>
                <div className="bg-gray-300 aspect-square rounded-md mb-2" />
                <div className="font-semibold">숙소 이름3</div>
                <div className="text-gray-600">등록일 : 2024년 1월 3일</div>
              </div>
              <div>
                <div className="bg-gray-300 aspect-square rounded-md mb-2" />
                <div className="font-semibold">숙소 이름4</div>
                <div className="text-gray-600">등록일 : 2024년 1월 4일</div>
              </div>
            </div>
          </section>

          <section className="pt-10 pb-16">
            <h2 className="text-2xl font-medium">예약</h2>
            <div className="mt-8 mb-6 flex flex-row items-center space-x-3">
              <button
                type="button"
                onClick={handleReservationBtn}
                className={`border-solid px-3 py-1 text-sm rounded-full ${
                  reservation
                    ? "bg-[#F7F7F7] border-2 border-black"
                    : "border-[1px] border-gray-300 hover:border-black transition-colors"
                }`}
              >
                호스팅 예약 중
              </button>
              <button
                type="button"
                onClick={handleHostingBtn}
                className={`border-solid px-3 py-1 text-sm rounded-full ${
                  hosting
                    ? "bg-[#F7F7F7] border-2 border-black"
                    : "border-[1px] border-gray-300 hover:border-black transition-colors"
                }`}
              >
                현재 호스팅 중
              </button>
              <button
                type="button"
                onClick={handleReviewBtn}
                className={`border-solid px-3 py-1 text-sm rounded-full ${
                  review
                    ? "bg-[#F7F7F7] border-2 border-black"
                    : "border-[1px] border-gray-300 hover:border-black transition-colors"
                }`}
              >
                작성할 후기
              </button>
            </div>
            <section>
              {reservation ? <HostingReservationItem /> : ""}
              {hosting ? <HostingPresentHostingItem /> : ""}
              {review ? <HostingReviewItem /> : ""}
            </section>
          </section>
        </div>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}

// 등록한 전체 숙소 정보 조회 시 가져오는 데이터
// {
//   "id" : 1,
//   "hostId" : 1,
//   "info" : "숙소 설명",  (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "categoryId" : 1,    (카테고리 id?) (필요 없을 듯, 특정 숙소 정보 조회시 필요할 듯)
//   "charge" : 200000,   (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "beds" : 1,          (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "bedrooms" : 1,      (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "bathrooms" : 1,     (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "propertyType" : "HOTEL", (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "country" : "대한민국",
//   "guest" : 2, (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "star" : 4.1, (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "address" : "제주특별자치도 제주시 중앙로 3221", (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//   "guestFavourite" : true, (숙소를 등록한 사람 입장에서는 필요 없을 듯)
//   "placeType" : "ROOM" (전체 숙소 정보 조회 말고 특정 숙소 정보 조회시 필요할 듯)
//  },

// --> 변경되면 좋을 듯
// {
//   "id" : 1,
//   "hostId" : 1,
//   "country" : "대한민국",
//   "createAt" : "2024년 1월 22일",
//  },
