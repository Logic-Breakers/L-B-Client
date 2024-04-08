import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// 스크롤 오른쪽 화살표 버튼
export default function ArrowBtn({ onClick, direction }) {
  return (
    <button
      onClick={() => onClick(direction)}
      type="button"
      className="w-[27px] h-[27px] rounded-full hover:scale-[1.05] hover:shadow-cc active:scale-100 duration-[0.1s] "
    >
      {direction === "Left" ? (
        <FontAwesomeIcon icon={faAngleLeft} />
      ) : (
        <FontAwesomeIcon icon={faAngleRight} />
      )}
    </button>
  );
}
