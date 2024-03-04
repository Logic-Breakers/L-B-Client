import axios from "axios";

// 메인 페이지 헤더 하단에 있는 카테고리
export default function HeaderFilterItem({ icon, text }) {
  // 카테고리별 숙소 조회
  const getCategoryData = async () => {
    const underlineText = text.replaceAll(" ", "_");
    console.log(underlineText, "버튼을 누르셨습니다.");
    try {
      // 서버 api 호출
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}
        /stays/category?page=1&size=20&categoryName=${underlineText}`,
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
      alert(`${underlineText} 데이터를 불러오는데 실패했습니다.`);
    }
  };

  return (
    <div
      onClick={getCategoryData}
      className="flex-shrink-0 mt-3 pb-3 decoration-2 cursor-pointer text-[#8A8A8A] hover:text-gray-600 hover:underline hover:decoration-gray-200 hover:underline-offset-[12px] active:scale-[0.95] duration-[0.1s]"
    >
      <div className="flex flex-col items-center space-y-1 min-w-[56px]">
        <div className="text-xl">{icon}</div>
        <div className="text-xs">{text}</div>
      </div>
    </div>
  );
}
