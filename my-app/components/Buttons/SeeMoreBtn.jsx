import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Rooms 페이지의 '더보기 >' & '자세히 읽어보기' 버튼
export default function SeeMoreBtn({ text, mt }) {
  return (
    <button
      type="button"
      className={`underline text-lg font-semibold mt-${mt}`}
    >
      <span className="mr-1">{text}</span>
      {text === "더 보기" ? <FontAwesomeIcon icon={faAngleRight} /> : null}
    </button>
  );
}
