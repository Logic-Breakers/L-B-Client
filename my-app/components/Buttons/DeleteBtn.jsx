export default function DeleteBtn({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-md px-[6px] rounded-full bg-[#fff] active:scale-[0.9] duration-[0.1s] hover:shadow-ccc`}
    >
      ✕
    </button>
  );
}
