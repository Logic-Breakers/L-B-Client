import HeaderCategoryItem from "./HeaderCategoryItem";
import ScrollArrowBtn from "@/components/Buttons/ScrollArrowBtn";
import FilterBtn from "@/components/Header/Nav/FilterBtn";

import HeaderCategoryItemData from "@/components/Datas/Header/HeaderCategoryItemData";

// 메인페이지 헤더 하단에 있는 여러 카테고리들과 필터버튼
export default function HeaderCategory() {
  return (
    <section className="bnb_xl:px-[80px] px-[40px] border-t-[1px] border-solid border-[#eeeeee] pt-3 flex flex-row justify-between items-center space-x-4">
      {/* 카테고리 아이템들 */}
      <section className="overflow-x-scroll scrollbar-hide flex flex-row space-x-8">
        {HeaderCategoryItemData.map((el, index) => (
          <HeaderCategoryItem key={index} icon={el.icon} text={el.text} />
        ))}
      </section>

      <div className="flex flex-row justify-between items-center gap-x-8">
        {/* 오른쪽 화살표 버튼 */}
        <ScrollArrowBtn />

        {/* 필터 모달 버튼 */}
        <FilterBtn />
      </div>
    </section>
  );
}
