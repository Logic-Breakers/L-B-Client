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

// HeaderCategoryItem.jsx 에서 전체보기와 카테고리별 숙소 데이터 가져온다.
export default function Home() {
  const [categoryName, setCategoryName] = useRecoilState(categoryNameState);
  const houseData = useRecoilValue(houseDataState);

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
