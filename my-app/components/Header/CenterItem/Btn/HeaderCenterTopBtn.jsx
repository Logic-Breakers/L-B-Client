// 메인페이지 헤더 중앙에 있는 버튼들 (숙소, 체험, 온라인 체험)
export default function HeaderCenterTopBtn({ onClick, state, text }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-4 py-2 rounded-full text-md ${
        state
          ? "text-black font-semibold"
          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      }`}
    >
      {text}
    </button>
  );
}
