import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect } from "react";

// 헤더 왼쪽에 사용되는 로고
export default function Logo() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const acToken = localStorage.getItem("acToken");
    const reToken = localStorage.getItem("reToken");

    if (acToken && reToken) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  // 로그인 : 호스트 모드로 전환 (nav 크기 : 262.773px )
  // 비로그인 : 당신의 공간을 에어비앤비하세요. (nav 크기 : 340.63px )
  return isAuth ? (
    // 호스트 모드로 전환

    // bnb_lg: { min: "950px", max: "1127px" },
    // bnb_md_lg: { min: "744px", max: "1127px" },
    // bnb_xl: { min: "1128px" },
    // bnb_md_xl: { min: "744px" },
    // bnb_lg_xl: { min: "950px" },

    <Link
      href={"/"}
      className="flex flex-row items-center gap-[4px] text-[var(--brand-color)] font-bold bnb_lg_xl:w-[263px] "
    >
      <span className="text-[36px]">
        <FontAwesomeIcon icon={faAirbnb} />
      </span>
      <span className="hidden bnb_xl:block text-2xl font-semibold">airbnb</span>
    </Link>
  ) : (
    // 당신의 공간을 에어비앤비하세요.
    <Link
      href={"/"}
      className="flex flex-row items-center gap-[4px] text-[var(--brand-color)] font-bold bnb_xl:w-[341px] "
    >
      <span className="text-[36px]">
        <FontAwesomeIcon icon={faAirbnb} />
      </span>
      <span className="hidden bnb_xl:block text-2xl font-semibold">airbnb</span>
    </Link>
  );
}
