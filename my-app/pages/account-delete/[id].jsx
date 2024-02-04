import Link from "next/link";
import Title from "@/components/Title";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faPersonCircleMinus } from "@fortawesome/free-solid-svg-icons";

export default function userDelete() {
  const router = useRouter();

  const onClickDeleteUser = async () => {
    // 변수에 저장하기 전에 authToken이 유효한지, (만료되지 않은지) 확인해야한다.
    // 만료되었으면 refreshToken으로 재발급해야한다.

    // 로컬스토리지에 저장한 토큰을 변수에 저장한다.
    // const authToken = localStorage.getItem("authToken");

    // 로그인한 상태이면 로그인 되면 true 자리에 authToken 넣기
    if (true) {
      // 회원탈퇴 재차 확인
      const deleteConfirm = window.confirm("정말로 회원 탈퇴하시겠습니까?");

      // 확인버튼 누른 경우
      if (deleteConfirm) {
        try {
          // 서버에 회원 탈퇴 요청 보내기
          const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${user_id}`,
            {
              headers: {
                // Authorization:
                // "Bearer " + localStorage.getItem("Authorization"),
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420",
              },
            }
          );

          // 회원 탈퇴 성공 시
          if (response.status === 204) {
            // 로컬 스토리지의 토큰 삭제
            // localStorage.removeItem("Authorization");

            // 회원 탈퇴 성공 알림
            alert("회원 탈퇴가 완료되었습니다.");

            // 메인 페이지로 이동
            router.push("/");
          } else {
            // 회원 탈퇴 실패 알림
            alert("회원 탈퇴에 실패했습니다.");
          }
        } catch (error) {
          // 에러 처리 알림
          alert("회원 탈퇴에 실패했습니다.");
        }
      }
    }
    // 로그인하지 않은 상태이면 (AuthToken이 없는 경우)
    else {
      alert("비로그인 상태입니다.");
    }
  };

  return (
    <>
      <Title text={"계정 탈퇴 - 에어비앤비"} />
      <Header />
      <main className="flex flex-row justify-center items-center w-full min-h-screen">
        <div className="w-[500px] bnb_sm:px-[24px]">
          <div className="mb-10 space-y-2">
            <h1 className="text-[32px] font-[500]">회원 탈퇴</h1>
            <h2 className="text-xl text-gray-500 ">
              정말로 회원 탈퇴하시겠습니까?
            </h2>
          </div>
          <section className="flex flex-row justify-center items-center space-x-4 ">
            <Link href={"/"}>
              <button className="px-4 py-2 rounded-md text-white bg-[var(--brand-color)] hover:bg-[var(--brand-color-hover)] active:bg-[var(--brand-color)] active:scale-95 duration-[0.1s] text-lg font-medium flex flex-row items-center space-x-2">
                <FontAwesomeIcon icon={faAirbnb} />
                <div>메인 페이지로</div>
              </button>
            </Link>
            <button
              onClick={onClickDeleteUser}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-200 active:scale-95 duration-[0.1s] text-gray-700 text-lg font-medium flex flex-row items-center space-x-2"
            >
              <FontAwesomeIcon icon={faPersonCircleMinus} />
              <div>회원 탈퇴</div>
            </button>
          </section>
        </div>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}
