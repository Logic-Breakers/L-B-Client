import Link from "next/link";
import { useState } from "react";

// 헤더 오른쪽에 '당신의 공간을 에어비앤비하세요' & '호스트 모드로 전환' 버튼
export default function DoAirbnbBtn() {
  // 조건 설정하기 (로그인 기능 된 후 설정하기)
  // 로그인된 경우 : '호스트 모드로 전환'  link : '/hosting'
  // 비로그인인 경우 : '당신의 공간을 에어비앤비하세요'  link : '/host/home'

  return (
    <Link
      href="/host/homes"
      className="px-[12px] py-[8px] hover:bg-gray-100 hover:rounded-[30px] cursor-pointer"
    >
      <div>당신의 공간을 에어비앤비하세요</div>
    </Link>
  );
}
