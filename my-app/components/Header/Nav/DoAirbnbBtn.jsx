import Link from "next/link";

// 헤더 오른쪽에 '당신의 공간을 에어비앤비하세요' 버튼
export default function DoAirbnbBtn() {
  return (
    <Link
      href="/host/homes"
      className="px-[12px] py-[8px] hover:bg-gray-100 hover:rounded-[30px] cursor-pointer"
    >
      <div>당신의 공간을 에어비앤비하세요</div>
    </Link>
  );
}
