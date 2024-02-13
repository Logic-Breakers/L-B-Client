export default function RoomsHighlightItem({ icon, title, detail }) {
  return (
    <div className="flex flex-row items-center space-x-6 py-2">
      <div className="text-3xl w-[40px] flex flex-row justify-center items-center">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-gray-400">{detail}</div>
      </div>
    </div>
  );
}
