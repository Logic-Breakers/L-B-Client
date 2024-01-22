import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";

// Hosting 페이지에 불러올 데이터가 없는 경우 보여주는 아이템
export default function HostingNoItem({ text }) {
  return (
    <div className="bg-[#F7F7F7] h-[200px] flex flex-col justify-center items-center rounded-md space-y-8">
      <FontAwesomeIcon icon={faFileCircleCheck} className="text-[32px]" />
      <div className="text-sm text-gray-600">{text}</div>
    </div>
  );
}
