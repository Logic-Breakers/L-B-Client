export default function FilterModalPropertyTypeBtn({ icon, text }) {
  return (
    <div className="flex flex-col justify-between p-4 h-[124px] border rounded-lg hover:border-black active:scale-[0.95] duration-[0.1s] cursor-pointer font-medium">
      <div className="mb-4 text-3xl">{icon}</div>
      <div>{text}</div>
    </div>
  );
}
