export default function HeaderFilterItem({ icon, text }) {
  return (
    <div className="flex-shrink-0 mt-3 pb-3 underline decoration-2 underline-offset-[12px] cursor-pointer text-[#8A8A8A]">
      <div className="flex flex-col items-center space-y-1 min-w-[56px]">
        <div className="text-xl">{icon}</div>
        <div className="text-xs">{text}</div>
      </div>
    </div>
  );
}
