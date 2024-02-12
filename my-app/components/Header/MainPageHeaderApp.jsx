import HeaderFilter from "./FilterItem/HeaderFilter";

export default function MainPageHeaderApp() {
  return (
    <div className="hidden bnb_sm:block fixed top-0 left-0 w-full bg-[#fff] shadow-sm">
      <HeaderFilter />
    </div>
  );
}
