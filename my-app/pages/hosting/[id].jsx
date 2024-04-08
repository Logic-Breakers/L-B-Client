import Link from "next/link";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavApp from "@/components/Header/Nav/NavApp";

import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import WhiteBtn from "@/components/Buttons/WhiteBtn";
import DeleteBtn from "@/components/Buttons/DeleteBtn";
import HostingPresentHostingItem from "@/components/Hosting/indexPage/HostingPresentHostingItem";
import HostingReservationItem from "@/components/Hosting/indexPage/HostingReservationItem";
import HostingReviewItem from "@/components/Hosting/indexPage/HostingReviewItem";
import ArrowBtn from "@/components/Buttons/ArrowBtn";

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

  // 스크롤 버튼
  const onClickScrollBtn = (direction) => {
    // js 사용 말고 useRef를 사용해서도 구현가능하다.
    const scrollTarget = document.querySelector("#scrollTarget");
    // console.dir(scrollTarget.scrollLeft);
    const scrollAmount =
      direction === "Left"
        ? -scrollTarget.offsetWidth * 0.8
        : +scrollTarget.offsetWidth * 0.8;
    scrollTarget.scrollBy({
      behavior: "smooth",
      left: scrollAmount,
    });
  };

  // 호스트가 등록한 숙소 전체 조회
  // hostId 안에 id, houseName, createAt 있으면 좋겠음.
  const getDataAllHouse = async () => {
    try {
      const allHouseData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/example/api`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("acToken"),
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

  // 특정 유저가 등록한 숙소 데이터를 가져오면 삭제버튼의 기능도 구현하기
  // 화면에서 보여주는 것과, 삭제된 데이터를 제외하고
  const deleteHouse = (index) => {
    console.log("숙소 삭제 버튼 누름");
    console.log(index);
  };

  useEffect(() => {
    // getDataAllHouse()
  }, []);

  return (
    <>
      <Title text={"호스트 알림판 - Airbnb"} />
      <AppBackPageBtn />
      <Header fixed />
      <main className="flex flex-row justify-center w-full mt-[40px] bnb_sm:mt-[80px]">
        <div className="w-full bnb_md_xl:pt-[80px] bnb_lg_xl:px-[80px] bnb_md:px-[40px] bnb_sm:px-[24px]">
          <section className="flex flex-row justify-between items-center">
            {/* 나중에 서버로부터 유저 이름 가져오기 */}
            <h1 className="text-[32px] font-semibold">○○ 님, 반갑습니다!</h1>
            {/* 나중에 유저 id 입력하기 */}
            <Link href="/hosting/register/1">
              <WhiteBtn text={"숙소 등록하기"} px={"4"} />
            </Link>
          </section>
          <section className="pt-10">
            <h2 className="text-2xl font-bold">숙소</h2>
            <div className="flex flex-row items-center mt-2 mb-6 py-6">
              {/* 등록된 숙소를 누르면 해당 숙소 세부정보 사이트로 이동하도록 구현하기 */}
              {/* 서버로부터 등록한 전체 숙소 데이터 가져오기 */}
              <div className="mr-4">
                <ArrowBtn onClick={onClickScrollBtn} direction={"Left"} />
              </div>
              <div
                id="scrollTarget"
                className="overflow-x-scroll scrollbar-hide flex flex-row space-x-6 w-full "
              >
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 aspect-square w-[250px]"
                  >
                    <div className="absolute top-2 left-2">
                      <DeleteBtn onClick={() => deleteHouse(index)} />
                    </div>
                    <div className="bg-gray-300 aspect-square rounded-md mb-2" />
                    <div className="font-semibold">숙소 이름1</div>
                    <div className="text-gray-600">등록일 : 2024년 1월 1일</div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <ArrowBtn onClick={onClickScrollBtn} direction={"Right"} />
              </div>
            </div>
          </section>

          <section className="pt-10 pb-16 bnb_sm:pb-24">
            <h2 className="text-2xl font-bold">예약</h2>
            <div className="mt-8 mb-6 flex flex-row items-center space-x-3">
              <button
                type="button"
                onClick={handleReservationBtn}
                className={`border-solid px-3 py-1 text-sm rounded-full ${
                  reservation
                    ? "bg-[#F7F7F7] border-2 border-black font-bold"
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
                    ? "bg-[#F7F7F7] border-2 border-black font-bold"
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
                    ? "bg-[#F7F7F7] border-2 border-black font-bold"
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
