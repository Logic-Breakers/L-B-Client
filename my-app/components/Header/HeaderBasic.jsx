import Link from "next/link";
import Nav from "./Nav/NavWeb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

// 계정관리, 위시리스트, 메시지, 여행 페이지 등에 사용되는 헤더
export default function HeaderBasic() {
  return (
    <header className="bnb_sm:hidden bg-[#fff] border-b-[1px] border-solid border-[#eeeeee] h-[80px] bnb_xl:px-[80px] px-[40px] flex flex-row justify-between items-center fixed top-0 left-0 w-[100%] z-[100]">
      <Link
        href={"/"}
        className="flex flex-row justify-center items-center gap-[4px] text-[var(--brand-color)] font-[600]"
      >
        <span className="text-[36px]">
          <FontAwesomeIcon icon={faAirbnb} />
        </span>
        <span className="hidden bnb_xl:block text-[24px] font-[600]">
          airbnb
        </span>
      </Link>

      <Nav />
    </header>
  );
}
