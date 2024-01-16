import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function AccountItemTitle({ title_route, title_h2 }) {
  return (
    <section className="bnb_md_xl:my-[40px] bnb_sm:mt-[20px]">
      <div className="flex flex-row gap-[16px] text-[14px] mb-[8px] bnb_sm:hidden">
        <Link href={"/account-settings"} className="hover:underline">
          <span>계정</span>
        </Link>
        <span>{">"}</span>
        <span>{title_route}</span>
      </div>
      <div className="bnb_md_xl:hidden h-[64px]">
        <Link href={"/account-settings"} className="p-[12px] ml-[-12px]">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </div>
      <h2 className="text-[30px] font-[700] bnb_sm:text-[20px] ">{title_h2}</h2>
    </section>
  );
}
