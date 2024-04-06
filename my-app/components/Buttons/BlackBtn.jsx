export default function BlackBtn({ type, onClick, text, px, py, textSize }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white text-${textSize} px-${px} py-${py} rounded-lg flex flex-row justify-center items-center active:scale-95 duration-[0.1s] font-bold`}
    >
      {text}
    </button>
  );
}
