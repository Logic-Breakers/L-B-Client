export default function HeaderCenterTopBtn({ onClick, state, text }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-4 py-2 rounded-full text-md ${
        state
          ? "text-black font-medium"
          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      }`}
    >
      {text}
    </button>
  );
}
