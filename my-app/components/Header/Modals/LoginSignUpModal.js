export default function LoginSignUpModal ({closeLoginModal}) {
    const handleSubmit = (event) => {
        event.preventDefault();

        // 서버로 로그인 & 회원가입 요청보내기
    }


  return (
    <div>
      {/* 로그인 & 회원가입 내용 */}
      {/* w-[568px] h-[746px] */}
      <form onSubmit={handleSubmit} className="border-[1px] border-solid border-black w-[568px] h-[746px] z-[1000] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] rounded-[12px]">
        <div>
          <button type="button" onClick={closeLoginModal} className={`text-[16px] px-[8px] py-[2px] rounded-[20px] hover:shadow-inner hover:bg-[#F7F7F7] mt-[20px]`}>
            ✕
          </button>
          <div>로그인 또는 회원 가입</div>
        </div>
        <div>
          <h3>에어비앤비에 오신 것을 환영합니다.</h3>
          <div>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</div>
        </div>
        <button type='submit'>
          제출
        </button>
      </form>

      
      {/* 모달 밖 (어두운 배경) */}
      <div onClick={closeLoginModal} className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)] cursor-default">
      </div>
    </div>
  );
};
