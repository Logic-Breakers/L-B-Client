export default function CloseModalBtn({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-[16px] px-[8px] py-[2px] rounded-[20px] hover:shadow-inner hover:bg-[#F7F7F7]`}
    >
      ✕
    </button>
  );
}
