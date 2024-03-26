import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// 스크롤 왼쪽 화살표 버튼
export default function ScrollLeftArrowBtn({ onClickScrollLeft }) {
  return (
    <button
      onClick={onClickScrollLeft}
      type="button"
      className="w-[27px] h-[27px] rounded-full border-solid border-[1px] border-gray-300 hover:scale-[1.05] hover:shadow-cc active:scale-100 duration-[0.1s] "
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
}
