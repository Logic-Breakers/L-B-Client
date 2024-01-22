import HostingNoItem from "./HostingNoItem";

// hosting 페이지에서 예약의 '현재 호스팅 중' 버튼이 활성화 된 경우, 보여주는 아이템
export default function HostingPresentHostingItem() {
  return <HostingNoItem text={"현재 숙박 중인 게스트가 없습니다."} />;
}
