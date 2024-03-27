import Link from "next/link";
import { useState, useEffect } from "react";

// 헤더 오른쪽에 '당신의 공간을 에어비앤비하세요' & '호스트 모드로 전환' 버튼
// 로그인 된 경우 : '호스트 모드로 전환' 버튼
// 로그인 안 된 경우 : '당신의 공간을 에어비앤비하세요' 버튼
export default function DoAirbnbBtn() {
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

  return isAuth ? (
    <Link
      href="/hosting/1"
      className="px-[12px] py-[8px] hover:bg-gray-100 hover:rounded-[30px] font-medium cursor-pointer"
    >
      <div>호스트 모드로 전환</div>
    </Link>
  ) : (
    <Link
      href="/host/homes"
      className="px-[12px] py-[8px] hover:bg-gray-100 hover:rounded-[30px] font-medium cursor-pointer"
    >
      <div>당신의 공간을 에어비앤비하세요</div>
    </Link>
  );
}
