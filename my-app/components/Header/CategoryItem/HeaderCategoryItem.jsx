// 메인 페이지 헤더 하단에 있는 카테고리
export default function HeaderCategoryItem({
  icon,
  text,
  value,
  getCategoryData,
  category,
}) {
  return (
    <div
      onClick={getCategoryData}
      className={`flex-shrink-0 mt-3 pb-3 decoration-2 ${
        category === value
          ? "text-black font-bold decoration underline underline-offset-[12px] cursor-default"
          : "cursor-pointer text-[#8A8A8A] hover:text-gray-600 hover:underline hover:decoration-gray-300 hover:underline-offset-[12px] active:scale-[0.95] duration-[0.1s] "
      }`}
    >
      <div className="flex flex-col items-center space-y-1 pointer-events-none">
        <div className="text-xl">{icon}</div>
        <div className="text-xs">{text}</div>
      </div>
    </div>
  );
}
