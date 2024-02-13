export default function WhiteBtn({ onClick, text, width, px, py }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`border-black border-solid border-[1px] w-${width} px-${px} py-${py} rounded-lg hover:bg-[#F7F7F7] active:scale-[0.95] duration-[0.1s] font-semibold`}
    >
      {text}
    </button>
  );
}
