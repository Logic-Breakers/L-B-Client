import Link from "next/link";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import HeaderBasic from "@/components/Header/HeaderBasic";
import NavApp from "@/components/Header/Nav/NavApp";
import HostingPresentHostingItem from "@/components/Hosting/indexPage/HostingPresentHostingItem";
import HostingReservationItem from "@/components/Hosting/indexPage/HostingReservationItem";
import HostingReviewItem from "@/components/Hosting/indexPage/HostingReviewItem";
import { useState, useEffect } from "react";

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

  // 호스트가 등록한 숙소 전체 조회
  // hostId 안에 id, houseName, createAt 있으면 좋겠음.
  const getDataAllHouse = async () => {
    try {
      const allHouseData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/example/api`,
        {
          headers: {
            // Authorization : "Bearer " + localStorage.getItem("Authorization"),
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log(allHouseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getDataAllHouse()
  }, []);

  return (
    <>
      <Title text={"호스트 알림판 - Airbnb"} />
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
            {/* 서버로부터 등록한 전체 숙소 데이터 가져오기 */}
            <div className="mt-2 mb-6 py-6 overflow-x-scroll flex flex-row justify-between space-x-6 ">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 aspect-square w-[250px]"
                >
                  <div className="bg-gray-300 aspect-square rounded-md mb-2" />
                  <div className="font-semibold">숙소 이름1</div>
                  <div className="text-gray-600">
                    <span>등록일 : </span>
                    <span>2024년 1월 1일</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-10 pb-16 bnb_sm:pb-24">
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
                호스팅 예정
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
              {/* 밑 컴포넌트 3가지 수정하기 */}
              {/* 불러온 데이터가 있으면 데이터를 보여주고, 없으면 <HostingNoItem/> 보여주기 */}
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
