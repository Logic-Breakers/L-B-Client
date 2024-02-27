export default function BlackBtn({ type, onClick, text }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-black text-white px-[24px] py-[14px] rounded-lg flex flex-row justify-center items-center active:scale-95 duration-[0.1s]"
    >
      {text}
    </button>
  );
}
