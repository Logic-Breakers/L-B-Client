export default function HeaderFilterItem({ icon, text }) {
  return (
    <div className="flex-shrink-0 mt-3 pb-3 decoration-2 cursor-pointer text-[#8A8A8A] hover:text-gray-600 hover:underline hover:decoration-gray-200 hover:underline-offset-[12px] active:scale-[0.95]">
      <div className="flex flex-col items-center space-y-1 min-w-[56px]">
        <div className="text-xl">{icon}</div>
        <div className="text-xs">{text}</div>
      </div>
    </div>
  );
}
