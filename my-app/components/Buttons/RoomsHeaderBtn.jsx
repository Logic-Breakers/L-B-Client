// 해당 버튼을 누르면 페이지의 해당 내용의 위치로 이동한다.
export default function RoomsHeaderBtn({ text, scrollRef }) {
  const scrollToItem = () => {
    if (text === "사진") {
      scrollRef.current[0].scrollIntoView({ behavior: "smooth" });
    }
    if (text === "편의시설") {
      scrollRef.current[1].scrollIntoView({ behavior: "smooth" });
    }
    if (text === "후기") {
      scrollRef.current[2].scrollIntoView({ behavior: "smooth" });
    }
    if (text === "위치") {
      scrollRef.current[3].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToItem}
      type="button"
      className="py-7 text-lg font-semibold text-gray-500 hover:text-gray-700 active:scale-[0.95] duration-[0.1s] hover:underline underline-offset-[30px] decoration-4 "
    >
      {text}
    </button>
  );
}
