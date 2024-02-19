import HostingNoItem from "./HostingNoItem";

// hosting 페이지에서 예약의 '현재 호스팅 중' 버튼이 활성화 된 경우, 보여주는 아이템
export default function HostingReviewItem() {
  return <HostingNoItem text={"작성할 게스트 후기가 없습니다."} />;
}
