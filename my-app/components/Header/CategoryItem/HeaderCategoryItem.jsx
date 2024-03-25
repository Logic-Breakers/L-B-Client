import axios from "axios";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { categoryNameState, houseDataState } from "@/recoil/state";

// 메인 페이지 헤더 하단에 있는 카테고리
export default function HeaderCategoryItem({ icon, text }) {
  const [categoryName, setCategoryName] = useRecoilState(categoryNameState);
  const [houseData, setHouseData] = useRecoilState(houseDataState);

  let categoryNameUnderline = text.replaceAll(" ", "_");
  // 카테고리별 숙소 조회
  const getCategoryData = async () => {
    console.log(categoryNameUnderline);
    // '전체보기'를 제외한 나머지 카테고리인 경우
    if (categoryNameState !== "전체보기") {
      console.log(categoryNameUnderline, "버튼을 누르셨습니다.");
      console.log("categoryName2 : ", categoryName);
      setCategoryName(categoryNameUnderline);
      console.log("categoryName3 : ", categoryName);

      try {
        // 서버 api 호출
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}
          /stays/category?page=1&size=20&categoryName=${categoryName}`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        // 기존값 초기화
        setHouseData([]);
        console.log(response);
        // 여기서 받은 데이터들과, category를 메인페이지의 상태 옮기기!
        // 카테고리가 '전체보기'인 경우, 전체 데이터를 보여주고, 나머지는 카테고리별로 보여주기
        setHouseData(response);
      } catch (error) {
        console.log(error);
        alert(`${categoryName} 데이터를 불러오는데 실패했습니다.`);
      }
      console.log("categoryName4 : ", categoryName);
    }

    // 카테고리가 '전체보기' 인 경우
    else {
      getAllHouseData();
    }
  };

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
      // alert("전체 숙소 조회 데이터를 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    if (categoryName === "전체보기") {
      // getAllHouseData();
      console.log("aa");
    } else {
      //
    }
  }, [categoryName]);

  return (
    <div
      onClick={getCategoryData}
      className={`flex-shrink-0 mt-3 pb-3 decoration-2 ${
        categoryName === categoryNameUnderline
          ? "text-black font-bold decoration underline underline-offset-[12px] cursor-default"
          : "cursor-pointer text-[#8A8A8A] hover:text-gray-600 hover:underline hover:decoration-gray-300 hover:underline-offset-[12px] active:scale-[0.95] duration-[0.1s] "
      }`}
    >
      <div className="flex flex-col items-center space-y-1">
        <div className="text-xl">{icon}</div>
        <div className="text-xs">{text}</div>
      </div>
    </div>
  );
}
