import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function AccountAppDetailItem({ link, itemName, itemDetail }) {
  return (
    <Link href={link}>
      <div className="w-full h-[96px] py-[24px] border-b-[1px] flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <div>{itemName}</div>
          <div className="text-[14px] text-gray-500">{itemDetail}</div>
        </div>
        <FontAwesomeIcon icon={faChevronRight} className="text-[20px]" />
      </div>
    </Link>
  );
}
