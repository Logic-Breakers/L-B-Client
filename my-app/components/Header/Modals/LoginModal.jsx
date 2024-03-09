import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import RedBtn from "@/components/Buttons/RedBtn";
import GoogleLoginBtn from "@/components/Buttons/GoogleLoginBtn";
import CloseModalBtn from "@/components/Buttons/CloseModalBtn";

// 로그인 모달
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
      email,
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

      const acToken = response.data.accessToken;
      const reToken = response.data.refreshToken;

      localStorage.setItem("acToken", acToken);
      localStorage.setItem("reToken", reToken);

      // 로그인 성공하면 페이지 reload 함
      router.reload();
    } catch (error) {
      console.log(error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    // 상위 컴포넌트로 이벤트 전파 방지 (버블링 방지)
    <div onClick={(event) => event.stopPropagation()}>
      {/* 모달 바깥 부분 */}
      <div
        onClick={closeLoginModal}
        className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)] cursor-default"
      >
        {/* 로그인 내용 */}
        <section className="w-[568px] max-h-[746px] z-[1000] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[var(--modal-inner-bg)] rounded-lg cursor-default">
          <header className="flex flex-row justify-between items-center h-[63px] px-[24px] border-b-[1px] border-solid border-[#DDDDDD]">
            <CloseModalBtn onClick={closeLoginModal} />
            <h3 className="pl-[58px] text-[16px] font-[600]">로그인</h3>
            <Link href={"/signup"}>
              <RedBtn
                type={"button"}
                text={"회원가입"}
                width={"fit"}
                textSize={"md"}
              />
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

              <div className="mt-4">
                <RedBtn
                  onClick={onClickLoginBtn}
                  type={"submit"}
                  text={"로그인"}
                  width={"full"}
                  textSize={"md"}
                />
              </div>
            </form>
          </section>

          <section className="my-[20px] px-[24px]">
            <div className="my-6 border-b-[1px] border-[#cccccc] relative">
              <span className="absolute top-[-7px] left-[230px] bg-[#fff] px-5 text-xs text-gray-500">
                또는
              </span>
            </div>
            <GoogleLoginBtn />
          </section>
        </section>
      </div>
    </div>
  );
}
