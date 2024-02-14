import SeeMoreBtn from "../Buttons/SeeMoreBtn";

export default function RoomsNoticeItem({ title, info_1, info_2, info_3 }) {
  return (
    <div className="pt-6">
      <div className="font-semibold mb-3">{title}</div>
      <div className="text-gray-600">
        <div className="mb-3">{info_1}</div>
        <div className="mb-3">{info_2}</div>
        <div className="mb-3">{info_3}</div>
      </div>
      <SeeMoreBtn text={"더 보기"} mt={"2"} />
    </div>
  );
}
