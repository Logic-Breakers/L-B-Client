import Link from "next/link";
import Nav from "./Nav/NavWeb";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

// 대부분 (계정관리, 위시리스트, 메시지, 여행 ...) 페이지에 사용되는 헤더
export default function Header() {
  const router = useRouter();

  // 숙소, 체험, 온라인 체험
  const [lodging, setLodging] = useState(true);
  const [experience, setExperience] = useState(false);
  const [onlineExperience, setOnlineExperience] = useState(false);

  const handleLodging = () => {
    setLodging(true);
    setExperience(false);
  };
  const handleExperience = () => {
    setLodging(false);
    setExperience(true);
  };

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

      {router.pathname === "/" ? (
        <section>
          <div className="space-x-1">
            <button
              onClick={handleLodging}
              type="button"
              className={`px-4 py-2 rounded-full text-md ${
                lodging
                  ? "text-black font-medium"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              숙소
            </button>
            <button
              onClick={handleExperience}
              type="button"
              className={`px-4 py-2 rounded-full text-md ${
                experience
                  ? "text-black font-medium"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              체험
            </button>
            <Link href={"/"}>
              <button
                type="button"
                className={`px-4 py-2 rounded-full text-md text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
              >
                온라인 체험
              </button>
            </Link>
          </div>
        </section>
      ) : null}

      <Nav />
    </header>
  );
}
