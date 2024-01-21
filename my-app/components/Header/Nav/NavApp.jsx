import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faMessage,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

// App(w < 744px)
export default function NavApp() {
  const router = useRouter();

  return (
    <nav className="hidden bnb_sm:block border-t-[1px] border-solid border-[#DDDDDD] fixed bottom-0 left-0 w-[100%] bg-[#fff] z-[99] py-[10px]">
      <ul className="flex flex-row justify-evenly items-center">
        <li>
          <Link
            href={"/"}
            className={`${
              router.pathname === "/"
                ? "text-[var(--brand-color)]"
                : "text-[#717171]"
            } flex flex-col justify-center items-center gap-[4px]`}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[24px]" />
            <div className="text-[10px]">둘러보기</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/wishlists"}
            className={`${
              router.pathname === "/wishlists"
                ? "text-[var(--brand-color)]"
                : "text-[#717171]"
            } flex flex-col justify-center items-center gap-[4px]`}
          >
            <FontAwesomeIcon icon={faHeart} className="text-[24px]" />
            <div className="text-[10px]">위시리스트</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/trips/v1"}
            className={`${
              router.pathname === "/trips/v1"
                ? "text-[var(--brand-color)]"
                : "text-[#717171]"
            } flex flex-col justify-center items-center gap-[4px]`}
          >
            <FontAwesomeIcon icon={faAirbnb} className="text-[24px]" />
            <div className="text-[10px]">여행</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/guest/inbox"}
            className={`${
              router.pathname === "/guest/inbox"
                ? "text-[var(--brand-color)]"
                : "text-[#717171]"
            } flex flex-col justify-center items-center gap-[4px]`}
          >
            <FontAwesomeIcon icon={faMessage} className="text-[24px]" />
            <div className="text-[10px]">메시지</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/account-settings"}
            className={`${
              router.pathname === "/account-settings"
                ? "text-[var(--brand-color)]"
                : "text-[#717171]"
            } flex flex-col justify-center items-center gap-[4px]`}
          >
            <FontAwesomeIcon icon={faCircleUser} className="text-[24px]" />
            <div className="text-[10px]">프로필</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
