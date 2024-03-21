import axios from "axios";
import Link from "next/link";
import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import MainPageHeaderApp from "@/components/Header/MainPageHeaderApp";
import LikedBtn from "@/components/Buttons/LikedBtn";
import NavApp from "@/components/Header/Nav/NavApp";

import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryNameState, houseDataState } from "@/recoil/state";

// 카테고리별 데이터 가져오는 것 해야함!!
export default function Home() {
  const [categoryName, setCategoryName] = useRecoilState(categoryNameState);
  const [houseData, setHouseData] = useRecoilState(houseDataState);

  // 전체 숙소 조회
  const getAllHouseData = async () => {
    try {
      // 서버 api 호출
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/stays?page=1&size=20`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      setHouseData(response.data);
      console.log(response.data);
      alert("전체 숙소 데이터를 가져왔습니다.");
    } catch (error) {
      console.log(error);
      alert("전체 숙소 조회 데이터를 불러오는데 실패했습니다.");
    }
  };

  // 페이지가 로딩되거나, category값이 변경될 경우, 데이터 함수를 호출한다.
  useEffect(() => {
    if (categoryName === "all") {
      getAllHouseData();
    } else {
      // 카테고리 누른 상태에서 새로고침 한 경우, 카테고리별 데이터 불러오기
    }
  }, [categoryName]);

  return (
    <>
      <Title text={"에어비앤비 | 휴가지 숙소, 통나무집, 해변가 주택 등"} />
      <Header fixed />
      <MainPageHeaderApp />
      <main className="bnb_md_xl:mt-[270px] bnb_sm:mt-[100px] mb-[20px] bnb_sm:mb-[80px] bnb_xl:px-[80px] bnb_md_lg:px-[40px] bnb_sm:px-[24px] grid bnb_sm_md:grid-cols-2 bnb_lg:grid-cols-3 bnb_xl_2xl:grid-cols-4 bnb_3xl:grid-cols-5 gap-x-10 gap-y-6">
        {houseData?.map((el) => (
          <div key={el.id} className="min-w-[240px] cursor-pointer relative">
            <Link href={`/rooms/${el.id}`}>
              <div className="bg-gray-200 aspect-square rounded-xl" />
              <div className="my-2">
                <div className="flex flex-row justify-between">
                  <div className="font-semibold">{el.houseName}</div>
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
