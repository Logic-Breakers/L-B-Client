import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// (App) 계정 페이지에서 보여주는 아이템들
export default function AccountAppItem({ link, icon, itemName }) {
  return (
    <Link href={link}>
      <div className="w-full h-[56px] py-[16px] flex flex-row justify-between">
        <div className="flex flex-row gap-[16px] items-center">
          <div className="text-[24px]">{icon}</div>
          <div className="text-[16px]">{itemName}</div>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </Link>
  );
}
