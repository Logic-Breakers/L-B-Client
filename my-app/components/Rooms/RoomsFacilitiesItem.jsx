export default function RoomsFacilitiesItem({ icon, text }) {
  return (
    <div className="flex flex-row items-center space-x-4 px-2">
      <div className="text-2xl">{icon}</div>
      <div className="text-lg">{text}</div>
    </div>
  );
}
