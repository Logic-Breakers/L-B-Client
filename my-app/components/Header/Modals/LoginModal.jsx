import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import GoogleLoginBtn from "@/components/Buttons/GoogleLoginBtn";

// 기본적으로 로그인이 잘 되면, 토큰 저장하기
// 토큰 관리 잘되면, 유효성 검사 적용시키기
export default function LoginModal({ closeLoginModal }) {
  const router = useRouter();

  // 이메일, 비밀번호
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 유효성 검사
  const [isValid, setIsValid] = useState(false);

  // 이메일
  const onBlurEmail = (event) => {
    setEmail(event.target.value);
    console.log("이메일 : ", email);
  };

  // 비밀번호
  const onBlurPassword = (event) => {
    setPassword(event.target.value);
    console.log("비밀번호 : ", password);
  };

  // 로그인 버튼을 눌렸을 때
  const onClickLoginBtn = async () => {
    // 서버로 보낼 데이터
    const request = {
      username: email,
      password,
    };
    console.log(request);
    try {
      // 서버 api 호출
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log(response);

      // 로그인 성공하면 페이지 reload 함
      // router.reload();
    } catch (error) {
      console.log(error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    // 상위 컴포넌트로 이벤트 전파 방지 (버블링 방지)
    <div onClick={(event) => event.stopPropagation()}>
      {/* 로그인 내용 */}
      <section className="border-[1px] border-solid border-black w-[568px] max-h-[746px] z-[1000] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] rounded-[12px] cursor-default">
        <header className="flex flex-row justify-between items-center h-[63px] px-[24px] border-b-[1px] border-solid border-[#DDDDDD]">
          <button
            type="button"
            onClick={closeLoginModal}
            className={`text-[16px] px-[8px] py-[2px] rounded-[20px] hover:shadow-inner hover:bg-[#F7F7F7]`}
          >
            ✕
          </button>
          <h3 className="pl-[58px] text-[16px] font-[600]">로그인</h3>
          <Link href={"/signup"}>
            <button
              type="button"
              className="w-20 h-10 rounded-md text-white bg-[var(--brand-color)] hover:bg-[var(--brand-color-hover)] active:bg-[var(--brand-color)] active:scale-95 ease-in duration-[0.1s]"
            >
              회원가입
            </button>
          </Link>
        </header>
        <section className="mt-[30px] px-[24px]">
          <h3 className="text-[22px] font-[500] mb-[20px]">
            에어비앤비에 오신 것을 환영합니다.
          </h3>
          <form onSubmit={(event) => event.preventDefault()}>
            {/* 이메일 */}
            <input
              required
              type="email"
              onBlur={onBlurEmail}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="border-[1px] border-solid border-[#cccccc] w-full rounded-md h-[55px] px-4 appearance-none mb-2"
            ></input>

            {/* 비밀번호 */}
            <input
              required
              type="password"
              onBlur={onBlurPassword}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="password"
              className="border-[1px] border-solid border-[#cccccc] w-full rounded-md h-[55px] px-4 appearance-none"
            ></input>

            <button
              onClick={onClickLoginBtn}
              type="submit"
              className="w-full h-[45px] rounded-md text-white bg-[var(--brand-color)] hover:bg-[var(--brand-color-hover)] active:bg-[var(--brand-color)] active:scale-95 ease-in duration-[0.1s] mt-4"
            >
              로그인
            </button>
          </form>
        </section>

        <section className="my-[20px] px-[24px]">
          <div className="text-[12px] text-gray-500 flex flex-row justify-center items-center mb-[16px]">
            <div className="border-t-[1px] border-solid border-[#cccccc] w-[44%]"></div>
            <div className="px-[20px]">또는</div>
            <div className="border-t-[1px] border-solid border-[#cccccc] w-[44%]"></div>
          </div>
          <GoogleLoginBtn />
        </section>
      </section>

      {/* 모달 밖 (어두운 배경) */}
      <div
        onClick={closeLoginModal}
        className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)] cursor-default"
      ></div>
    </div>
  );
}