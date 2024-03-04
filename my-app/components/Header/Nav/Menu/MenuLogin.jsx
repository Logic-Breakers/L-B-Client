import axios from "axios";
import Link from "next/link";
import NewsItem from "./items/NewsItem";
import BasicItem from "./items/BasicItem";
import CeilingBarItem from "./items/CeilingBarItem";
import { useRouter } from "next/router";

// 로그인 상태일 때 햄버거(bars) 버튼을 누르면 나타나는 메뉴 리스트
export default function MenuLogin() {
  const router = useRouter();

  const acToken = localStorage.getItem("acToken");
  const reToken = localStorage.getItem("reToken");

  // 로그아웃 버튼을 눌렸을 때
  const onClickLogOut = async () => {
    if (acToken) {
      // 서버로 보낼 데이터
      const request = {
        accessToken: acToken,
        refreshToken: reToken,
      };

      try {
        // 서버 api 호출
        // axios가 delete 요청에서도 data 옵션을 지원한다.
        // 대부분의 웹 서버는 delete 요청에서 요청 본문의 데이터를 무시하거나 지원하지 않을 수 있다.
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`,
          {
            data: request,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        localStorage.removeItem("acToken");
        localStorage.removeItem("reToken");

        // 로그아웃 성공하면 메인 페이지로 이동
        router.push("/");
      } catch (error) {
        console.log(error);
        alert("로그아웃을 실패했습니다.");
      }
    } else {
      alert("로그인 상태가 아닙니다.");
    }
  };

  return (
    acToken !== null && (
      <div className="block absolute top-[120%] right-0 shadow-xx rounded-[15px] bg-[#fff] hover:cursor-default">
        <ul
          className={`my-[8px] w-[250px] scroll flex flex-col justify-between text-left`}
        >
          <NewsItem />

          {/* 뒤에 유저의 id값 넣기 */}
          <Link href={"/guest/inbox/1"}>
            <BasicItem text={"메시지"} font_weight={500} />
          </Link>

          {/* 뒤에 유저의 id값 넣기 */}
          <Link href={"/trips/1"}>
            <BasicItem text={"여행"} font_weight={500} />
          </Link>

          {/* 뒤에 유저의 id값 넣기 */}
          <Link href={"/wishlists/1"}>
            <BasicItem text={"위시리스트"} font_weight={500} />
          </Link>

          {/* 뒤에 유저의 id값 넣기 */}
          <Link href={"/hosting/1"}>
            <CeilingBarItem text={"숙소 관리"} />
          </Link>

          {/* 뒤에 유저의 id값 넣기 */}
          <Link href={"/refer/1"}>
            <BasicItem
              text={"호스트 추천하기"}
              font_color={"var(--menu-gray-color)"}
            />
          </Link>

          {/* 뒤에 유저의 id값 넣기 */}
          <Link href={"/account-settings/1"}>
            <BasicItem text={"계정"} font_color={"var(--menu-gray-color)"} />
          </Link>

          {/* 뒤에 유저의 id값 넣기 */}
          <Link href={"/help/1"}>
            <CeilingBarItem text={"도움말 센터"} />
          </Link>

          <li
            onClick={onClickLogOut}
            className="px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100"
          >
            <span className={`font-[400] text-[var(--menu-gray-color)]`}>
              로그아웃
            </span>
          </li>
        </ul>
      </div>
    )
  );
}
