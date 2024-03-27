export default function RedBtn({ onClick, type, text, width, textSize }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-${width} h-11 px-4 rounded-lg duration-[0.1s] active:scale-[0.95]  bg-[var(--brand-color)] hover:bg-[var(--brand-color-hover)] active:bg-[var(--brand-color)] text-white text-${textSize} font-semibold`}
    >
      {text}
    </button>
  );
}
