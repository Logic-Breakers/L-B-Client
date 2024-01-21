// Under Line이 없는 메뉴바 리스트 아이템
export default function BasicItem({
  text,
  font_weight = 400,
  font_color = "black",
}) {
  return (
    <li className="px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100">
      <span className={`font-[${font_weight}] text-[${font_color}]`}>
        {text}
      </span>
    </li>
  );
}
