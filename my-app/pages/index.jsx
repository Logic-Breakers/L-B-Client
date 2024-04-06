import axios from "axios";
import Link from "next/link";
import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import MainPageHeaderApp from "@/components/Header/MainPageHeaderApp";
import LikedBtn from "@/components/Buttons/LikedBtn";
import NavApp from "@/components/Header/Nav/NavApp";

import { useState, useEffect } from "react";

export default function Home() {
  const [category, setCategory] = useState("전체보기");
  const [houseData, setHouseData] = useState([]);

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
      console.log(response);
      // setHouseData(response.data);
      alert("전체 숙소 데이터를 가져왔습니다.");
    } catch (error) {
      console.log(error);
      console.log("전체 숙소 조회 데이터를 불러오는데 실패했습니다.");
    }
  };

  // 카테고리별 숙소 조회
  const getCategoryData = async (event) => {
    let categoryNoUnderlineName = "";
    let categoryUnderlineName = "";

    // 완전 처음 페이지 들어온 경우
    // 카테고리 초기값으로 '전체보기'를 가진다.
    if (!event && !localStorage.getItem("category")) {
      categoryNoUnderlineName = "전체보기";
      categoryUnderlineName = categoryNoUnderlineName.replaceAll(" ", "_");
    }

    // 버튼을 누르지 않고, 페이지 새로고침 한 경우
    // 기존에 로컬스토리지에 저장한 카테고리를 가져온다.
    else if (!event) {
      categoryNoUnderlineName = localStorage.getItem("category");
      categoryUnderlineName = categoryNoUnderlineName.replaceAll(" ", "_");
    }

    // 카테고리 버튼 눌렸을 때
    else {
      categoryNoUnderlineName = event.target.innerText;
      categoryUnderlineName = categoryNoUnderlineName.replaceAll(" ", "_");
    }

    localStorage.setItem("category", categoryUnderlineName);
    const categoryStorage = localStorage.getItem("category");
    setCategory(categoryStorage);
    console.log("category : ", category);
    console.log("categoryStorage : ", categoryStorage);

    // '전체보기'를 제외한 나머지 카테고리인 경우
    if (categoryStorage !== "전체보기" && categoryStorage !== null) {
      try {
        // 서버 api 호출
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/stays/category?page=1&size=20&categoryName=${categoryStorage}`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        // 받은 데이터를 recoil로 보내고 메인페이지에서 펼쳐서 보여주기!
        console.log(response);
      } catch (error) {
        console.log(error);
        console.log(`${categoryStorage} 데이터를 불러오는데 실패했습니다.`);
      }
    }

    // 카테고리가 '전체보기' 인 경우
    else if (categoryStorage == "전체보기" && categoryStorage !== null) {
      getAllHouseData();
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <>
      <Title text={"에어비앤비 | 휴가지 숙소, 통나무집, 해변가 주택 등"} />
      <Header fixed getCategoryData={getCategoryData} category={category} />
      <MainPageHeaderApp
        getCategoryData={getCategoryData}
        category={category}
      />
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
                <span className="font-normal">/박</span>
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
