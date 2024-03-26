import HeaderCategoryItem from "./HeaderCategoryItem";
import ScrollLeftArrowBtn from "@/components/Buttons/ScrollLeftArrowBtn";
import ScrollRightArrowBtn from "@/components/Buttons/ScrollRightArrowBtn";
import FilterBtn from "@/components/Header/Nav/FilterBtn";

import CategoryItemData from "@/components/Datas/CategoryItemData";

// 메인페이지 헤더 하단에 있는 여러 카테고리들과 필터버튼
export default function HeaderCategory({ getCategoryData, category }) {
  const onClickScrollLeft = () => {
    const scrollTarget = document.querySelector("#scrollTarget");
    scrollTarget.scrollTo({
      behavior: "smooth",
      left: scrollTarget.scrollLeft - scrollTarget.offsetWidth,
    });
  };

  const onClickScrollRight = () => {
    const scrollTarget = document.querySelector("#scrollTarget");
    scrollTarget.scrollTo({
      behavior: "smooth",
      left: scrollTarget.scrollLeft + scrollTarget.offsetWidth,
    });
  };

  return (
    <section className="bnb_xl:px-[80px] px-[40px] border-t-[1px] border-solid border-[#eeeeee] pt-3 flex flex-row justify-between items-center space-x-4">
      <div className="mr-2">
        <ScrollLeftArrowBtn onClickScrollLeft={onClickScrollLeft} />
      </div>
      {/* 카테고리 아이템들 */}
      <section
        id="scrollTarget"
        className="overflow-x-scroll scrollbar-hide flex flex-row space-x-8"
      >
        {CategoryItemData.map((el, index) => (
          <HeaderCategoryItem
            key={index}
            icon={el.icon}
            text={el.text}
            value={el.value}
            getCategoryData={getCategoryData}
            category={category}
          />
        ))}
      </section>

      <div className="flex flex-row justify-between items-center gap-x-8">
        {/* 오른쪽 화살표 버튼 */}
        <div className="ml-2">
          <ScrollRightArrowBtn onClickScrollRight={onClickScrollRight} />
        </div>

        {/* 필터 모달 버튼 */}
        <FilterBtn />
      </div>
    </section>
  );
}
