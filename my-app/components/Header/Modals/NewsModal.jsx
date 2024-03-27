import Developer from "@/components/Developer/Developer";
import CloseModalBtn from "@/components/Buttons/CloseModalBtn";

// 새소식 모달
export default function NewsModal({ closeNewsModal }) {
  return (
    <div>
      {/* News 모달 내용 */}
      <div
        // 상위 컴포넌트로 이벤트 전파 방지 (버블링 방지)
        onClick={(event) => event.stopPropagation()}
        className="bg-[#fff] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg w-[615px] z-[1000] p-[20px]"
      >
        <CloseModalBtn onClick={closeNewsModal} />

        <div className="flex flex-row justify-center items-center text-[30px] my-[20px] bg-[#e52448] text-white px-[10px] py-[1px] rounded-lg w-fit">
          새소식
        </div>

        <h3 className="text-[24px] mb-[20px] font-semibold">
          Open Airbnb Clone 2024
        </h3>

        <div className="text-[18px] font-medium">
          안녕하세요. <br />
          에어비앤비 클론코딩 2024에 오신 것을 격하게 환영합니다. 🙇‍♂️
        </div>

        <div className="flex flex-row justify-end items-center mt-[40px] gap-[20px]">
          <div>Developer Github</div>
          <Developer />
        </div>
      </div>

      {/* 모달 바깥 부분 */}
      <div
        onClick={closeNewsModal}
        className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)]"
      ></div>
    </div>
  );
}
