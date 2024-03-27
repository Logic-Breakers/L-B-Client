import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

// 유효성 검사 실패시 input 밑의 경고 문구
export default function Warning({ text }) {
  return (
    <div className="text-[12px] text-[#C13515] mt-[4px] mb-[14px]">
      <FontAwesomeIcon icon={faCircleExclamation} />
      <span className="ml-[8px]">{text}</span>
    </div>
  );
}
