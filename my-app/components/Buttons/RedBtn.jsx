export default function RedBtn({ onClick, type, text, width, hight, size }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-${width} h-${hight} rounded-lg duration-[0.1s] active:scale-[0.95]  bg-[var(--brand-color)] hover:bg-[var(--brand-color-hover)] active:bg-[var(--brand-color)] text-white text-${size} font-semibold`}
    >
      {text}
    </button>
  );
}
