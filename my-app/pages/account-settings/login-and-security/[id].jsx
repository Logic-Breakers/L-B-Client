import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AccountItemTitle from "@/components/Account/AccountItemTitle";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faDesktop } from "@fortawesome/free-solid-svg-icons";

// 계정 -> 로그인 및 보안
export default function LoginAndSecurity() {
  const [login, setLogin] = useState(true);
  const [loginRequest, setLoginRequest] = useState(false);
  const [access, setAccess] = useState(false);

  const onClickLoginBtn = () => {
    setLogin(true);
    setLoginRequest(false);
    setAccess(false);
  };

  const onClickRequestBtn = () => {
    setLogin(false);
    setLoginRequest(true);
    setAccess(false);
  };

  const onClickAccessBtn = () => {
    setLogin(false);
    setLoginRequest(false);
    setAccess(true);
  };

  return (
    <>
      <Title text={"로그인 및 보안 - 계정 관리 - 에어비앤비"}></Title>
      <Header fixed />
      <main className="bnb_md_xl:mt-[80px] flex flex-row w-full min-h-screen">
        <div className="w-[1048px] px-[24px] mx-auto bnb_sm:mt-[100px]">
          <AccountItemTitle
            title_route={"로그인 및 보안"}
            title_h2={"로그인 및 보안"}
          />
          <section className="flex flex-row justify-between items-center">
            <div className="flex space-x-6 bnb_xl:w-[596px] bnb_md_lg:w-[58%] bnb_sm:w-full border-b-[1px] border-solid ">
              <button
                onClick={onClickLoginBtn}
                type="button"
                className={`py-4 text-sm font-medium ${
                  login
                    ? "text-[#008489] underline underline-offset-[20px] decoration-[2px] font-bold"
                    : ""
                }`}
              >
                로그인
              </button>
              <button
                onClick={onClickRequestBtn}
                type="button"
                className={`py-4 text-sm font-medium ${
                  loginRequest
                    ? "text-[#008489] underline underline-offset-[20px] decoration-[2px] font-bold"
                    : ""
                }`}
              >
                로그인 요청
              </button>
              <button
                onClick={onClickAccessBtn}
                type="button"
                className={`py-4 text-sm font-medium ${
                  access
                    ? "text-[#008489] underline underline-offset-[20px] decoration-[2px] font-bold"
                    : ""
                }`}
              >
                접근 권한 공유
              </button>
            </div>
            <div className="border" />
          </section>
          <div className="flex flex-row justify-between">
            {/* 왼쪽 개인정보 변경 부분 */}
            <article className="bnb_xl:w-[596px] bnb_md_lg:w-[58%] bnb_sm:w-full">
              {login ? (
                <>
                  <section className="border-b-[1px] pb-[24px]">
                    <h3 className="text-2xl font-bold pt-[56px] pb-[48px]">
                      로그인
                    </h3>
                    <div className="flex flex-row justify-between items-start">
                      <div>
                        <div>비밀번호</div>
                        <div className="mt-[8px] text-gray-600 space-x-1">
                          최종 수정일: 3달 전
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-[#008489] font-bold hover:underline"
                      >
                        업데이트
                      </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold pt-[32px] pb-[24px]">
                      SNS 계정
                    </h3>
                    <div className="flex flex-row justify-between items-start py-[24px] border-b">
                      <div>
                        <div>페이스북</div>
                        <div className="mt-[8px] text-gray-600">
                          연결되지 않음
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-[#008489] font-bold hover:underline"
                      >
                        연결
                      </button>
                    </div>
                    <div className="flex flex-row justify-between items-start py-[24px] border-b">
                      <div>
                        <div>구글</div>
                        <div className="mt-[8px] text-gray-600">연결됨</div>
                      </div>
                      <button
                        type="button"
                        className="text-[#008489] font-bold hover:underline"
                      >
                        연결 해제
                      </button>
                    </div>
                  </section>

                  <section className="border-b-[1px] pb-[24px]">
                    <h3 className="text-2xl font-bold pt-[32px] pb-[24px]">
                      기기 접속 기록
                    </h3>
                    <div className="flex flex-row justify-between items-start pt-[24px]">
                      <div className="flex flex-row space-x-4">
                        <FontAwesomeIcon
                          icon={faDesktop}
                          className="text-[30px]"
                        />
                        <div>
                          <div>세션</div>
                          <div className="bg-gray-100 flex flex-row justify-center items-center text-[10px] font-medium w-fit px-2 py-1 rounded-md">
                            현재 세션
                          </div>
                          <div className="mt-[8px] text-gray-600 space-x-1">
                            <span>{new Date().toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-[#008489] font-bold hover:underline"
                      >
                        기기에서 로그아웃하기
                      </button>
                    </div>
                  </section>

                  <section className="border-b-[1px] pb-[24px] mb-[46px]">
                    <h3 className="text-2xl font-bold pt-[32px] pb-[24px]">
                      계정
                    </h3>
                    <div className="flex flex-row justify-between items-start pt-[24px]">
                      <div className="text-gray-600 space-x-1">
                        계정 비활성화
                      </div>
                      <button
                        type="button"
                        className="text-orange-600 hover:underline hover:text-[#008489] font-bold"
                      >
                        비활성화
                      </button>
                    </div>
                  </section>
                </>
              ) : (
                ""
              )}
            </article>

            {/* 오른쪽 상자 부분 */}
            <article className="bnb_sm:hidden bnb_xl:w-[334px] bnb_md_lg:w-[32%] border-[1px] border-solid border-[#DDDDDD] rounded-lg p-[24px] mb-[40px] h-fit">
              {login ? (
                <>
                  <section>
                    <FontAwesomeIcon
                      icon={faUserShield}
                      className="text-[36px] text-[#E21C5E]"
                    />
                    <div className="my-4 text-lg font-bold">
                      계정 보안을 강화하세요
                    </div>
                    <div className="mb-4">
                      <span className="text-md font-semibold mr-1">
                        계정 보안 수준:
                      </span>
                      <span className="text-gray-500 font-bold">낮음</span>
                    </div>
                    <div className="text-[#9a9a9a]">
                      에어비앤비는 더욱 안전한 커뮤니티를 만들기 위해 항상
                      노력하고 있으며, 보안을 위해 모든 계정을 확인하고
                      있습니다.
                    </div>
                    <div className="my-[32px] border-b-[1px]"></div>
                  </section>
                  <section>
                    <button
                      type="button"
                      className="flex flex-row justify-center items-center w-full h-12 bg-[#008489] font-bold text-white rounded-md border-none"
                    >
                      보안 등급 개선하기
                    </button>
                  </section>
                </>
              ) : (
                ""
              )}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
