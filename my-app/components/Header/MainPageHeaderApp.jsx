import HeaderCategory from "./CategoryItem/HeaderCategory";

// 앱 크기일 때 (w < 744px) 메인 페이지의 헤더
export default function MainPageHeaderApp({ getCategoryData, category }) {
  return (
    <div className="hidden bnb_sm:block fixed top-0 left-0 w-full bg-[#fff] shadow-sm z-[100]">
      <HeaderCategory getCategoryData={getCategoryData} category={category} />
    </div>
  );
}
