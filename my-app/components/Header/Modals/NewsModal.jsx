import Developer from "@/components/Developer/Developer";

export default function NewsModal({ closeNewsModal }) {
  // 상위 컴포넌트로 이벤트 전파 방지 (버블링 방지)
  const bubblingDepend = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      {/* News 모달 내용 */}
      <div
        onClick={bubblingDepend}
        className="bg-[#fff] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[12px] w-[615px] h-[400px] z-[1000] p-[20px]"
      >
        <button
          type="button"
          onClick={closeNewsModal}
          className={`text-[16px] px-[8px] py-[2px] rounded-[20px] hover:shadow-inner hover:bg-[#F7F7F7]`}
        >
          ✕
        </button>

        <div className="flex flex-row justify-center items-center text-[30px] my-[20px] bg-[#e52448] text-white px-[6px] py-[1px] rounded-[12px] w-[100px]">
          새소식
        </div>

        <h3 className="text-[24px] mb-[20px] font-[500]">Open Airbnb Clone</h3>

        <div className="text-[18px]">
          이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는
          사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에
          당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한
          사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지
          모르지만 사실입니다.
        </div>

        <div className="flex flex-row justify-end items-center mt-[40px] gap-[20px]">
          <div>Developer Github</div>
          <Developer />
        </div>
      </div>

      {/* 모달 밖 (어두운 배경) */}
      <div
        onClick={closeNewsModal}
        className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)]"
      ></div>
    </>
  );
}
