import NewsModal from "@/components/Header/Modals/NewsModal";
import { useState } from "react";

// '새소식' 메뉴 리스트 아이템
export default function NewsItem() {
  const [showNews, setShowNews] = useState(false);

  const openNewsModal = (event) => {
    event.stopPropagation();
    setShowNews(true);
  };

  const closeNewsModal = () => {
    setShowNews(false);
  };
  return (
    <>
      <li
        onClick={openNewsModal}
        className="px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100 border-b-[1px] border-solid border-[#DDDDDD] font-[500]"
      >
        <span>News</span>
        <span className="text-[12px] bg-[#e52448] text-white px-[6px] py-[1px] ml-[8px] rounded-[4px]">
          새소식
        </span>
      </li>
      {showNews && <NewsModal closeNewsModal={closeNewsModal} />}
    </>
  );
}

//
