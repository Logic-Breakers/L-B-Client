import axios from "axios";
import Link from "next/link";
import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import MainPageHeaderApp from "@/components/Header/MainPageHeaderApp";
import LikedBtn from "@/components/Buttons/LikedBtn";
import NavApp from "@/components/Header/Nav/NavApp";

import { useEffect } from "react";

export default function Home() {
  // 기존의 방식대로면 전체 숙소 조회가 아닌 맨 첫 번째 카테고리의 데이터를 불러와야함
  // 전체 숙소 조회
  const getAllHouseData = async () => {
    try {
      // 서버 api 호출
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/stays?page={1}&size={1}`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("전체 숙소 조회 데이터를 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    getAllHouseData();
  }, []);

  return (
    <>
      <Title text={"에어비앤비 | 휴가지 숙소, 통나무집, 해변가 주택 등"} />
      <Header fixed />
      <MainPageHeaderApp />
      <main className="bnb_md_xl:mt-[270px] bnb_sm:mt-[100px] mb-[20px] bnb_sm:mb-[80px] bnb_xl:px-[80px] bnb_md_lg:px-[40px] bnb_sm:px-[24px] grid bnb_sm_md:grid-cols-2 bnb_lg:grid-cols-3 bnb_xl_2xl:grid-cols-4 bnb_3xl:grid-cols-5 gap-x-10 gap-y-6">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
          <div key={index} className="min-w-[240px] cursor-pointer relative">
            <Link href={"/rooms/1"}>
              <div className="bg-gray-200 aspect-square rounded-xl" />
              <div className="my-2">
                <div className="flex flex-row justify-between">
                  <div className="font-semibold">한국 양평군</div>
                  <div className="font-light">
                    <span className="mr-1">★</span>
                    <span>4.84</span>
                  </div>
                </div>
                <div className="flex flex-row text-gray-500">
                  <div>2월 12일</div>
                  <span>~</span>
                  <div>3월 11일</div>
                </div>
              </div>
              <div>
                <span>₩</span>
                <span className="mr-1 font-medium">497,553</span>
                <span className="font-[400]">/박</span>
              </div>
            </Link>
            <div className="absolute top-3 right-4">
              <LikedBtn />
            </div>
          </div>
        ))}
      </main>
      <NavApp />
    </>
  );
}
