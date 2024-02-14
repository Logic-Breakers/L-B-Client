// Rooms 페이지의 숙소 편의시설 아이템
export default function RoomsFacilitiesItem({ icon, text }) {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="text-2xl">{icon}</div>
      <div className="text-lg">{text}</div>
    </div>
  );
}
