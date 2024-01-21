import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// 계정페이지 (sm 사이즈 일 때 item)
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
