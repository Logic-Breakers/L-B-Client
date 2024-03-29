// Rooms 페이지의 호스트 밑의 하이라이트 아이템
export default function RoomsHighlightItem({ icon, title, detail }) {
  return (
    <div className="flex flex-row items-center space-x-6 py-2">
      <div className="text-3xl w-[40px] flex flex-row justify-center items-center">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-[#5e5e5e]">{detail}</div>
      </div>
    </div>
  );
}
