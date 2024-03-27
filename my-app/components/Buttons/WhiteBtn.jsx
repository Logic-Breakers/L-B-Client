export default function WhiteBtn({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="border-black border-solid border-[1px] bnb_sm:w-full w-fit h-11 px-6 rounded-lg hover:bg-[#F7F7F7] active:scale-[0.95] duration-[0.1s] font-semibold"
    >
      {text}
    </button>
  );
}
